import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';
import styles from './SuggestedAccounts.module.css';
import * as searchServices from '~/services/searchService';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function AccountItem({ full_name, avatar, nickname, tick }) {
    const [curUser, setCurUser] = useState('');

    const handleMove = async () => {
        let result = await searchServices.searchAll(nickname);
        result = result.filter((item) => {
            return item.nickname === nickname;
        });

        if (result === []) {
            return;
        } else {
            setCurUser(result[0]);
        }
    };

    const renderPreview = (...props) => {
        return (
            <div {...props}>
                <PopperWrapper>
                    <AccountPreview
                        followers_count={curUser.followings_count}
                        likes_count={curUser.likes_count}
                        nickname={curUser.nickname}
                        avatar={curUser.avatar}
                        full_name={curUser.full_name}
                        tick={curUser.tick}
                    />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[600, 0]} offset={[0]} placement="bottom" render={renderPreview}>
                <Link to={`/@${curUser.nickname}`}>
                    <div onMouseEnter={handleMove} className={clsx(styles.accountItem)}>
                        <img className={clsx(styles.avatar)} src={avatar} alt="" />
                        <div className={clsx(styles.itemInfo)}>
                            <p className={clsx(styles.nickname)}>
                                <strong>{nickname}</strong>
                                {tick && <FontAwesomeIcon className={clsx(styles.check)} icon={faCheckCircle} />}
                            </p>
                            <p className={clsx(styles.name)}>{full_name}</p>
                        </div>
                    </div>
                </Link>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
