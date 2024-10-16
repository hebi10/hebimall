import React from 'react';
import styles from './BoardPage.module.css';
import { usePostsQuery } from 'src/services/queries/usePostsQuery';
import { Link } from 'react-router-dom';

type Posts = {
  _id: string;
  userId: string;
  title: string;
  content: string;
}

const BoardPage: React.FC = () => {
  const { data: posts, isLoading } = usePostsQuery();

  if(isLoading) return <p>로딩중...</p>;

  return (
    <div className={styles.boardContainer}>
      <h1 className={styles.boardTitle}>일반 게시판</h1>

      <ul className={styles.boardList}>
        {posts.map((post: Posts) => (
          <li key={post._id} className={styles.boardItem}>
            <Link to={`/board/${post._id}`}>
              <h2 className={styles.boardItemTitle}>[{post.userId}] {post.title}</h2>
              <p className={styles.boardItemContent}>{post.content}</p>
            </Link>
          </li>
        ))}
      </ul>
      
      <Link to="/write" className={`btn ${styles.btn} flex-center-box`}>글쓰기</Link>
    </div>
  );
};

export default BoardPage;
