import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'stores';
import { getPostsThunk } from 'stores/post';

const usePosts = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state: RootState) => state.post);

  useEffect(() => {
    dispatch(getPostsThunk());
  }, [dispatch]);

  return {
    data,
    loading,
  };
}

export default usePosts;