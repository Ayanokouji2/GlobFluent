import userModel from "../Models/user.model";
import asyncHandler from "../Utils/asyncHandler";
import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';


export interface UserRequest extends Request{
    user : { _id : string}
}

export const verifyUser = asyncHandler( async ( req : UserRequest, res : Response, next : NextFunction ) => {

    const bearerToken : string = req.cookies.userAuthToken || req.headers.authorization?.replace("Bearer ","") || "" ;

    if ( !bearerToken ) {
        return res.redirect( '/login' );
    }

    const decodedToken = jwt.verify( bearerToken as string, process.env.ACCESS_TOKEN as string) as  JwtPayload 
    const user  = await userModel.findById(decodedToken._id).select("_id")

    if ( !user ) {
        return res.redirect( '/login' );
    }
    
    req.user = { _id : user._id as string };

    next()
})