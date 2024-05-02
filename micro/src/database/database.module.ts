import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseProviders } from './database.providers';
import { ItemEntity } from 'src/modules/items/entities/item.entity';

@Module({
  imports: [
    // registers Database config
    TypeOrmModule.forRoot({
      ...databaseProviders, //db config
      entities: [ItemEntity],
    }),
  ],
})
export class DatabaseModule {}
