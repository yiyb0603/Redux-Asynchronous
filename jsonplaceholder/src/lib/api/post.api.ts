import customAxios from 'lib/customAxios';

const getPosts = async () => {
  const { data } = await customAxios.get('/posts');
  return data;
}

const getPost = async (id: number) => {
  const { data } = await customAxios.get(`/posts/${id}`);
  return data;
}

export {
  getPosts,
  getPost,
};