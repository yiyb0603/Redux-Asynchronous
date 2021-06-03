import { MdClose } from 'react-icons/md';
import useTodoDelete from 'hooks/useTodoDelete';
import './TodoItem.scss';

interface TodoItemProps {
  id: string;
  contents: string;
  isCompleted: boolean;
}

const TodoItem = ({
  id,
  contents,
  isCompleted,
}: TodoItemProps): JSX.Element => {
  const { requestDeleteTodo } = useTodoDelete();

  return (
    <div className='TodoItem'>
      <div>{contents}</div>

      <MdClose
        className='TodoItem-Close'
        onClick={() => requestDeleteTodo(id)}
      />
    </div>
  );
};

export default TodoItem;
