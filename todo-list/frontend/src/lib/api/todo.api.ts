import customAxios from 'lib/customAxios';

const getTodos = async () => {
  const { data } = await customAxios.get('/todo');
  return data;
}

export {
  getTodos,
};