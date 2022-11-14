import PropTypes from 'prop-types';
import Button from '~/components/Button';
import clsx from 'clsx';
import styles from './Menu.module.css';

function MenuItem({ data, onClick }) {
    const classes = clsx(styles.menuItem, styles.btn, {
        separate: data.separate,
    });

    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default MenuItem;
