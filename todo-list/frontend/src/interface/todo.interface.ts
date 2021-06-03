export interface ITodo {
  id: string;
  contents: string;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt: Date | null;
}

export interface ITodoDto {
  contents: string;
  isCompleted: boolean;
}