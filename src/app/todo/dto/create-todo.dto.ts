import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsNotEmpty } from 'class-validator';
import { PriorityEntity } from '../entity/todo.entity';

export class CreateTodoDto {
  @IsNotEmpty()
  @ApiProperty()
  task: string;

  @IsNotEmpty()
  @IsIn([1, 2, 3])
  @ApiProperty()
  priority: PriorityEntity;

  @IsNotEmpty()
  @IsIn([1, 0])
  @ApiProperty()
  isDone: number;
}
