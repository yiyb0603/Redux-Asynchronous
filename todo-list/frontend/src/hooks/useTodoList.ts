import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'stores';
import { getTodosThunk } from 'stores/todo';

const useTodoList = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: RootState) => state.todo);
  const { todos } = useSelector((state: RootState) => state.todo.data);

  const requestTodoList = useCallback((): void => {
    dispatch(getTodosThunk());
  }, [dispatch]);

  useEffect(() => {
    requestTodoList();
  }, [requestTodoList]);

  return {
    loading,
    todos,
    error,
  };
}

export default useTodoList;