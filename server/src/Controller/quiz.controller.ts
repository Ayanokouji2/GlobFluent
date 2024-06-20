import asyncHandler from '../Utils/asyncHandler'
import quizModel from '../Models/quiz.model'
import { Request, Response } from 'express'
import ApiResponse from '../Utils/ApiResponse';
import ApiError from '../Utils/ApiError';

export const getAllQuizes = asyncHandler(async ( req : Request , res : Response ) => {
    const allQuizes = await quizModel.find();
    
    res.status(200).json( new ApiResponse(201, "All the available quizes", allQuizes))
})

export const getQuizById = asyncHandler(async ( req : Request, res: Response) =>{

    const quizId = req.params.id as string

    if(!quizId)
        throw new ApiError("Quiz Error", "quizId not found")

    const quiz = await quizModel.findById(quizId)

    await quizModel.aggregate([
        {
            $match:{
                _id : quizId
            }
        }
    ])

})