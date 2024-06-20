import asyncHandler from "../Utils/asyncHandler";
import { Response, Request } from 'express';
import userModel from '../Models/user.model'
import ApiError from "../Utils/ApiError";
import ApiResponse from "../Utils/ApiResponse";


export const getAllUser = asyncHandler(async (req: Request, res: Response) => {
    res.status(200).json({
        message: 'Get all users'
    })
})

export const registerUser = asyncHandler(async (req: Request, res: Response) => {

    const { username, email, password } = req.body

    if(!username || !email || !password){
        throw new ApiError("User Error", " Please provide all the required fields", "400")
    }

    console.log('IN USER CONTROLLER')

    const createdUser = await userModel.create({username, email, password})

    if(!createdUser){
        throw new ApiError("User Error", "User not created", "500")
    }

    res.status(201).json( new ApiResponse(201, "User created successfully", createdUser))
})

