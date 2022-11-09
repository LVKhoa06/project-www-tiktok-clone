import PropTypes from 'prop-types';
import Header from '../components/Header';
import clsx from 'clsx';
import styles from './DefaultLayout.module.css';
import Sidebar from '~/layouts/components/Sidebar/Sidebar';

function DefaultLayout({ children }) {
    return (
        <div className={clsx(styles.wrapper)}>
            <Header />
            <div className={clsx(styles.container)}>
                <Sidebar />
                <div className={clsx(styles.container)}>{children}</div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
