import React from 'react';
import styles from './FAQPage.module.css';

const FAQPage: React.FC = () => {
    return (
        <div className={styles.faqContainer}>
            <h1>Frequently Asked Questions</h1>
            <div className={styles.faqList}>
                {/* FAQ 리스트 */}
                <div className={styles.faqItem}>
                    <h3>Question?</h3>
                    <p>Answer to the question.</p>
                </div>
                {/* ... */}
            </div>
        </div>
    );
};

export default FAQPage;
