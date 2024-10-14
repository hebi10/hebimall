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
    <div className="post-container">
      <h2 className="board-item-title">{post.title}</h2>
      <p className="board-item-content">{post.content}</p>
      <p className="board-item-content">작성자: {post.userId}</p>
    </div>
  );
};

export default BoardDetailPage;
