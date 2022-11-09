import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './Popper.module.css';

function Wrapper({ children, className }) {
    return <div className={clsx(styles.wrapper, className)}>{children}</div>;
}

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Wrapper;
