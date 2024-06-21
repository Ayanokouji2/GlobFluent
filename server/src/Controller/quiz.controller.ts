import asyncHandler from '../Utils/asyncHandler'
import quizModel from '../Models/quiz.model'
import { Request, Response } from 'express'
import ApiResponse from '../Utils/ApiResponse';
import ApiError from '../Utils/ApiError';
import questionModel from '../Models/question.model';

export const getAllQuizes = asyncHandler(async (req: Request, res: Response) => {
    const allQuizes = await quizModel.find();

    res.status(200).json(new ApiResponse(201, "All the available quizes", allQuizes))
})


// When the user clicks on the quiz, the request will be sent to the server with the quiz id and receive all the questions for the quiz nd when the user clicks start quiz, then the questions will be displayed one by one.
export const getQuizById = asyncHandler(async (req: Request, res: Response) => {

    const quizId = req.params.id as string

    if (!quizId)
        throw new ApiError("Quiz Error", "quizId not found")

    const quiz = await quizModel.findById(quizId)

    if (!quiz)
        throw new ApiError("Quiz Error", `Quiz with the id ${quizId} was not found in the database`)


    const promisedAllQuestions = quiz?.questions.map(async (quesId) => {
        return await questionModel.findById(quesId)
    })

    const allQuestionWithoptions = await Promise.all(promisedAllQuestions)


    res.status(200).json(new ApiResponse(200, "Question for student to take quiz", allQuestionWithoptions))

})


export const createQuiz = asyncHandler(async (req: Request, res: Response): Promise<void> => {

    const { title, questions, marks } = req.body

    if (!title || !questions || !marks )
        throw new ApiError("Quiz Error", "Please provide all the required fields")

    const questionObject = await questionModel.insertMany(questions)

    if(!questionObject)
        throw new ApiError("Question Error", "Questions could not be created")

    const questionsId = questionObject.map((ques )=>(ques._id))

    const createdQuiz = await quizModel.create({ title, questions: questionsId, marks })

    res.status(201).json(new ApiResponse(201, "Quiz created successfully", createdQuiz))

})