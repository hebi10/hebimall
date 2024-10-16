import React from 'react';
import styles from './AdminPage.module.css';

const AdminPage: React.FC = () => {
    return (
        <div className={styles.adminContainer}>
            <h1>Admin Dashboard</h1>
            <div className={styles.sections}>
                <div className={styles.section}>
                    <h3>Manage Products</h3>
                    <button className={styles.manageBtn}>Go to Products</button>
                </div>
                <div className={styles.section}>
                    <h3>Manage Users</h3>
                    <button className={styles.manageBtn}>Go to Users</button>
                </div>
                <div className={styles.section}>
                    <h3>Manage Orders</h3>
                    <button className={styles.manageBtn}>Go to Orders</button>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
