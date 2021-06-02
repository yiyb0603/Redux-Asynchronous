import { PartialType } from '@nestjs/mapped-types';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  readonly contents;

  @IsBoolean()
  @IsNotEmpty()
  readonly isCompleted;
}

export class ModifyTodoDto extends PartialType(CreateTodoDto) {}