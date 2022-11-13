import PropTypes from 'prop-types';
import styles from './SuggestedAccounts.module.css';
import AccountItem from './AccountsItems';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import * as searchServices from '~/services/searchService';

function SuggestedAccounts({ label }) {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const getUsers = async () => {
            const CHARACTOR = ['a', 'b', 'c', 'd', 'g', 'k'];
            const randomNumber = Math.floor(Math.random() * 6);

            const result = await searchServices.searchRandom(CHARACTOR[randomNumber]);
            setUsers(result);
        };
        getUsers();
    }, []);

    return (
        <div className={clsx(styles.wrapper)}>
            <p className={clsx(styles.label)}>{label}</p>
            {users.map((item, index) => {
                return (
                    <AccountItem
                        key={index}
                        full_name={item.full_name}
                        avatar={item.avatar}
                        nickname={item.nickname}
                        tick={item.tick}
                    />
                );
            })}
            <p className={clsx(styles.moreBtn)}>See all</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
