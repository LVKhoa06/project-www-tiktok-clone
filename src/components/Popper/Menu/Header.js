import PropTypes from 'prop-types';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import styles from './Menu.module.css';

function Header({ title, onBack }) {
    return (
        <header className={clsx(styles.header)}>
            <button className={clsx(styles.backBtn)} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className={clsx(styles.headerTitle)}>{title}</h4>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
};

export default Header;
