import asyncHandler from "../Utils/asyncHandler";
import { Response, Request } from 'express';
import userModel from '../Models/user.model'
import ApiError from "../Utils/ApiError";
import ApiResponse from "../Utils/ApiResponse";


export const getAllUser = asyncHandler(async (req: Request, res: Response) => {

    const allUsers = await userModel.find().select('-password')

    res.status(200).json({
        message: 'Get all users',
        data: allUsers
    })

})

export const registerUser = asyncHandler(async (req: Request, res: Response) => {

    const { username, email, password } = req.body

    if (!username || !email || !password) {
        throw new ApiError("User Error", " Please provide all the required fields", "400")
    }

    const createdUser = await userModel.create({ username, email, password })

    if (!createdUser) {
        throw new ApiError("User Error", "User not created", "500")
    }

    res.status(201).json(new ApiResponse(201, "User created successfully", createdUser))
})

export const loginUser = asyncHandler(async (req: Request, res: Response) => {

    const { username, password } = req.body

    if (!username || !password) {
        throw new ApiError("User Error", " Please provide all the required fields", "400")
    }

    const user = await userModel.findOne({ username }).select("-password")

    if (!user) {
        throw new ApiError("User Error", "User not found", "404")
    }

    const isMatch = await user.comparePassword(password)

    if (!isMatch) {
        throw new ApiError("User Error", "Invalid credentials", "401")
    }

    res.status(200).json(new ApiResponse(200, "User logged in successfully", user))
})
