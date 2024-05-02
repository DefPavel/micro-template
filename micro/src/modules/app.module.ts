import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule, ItemsModule],
})
export class AppModule {}
