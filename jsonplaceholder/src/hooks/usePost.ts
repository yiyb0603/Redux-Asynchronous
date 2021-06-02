import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'stores';
import { getPostThunk } from 'stores/post';
import usePageParam from './util/usePageParam';

const usePost = () => {
  const id: number = usePageParam();
  const dispatch = useDispatch();

  const { loading, data, error } = useSelector((state: RootState) => state.post);

  useEffect(() => {
    if (Number.isInteger(id)) {
      dispatch(getPostThunk(id));
    }
  }, [dispatch, id]);
  
  return {
    loading,
    data,
    error,
  };
}

export default usePost;