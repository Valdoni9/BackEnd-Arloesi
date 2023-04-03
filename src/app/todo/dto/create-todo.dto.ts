import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsNotEmpty, Validate } from 'class-validator';
import { PriorityEntity } from '../entity/todo.entity';
import { forbiddentochange } from './validate-todo.dto';

export class CreateTodoDto {
  @IsNotEmpty()
  @ApiProperty()
  task: string;

  @IsNotEmpty()
  @IsIn([0, 1, 2])
  @ApiProperty()
  priority: PriorityEntity;

  @IsNotEmpty()
  @IsIn([0, 1])
  @ApiProperty()
  @Validate(forbiddentochange)
  isDone: number;
}
