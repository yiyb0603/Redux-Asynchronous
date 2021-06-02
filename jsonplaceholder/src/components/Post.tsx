import usePost from 'hooks/usePost';

const Post = (): JSX.Element => {
  const { loading, data, error } = usePost();

  if (loading) {
    return <div>로딩중입니다</div>
  }

  if (error !== null) {
    return <div>에러 발생!</div>
  }

  return (
    <div>
      <div>{data?.post.title}</div>
      <div>{data?.post.body}</div>
    </div>
  );
}

export default Post;