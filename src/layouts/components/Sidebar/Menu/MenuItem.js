import clsx from 'clsx';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.css';

function MenuItem({ title, to, icon, activeIcon }) {
    return (
        <NavLink className={(nav) => clsx(styles.menuItem, { active: nav.isActive })} to={to}>
            <span className={clsx(styles.icon)}>{icon}</span>
            <span className={clsx(styles.activeIcon)}>{activeIcon}</span>
            <span className={clsx(styles.title)}>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    activeIcon: PropTypes.node.isRequired,
};

export default MenuItem;
