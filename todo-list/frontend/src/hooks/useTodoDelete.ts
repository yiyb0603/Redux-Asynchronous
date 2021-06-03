import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodoThunk, getTodosThunk } from 'stores/todo';

const useTodoDelete = () => {
  const dispatch = useDispatch();
  
  const requestDeleteTodo = useCallback((id: string): void => {
    dispatch(deleteTodoThunk(id));
    dispatch(getTodosThunk());
  }, [dispatch]);

  return {
    requestDeleteTodo,
  };
}

export default useTodoDelete;