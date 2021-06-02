import { useParams } from 'react-router-dom';

type PageParam = {
  id: string;
}

const usePageParam = () => {
  const { id } = useParams<PageParam>();
  return Number(id);
}

export default usePageParam;