import React from 'react';
import styles from './NoticePage.module.css';

const NoticePage: React.FC = () => {
    return (
        <div className={styles.noticeContainer}>
            <h1>Notices</h1>
            <div className={styles.noticeList}>
                {/* 공지사항 리스트 */}
                <div className={styles.notice}>
                    <h3>Notice Title</h3>
                    <p>This is the content of the notice.</p>
                </div>
                {/* ... */}
            </div>
        </div>
    );
};

export default NoticePage;
