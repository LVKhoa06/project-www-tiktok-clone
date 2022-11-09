import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './AccountPreview.module.css';
import clsx from 'clsx';

function AccountPreview() {
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.header)}>
                <img
                    className={clsx(styles.avatar)}
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_758x608_2X_en_US._SY608_CB418608386_.jpg"
                    alt=""
                />
                <Button className={clsx(styles.followBtn)} primary>
                    Follow
                </Button>
            </div>
            <div className={clsx(styles.body)}>
                <p className={clsx(styles.nickname)}>
                    <strong>luongvankhoa</strong>
                    <FontAwesomeIcon className={clsx(styles.check)} icon={faCheckCircle} />
                </p>
                <p className={clsx(styles.name)}>Lương Văn Khoa</p>
                <p className={clsx(styles.analytics)}>
                    <strong className={clsx(styles.value)}>8.2M </strong>
                    <span className={clsx(styles.label)}>Followers</span>
                    <strong className={clsx(styles.value)}>8.2M </strong>
                    <span className={clsx(styles.label)}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
