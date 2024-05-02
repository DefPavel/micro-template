import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemEntity } from './entities/item.entity';
import { Repository } from 'typeorm';
import { CreateItemDto } from './dto/create-item.dto';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(ItemEntity)
    private itemRepository: Repository<ItemEntity>,
  ) {}

  createItem(itemDto: CreateItemDto) {
    const item = new ItemEntity();
    item.name = itemDto.name;
    return this.itemRepository.save(item);
  }

  getItemById(id: number) {
    return this.itemRepository.findOne({ where: { id } });
  }
}
