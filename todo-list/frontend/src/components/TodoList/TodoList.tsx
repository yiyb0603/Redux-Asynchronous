import TodoInput from 'components/TodoInput';
import useTodoList from 'hooks/useTodoList';
import { ITodo } from 'interface/todo.interface';
import TodoItem from './TodoItem';

import './TodoList.scss';

const TodoList = (): JSX.Element => {
  const { todos, loading } = useTodoList();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='TodoList'>
      <TodoInput />

      {
        todos ? todos.map(({ id, contents, isCompleted }: ITodo) => (
          <TodoItem
            key={id}
            id={id}
            contents={contents}
            isCompleted={isCompleted}
          />
        )) : <div>Does not exist Todo list.</div>
      }
    </div>
  );
};

export default TodoList;
