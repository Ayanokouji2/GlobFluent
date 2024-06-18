import asyncHandler from "../Utils/asyncHandler";
import { Response, Request, NextFunction } from 'express';

export const getAllUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
        message: 'Get all users'
    })
})

