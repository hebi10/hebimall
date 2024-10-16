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
  const { data: posts } = usePostsQuery();

  console.log(posts);

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
      <div className='flex-center-box'>
        <button className={`btn ${styles.btn}`}>글쓰기</button>
      </div>
    </div>
  );
};

export default BoardPage;
