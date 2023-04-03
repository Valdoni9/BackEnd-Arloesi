import { Validate } from 'class-validator';
import { CreateTodoDto } from './create-todo.dto';
import { forbiddentochange } from './validate-todo.dto';

export class UpdateTodoDto extends CreateTodoDto {}
