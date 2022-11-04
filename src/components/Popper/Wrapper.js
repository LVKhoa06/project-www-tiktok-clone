import clsx from 'clsx';
import styles from './Popper.module.css';

function Wrapper({ children, className }) {
    return <div className={clsx(styles.wrapper, className)}>{children}</div>;
}
export default Wrapper;
