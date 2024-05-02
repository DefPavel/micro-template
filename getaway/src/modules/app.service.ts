import { Inject, Injectable } from '@nestjs/common';
import { ITEM_MICROSERVICE } from '../common/constants';
import { ClientProxy } from '@nestjs/microservices';
import { CreateItemDto } from './dto/item.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject(ITEM_MICROSERVICE) private readonly client: ClientProxy,
  ) {}

  createItem(createItemDto: CreateItemDto) {
    return this.client.send({ role: 'item', cmd: 'create' }, createItemDto);
  }

  getItemById(id: number) {
    return this.client.send({ role: 'item', cmd: 'get-by-id' }, id);
  }
}
