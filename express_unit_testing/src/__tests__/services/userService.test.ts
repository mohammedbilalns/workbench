import { findUserById } from "../../services/userService"

describe('User Service - findUserById', ()=> {
  it('should return user data when valid ID is provided', () => {
    const user = findUserById(1)
    expect(user).toEqual({id:1 , name:"John Doe"})
  })
})
