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