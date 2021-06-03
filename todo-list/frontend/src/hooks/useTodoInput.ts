import { useCallback, KeyboardEvent, useState, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ITodoDto } from 'interface/todo.interface';
import { RootState } from 'stores';
import { createTodoThunk, getTodosThunk } from 'stores/todo';

const useTodoInput = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.todo);
  
  const [request, setRequest] = useState<ITodoDto>({
    contents: '',
    isCompleted: false,
  });

  const onChangeRequest = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target;

    setRequest((prevRequest: ITodoDto) => ({
      ...prevRequest,
      [name]: value,
    }));
  }, []);

  const onClearRequest = useCallback((): void => {
    setRequest({
      contents: '',
      isCompleted: false,
    });
  }, []);

  const requestCreateTodo = useCallback(({ key }: KeyboardEvent<HTMLInputElement>): void => {
    if (key === 'Enter') {
      dispatch(createTodoThunk(request));

      dispatch(getTodosThunk());
    }
  }, [dispatch, request]);

  return {
    loading,
    request,
    onChangeRequest,
    onClearRequest,
    requestCreateTodo,
  };
}

export default useTodoInput;