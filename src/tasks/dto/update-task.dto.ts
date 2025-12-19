import { IsString, IsEnum, IsOptional } from 'class-validator';
import { TaskStatus } from '../task.entity';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateTaskDto {
  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ description: 'Título da tarefa (opcional)', example: 'Estudar NestJS' })
  title?: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({ description: 'Descrição da tarefa (opcional)', example: 'Atualizar README e Swagger' })
  description?: string;

  @IsEnum(TaskStatus)
  @IsOptional()
  @ApiPropertyOptional({ description: 'Status da tarefa (opcional)', enum: TaskStatus })
  status?: TaskStatus;
}
