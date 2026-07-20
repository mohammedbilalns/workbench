import { AppError } from "../errors/AppError";
import { createUser, findUserByEmail, findUserByEmailWithPassword} from "../repositories/user.repository";
import bcrypt from "bcryptjs"

export async function registerUser(
  email: string,
  password: string
){

  if (!email || !password){
    throw new AppError(400, "Email and password are required")
  }

  if(password.length < 6 ){
    throw new AppError(400,  "Password must be at least 6 chars long ")
  }

  const normalizedEmail = email.trim().toLowerCase()

  const existingUsr = await  findUserByEmail(normalizedEmail) 
  if(existingUsr){
    throw new AppError(409, "Email already present")
  }

  const passwordHash = await bcrypt.hash(password, 10 ) 

  await createUser(email, passwordHash)

}

export async function loginUser(email: string, password: string){

  if (!email || !password){
    throw new AppError(400, "Email and password are required")
  }

  const normalizedEmail = email.trim().toLowerCase()

  const user = await findUserByEmailWithPassword(normalizedEmail)

  if(!user || !user.password_hash){
    throw new AppError(401, "Invalid email or password")
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password_hash)

  if(!isPasswordMatch){
    throw new AppError(401, "Invalid email or password")
  }

  const accessToken = signAccessToken(user)
}
