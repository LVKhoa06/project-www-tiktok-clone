import PropTypes from 'prop-types';
import styles from './SuggestedAccounts.module.css';
import AccountItem from './AccountsItems';
import clsx from 'clsx';

function SuggestedAccounts({ label }) {
    return (
        <div className={clsx(styles.wrapper)}>
            <p className={clsx(styles.label)}>{label}</p>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <p className={clsx(styles.moreBtn)}>See all</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
