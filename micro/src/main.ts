import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';

const logger = new Logger('Microservice');

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    logger: logger,
  });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen().then(() => logger.log('Microservice is listening'));
}
bootstrap();
