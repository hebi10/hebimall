import React from 'react';
import './BoardPage.module.css';
import { useParams } from 'react-router-dom';
import { useFindPostsQuery } from 'src/services/queries/usePostsQuery';

const BoardDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: post, error, isLoading } = useFindPostsQuery(String(id));

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div className="post-container">
        <h2 className="board-item-title">[{post.userId}] {post.title}</h2>
        <p className="board-item-content">{post.content}</p>
      </div>
      <button className='btn'>수정하기</button>
    </>
  );
};

export default BoardDetailPage;
