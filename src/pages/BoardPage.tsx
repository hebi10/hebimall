import React from 'react';
import './BoardPage.module.css';
import { usePostsQuery } from 'src/services/queries/usePostsQuery';
import { Link } from 'react-router-dom';

type Posts = {
  _id: string;
  userId: string;
  title: string;
  content: string;
}

const BoardPage: React.FC = () => {
  const { data: posts } = usePostsQuery();

  console.log(posts);

  return (
    <div className="board-container">
      <h1 className="board-title">Community Board</h1>
      <p>일반 게시판</p>
      <ul className="board-list">
        {posts.map((post: Posts) => (
          <li key={post._id} className="board-item">
            <Link to={`/board/${post._id}`}>
              <div className="title">
                <h2 className="board-item-title">{post.title}</h2>
                <em>{post.content}</em>
              </div>
              <p className="board-item-content">작성자: {post.userId}</p>
            </Link>
          </li>
        ))}
      </ul>
      <button>글쓰기</button>
    </div>
  );
};

export default BoardPage;
