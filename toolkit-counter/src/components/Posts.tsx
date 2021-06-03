import styled from 'styled-components';
import usePosts from 'hooks/usePosts';
import { IPost } from 'interface/post';

const Posts = (): JSX.Element => {
  const { posts, loading } = usePosts();

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <PostWrapper>
      {
        posts.map((post: IPost) => (
          <PostItem key={post.id}>
            <div>{post.title}</div>
            <div>{post.body}</div>
          </PostItem>
        ))
      }
    </PostWrapper>
  );
}

const PostWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const PostItem = styled.div`
  margin-bottom: 1rem;
`;

export default Posts;