import { NextFunction, Request, Response } from "express";
import { AppError } from "../err/AppError";

export function AppErrorMiddleware(
  error: any,
  request: Request,
  response: Response,
  next: NextFunction
) {
    if(error instanceof AppError){
        response.status(error.statusCode).json({
            error: error.message
        })
    }
}
