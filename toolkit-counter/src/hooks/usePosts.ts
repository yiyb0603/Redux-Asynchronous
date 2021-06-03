import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'stores';
import { getPostsThunk } from 'stores/post/post.slice';

const usePosts = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state: RootState) => state.postSlice);

  useEffect(() => {
    dispatch(getPostsThunk());
  }, [dispatch]);

  return {
    loading,
    posts,
  };
}

export default usePosts;