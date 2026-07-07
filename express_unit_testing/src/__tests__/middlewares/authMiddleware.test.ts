import { isAuthenticated } from "../../middlewares/authMiddlware";
import {Request, Response} from "express"


describe('Auth Middleware - isAuthenticated', () => {
  it('should call next if token is valid', () => {
    const req  = {headers: {authorization : 'Bearer validToken'}} as Request; 
    const res = {} as Response
    const next = jest.fn()

    isAuthenticated(req,res,next)

    expect(next).toHaveBeenCalledWith()
  })

  it("should return 403 if token is invalid", () => {
    const req = {headers: {authorization : ''}} as Request
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    } as unknown as Response
    const next = jest.fn()

    isAuthenticated(req,res, next)

    expect(res.status).toHaveBeenCalledWith(403)
    expect(res.json).toHaveBeenCalledWith({message: 'Forbidden'})
  })
})

