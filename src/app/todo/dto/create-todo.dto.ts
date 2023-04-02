import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsNotEmpty } from 'class-validator';
import { PriorityEntity } from '../entity/todo.entity';

export class CreateTodoDto {
  @IsNotEmpty()
  @ApiProperty()
  task: string;

  @IsNotEmpty()
  @IsIn([0, 1, 2])
  @ApiProperty()
  priority: PriorityEntity;

  @IsNotEmpty()
  @IsIn([1, 0])
  @ApiProperty()
  isDone: number;
}
