import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateItemDto {
  id: number | undefined;
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name: string;
}
