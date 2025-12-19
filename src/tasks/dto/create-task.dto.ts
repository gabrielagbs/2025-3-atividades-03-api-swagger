import { IsString, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { TaskStatus } from '../task.entity';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Título da tarefa', example: 'Estudar NestJS', minLength: 1 })
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Descrição da tarefa', example: 'Ler documentação e implementar Swagger' })
  description: string;

  @IsEnum(TaskStatus)
  @IsOptional()
  @ApiPropertyOptional({ description: 'Status da tarefa (opcional)', enum: TaskStatus, default: TaskStatus.ABERTO })
  status?: TaskStatus;
}
