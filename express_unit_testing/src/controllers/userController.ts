import {Request, Response} from "express"

export const getuser = (req: Request, res: Response) => {
  res.status(200).json({id: 1 , name:'John Doe'})
}
