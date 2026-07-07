import {Request, Response, NextFunction } from "express"

export const isAuthenticated = (req: Request, res: Response, next : NextFunction ){
  if(req.headers.authorization === "Bearer validToken"){
    next()
  }else {
    res.status(403).json({message: 'Forbidden'})
}
}
