import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './AccountPreview.module.css';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

function AccountPreview({ full_name, avatar, nickname, likes_count, followers_count, tick }) {
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.header)}>
                <Link to={`/@${nickname}`}>
                    <img className={clsx(styles.avatar)} src={avatar} alt="" />
                </Link>
                <Button className={clsx(styles.followBtn)} primary>
                    Follow
                </Button>
            </div>
            <div className={clsx(styles.body)}>
                <p className={clsx(styles.nickname)}>
                    <Link to={`/@${nickname}`}>
                        <strong>{nickname}</strong>
                        {tick && <FontAwesomeIcon className={clsx(styles.check)} icon={faCheckCircle} />}
                    </Link>
                </p>
                <Link to={`/@${nickname}`}>
                    <p className={clsx(styles.name)}>{full_name}</p>
                </Link>
                <p className={clsx(styles.analytics)}>
                    <strong className={clsx(styles.value)}>{followers_count}</strong>
                    <span className={clsx(styles.label)}>Followers</span>
                    <strong className={clsx(styles.value)}>{likes_count}</strong>
                    <span className={clsx(styles.label)}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
