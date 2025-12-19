import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export enum TaskStatus {
  ABERTO = 'aberto',
  FAZENDO = 'fazendo',
  FINALIZADO = 'finalizado',
}

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'Identificador único da tarefa', example: 1 })
  id: number;

  @Column()
  @ApiProperty({ description: 'Título da tarefa', example: 'Estudar NestJS' })
  title: string;

  @Column()
  @ApiProperty({ description: 'Descrição detalhada da tarefa', example: 'Ler documentação e implementar Swagger' })
  description: string;

  @Column({
    type: 'text',
    enum: TaskStatus,
    default: TaskStatus.ABERTO,
  })
  @ApiProperty({ description: 'Status da tarefa', enum: TaskStatus, example: TaskStatus.ABERTO })
  status: TaskStatus;

  @CreateDateColumn()
  @ApiProperty({ description: 'Data de criação', type: String, example: new Date().toISOString() })
  createdAt: Date;

  @UpdateDateColumn()
  @ApiProperty({ description: 'Data da última atualização', type: String, example: new Date().toISOString() })
  updatedAt: Date;
}
