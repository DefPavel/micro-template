import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';

@Controller()
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @MessagePattern({ role: 'item', cmd: 'create' })
  createItem(itemDto: CreateItemDto) {
    return this.itemsService.createItem(itemDto);
  }

  @MessagePattern({ role: 'item', cmd: 'get-by-id' })
  getItemById(id: string) {
    console.log('tet');

    return this.itemsService.getItemById(+id);
  }
}
