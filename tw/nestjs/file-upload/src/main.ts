import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import path from 'path';
import fs from "fs"

async function bootstrap() {

	const uploaDirectory = path.join(__dirname, '..', 'uploads')
	if(!fs.existsSync(uploaDirectory)){
		fs.mkdirSync(uploaDirectory)
	}
	const app = await NestFactory.create(AppModule);
	await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
