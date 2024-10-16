import React, { ChangeEvent, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "src/services/redux/store";
import { WriteBoardData } from "src/type/formType";
import { createPost } from "src/services/queries/usePostsQuery";
import styles from './WritePage.module.css';

const WritePage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { user, decodedToken, loading: userLoading } = useSelector((state: RootState) => state.user);

  const [write, setWrite] = useState<WriteBoardData>({
    title: "",
    content: "",
    authorId: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setWrite((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await createPost(write);
      alert("게시글이 성공적으로 작성되었습니다!");
      navigate('/board');
    } catch (error) {
      console.error("게시글 작성 오류:", error);
      alert("게시글 작성에 실패했습니다. 다시 시도해주세요.");
    }
  };

  useEffect(() => {
    if (!user && !userLoading) {
      alert("로그인 후 이용 가능합니다.");
      navigate('/login');
    } else if (user) {
      setWrite((prev) => ({
        ...prev,
        authorId: user.userId,
      }));
    }
  }, [user, userLoading, navigate]);

  if (userLoading) {
    return (
      <div className={styles.writeContainer}>
        <p>로딩 중...</p>
      </div>
    );
  }

  return (
    <div className={styles.writeContainer}>
      <h1>게시글 작성</h1>
      <div className={styles.inputBox}>
        <label htmlFor="title">제목</label>
        <input
          type="text"
          id="title"
          name="title"
          value={write.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.inputBox}>
        <label htmlFor="content">내용</label>
        <textarea
          id="content"
          name="content"
          value={write.content}
          onChange={handleChange}
          required
        />
      </div>
      <button onClick={handleSubmit} className={styles.submitButton}>
        작성하기
      </button>
    </div>
  );
};

export default WritePage;
