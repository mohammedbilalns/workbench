import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import bcrypt from 'node_modules/bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { LoginDto,RegisterDto } from './dtos';

@Injectable()
export class AuthService {
	constructor(private prisma: PrismaService, private jwtService: JwtService){}
	
	// handle the registration 
	async register( registerDto: RegisterDto){
		const {email, password} = registerDto

		const existingUser = await this.prisma.user.findUnique({
			where:{email}
		})
		if(existingUser){
			throw new ConflictException('User already exists, please try with a different email')
		}
		const hashedPassword = await bcrypt.hash(password,10)
		const newUser  = await this.prisma.user.create({
			data:{
				email,
				password:hashedPassword
			}
		})
		const {password: _, ...result} = newUser
		return result
	}


	async login(loginDto: LoginDto){
		const {email, password} = loginDto
		
		const user = await this.prisma.user.findUnique({
			where:{email}
		})
		if(!user){
			throw new UnauthorizedException("Invalid credentials! please try again")			
		}
		const isPasswordValid = await bcrypt.compare(password, user.password)
		if(!isPasswordValid){
			throw new UnauthorizedException("Invalid credentials! please try again")		
		}	
		
		const token = this.jwtService.sign({userId: user.id})
		const {password:_ ,...result} = user 

		return {...result, token}
	}
}
