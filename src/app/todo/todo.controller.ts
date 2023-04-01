import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { IndexTodoSwagger } from './swagger/index-todo.swagger';
import { TodoService } from './todo.service';

@Controller('api/todoArloesi')
@ApiTags('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todas as tarefas' })
  @ApiResponse({
    status: 200,
    description: 'Lista de tarefas retornadas com sucesso',
    type: IndexTodoSwagger,
    isArray: true,
  })
  async index() {
    return await this.todoService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Adicionar uma nova tarefa' })
  @ApiResponse({ status: 201, description: 'Nova tarefa criada com sucesso' })
  @ApiResponse({ status: 400, description: 'Parametros inválidos' })
  async create(@Body() body: CreateTodoDto) {
    return await this.todoService.create(body);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Exibir os dados de uma tarefa' })
  @ApiResponse({
    status: 200,
    description: 'Dados de uma tarefa retornado com sucesso.',
  })
  @ApiResponse({ status: 404, description: 'Task não foi encontrada' })
  async show(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.todoService.findOneOrFail(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar os dados de uma tarefa' })
  @ApiResponse({ status: 201, description: 'Tarefa atualizada com sucesso' })
  @ApiResponse({ status: 404, description: 'Task não foi encontrada' })
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: UpdateTodoDto,
  ) {
    return await this.todoService.update(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Remover uma tarefa' })
  @ApiResponse({ status: 204, description: 'Uma tarefa removida com sucesso' })
  @ApiResponse({ status: 404, description: 'Task não foi encontrada' })
  async destroy(@Param('id', new ParseUUIDPipe()) id: string) {
    await this.todoService.deleteById(id);
  }
}
