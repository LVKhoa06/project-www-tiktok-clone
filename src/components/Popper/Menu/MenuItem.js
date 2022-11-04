import Button from '~/components/Button';
import clsx from 'clsx';
import styles from './Menu.module.css';

function MenuItem({ data, onClick }) {
    const classes = clsx(styles.menuItem, {
        separate: data.separate,
    });

    return (
        <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
