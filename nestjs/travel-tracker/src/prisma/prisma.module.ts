import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // makes the modules as globally scoped
@Module({
	// registering prisma service in this module 
	providers: [PrismaService],
	// making sure that prismaservice is available to other modules that will iimport prismamodules 
	exports:[PrismaService]
})
export class PrismaModule {}
