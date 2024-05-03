import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ITEM_MICROSERVICE } from '../common/constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: ITEM_MICROSERVICE,
        transport: Transport.TCP,
        options: {
          port: 8080,
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
