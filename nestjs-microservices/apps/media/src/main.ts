import { NestFactory } from '@nestjs/core';
import { MediaModule } from './media.module';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  process.title = "media"
  const logger = new Logger("Mediabootstrap")

  const queue = process.env.MEDIA_QUEUE ?? "media_queue"

  const rmqUrl = process.env.RABBITMQ_URL ?? "amqp://localhost:5672"
  const app = await NestFactory.createMicroservice(
    MediaModule,
    {
      transport: Transport.RMQ,
      options : {
        urls: [rmqUrl],
        queue,
        queueOptions: {
          durable: false,
        }
      }
    }
  );

  app.enableShutdownHooks()
  await app.listen()

  logger.log(`Media RMQ listenting on qeuue ${queue}`)
}

bootstrap();
