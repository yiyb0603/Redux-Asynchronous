import usePosts from 'hooks/usePosts';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IPost } from 'types/post.type';

const Posts = (): JSX.Element => {
  const { data, loading } = usePosts();

  if (loading) {
    return <div>로딩중입니다....</div>
  }

  return (
    <PostsWrapper>
      {
        data && data.posts.map(({ id, title, body }: IPost) => (
          <PostCard
            to={`/posts/${id}`}
            key={id}
          >
            <PostTitle>제목: {title}</PostTitle>
            <div>내용: {body}</div>
          </PostCard>
        ))
      }
    </PostsWrapper>
  );
}

const PostsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const PostCard = styled(Link)`
  width: 300px;
  height: 200px;
  text-decoration: none;
  color: black;
  margin-left: 0.5rem;
`;

const PostTitle = styled.div`
  margin-bottom: 0.5rem;
`;

export default Posts;