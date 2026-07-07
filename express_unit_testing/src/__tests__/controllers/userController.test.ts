import { getuser } from "../../controllers/userController";

describe("User Controlelr - getUser", () => {
  it('should return user data with status 200', () => {
    const req = {} as Request
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response; 
    getuser(req,res)

    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith({id: 1 , name: "John Doe"})
  })
})
