import Header from '../components/Header';
import Sidebar from './Sidebar';
import clsx from 'clsx';
import styles from './DefaultLayout.module.css';

function DefaultLayout({ children }) {
    return (
        <div className={clsx(styles.wrapper)}>
            <Header />
            <div className={clsx(styles.container)}>
                <Sidebar />
                <div className={clsx(styles.content)}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
