export interface ITodo {
  id: string;
  contents: string;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt: Date | null;
}