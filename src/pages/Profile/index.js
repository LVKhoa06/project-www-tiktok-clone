import clsx from 'clsx';
import styles from './Profile.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare, faEllipsis, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import { useLocation } from 'react-router-dom';
import * as searchServices from '~/services/searchService';
import { useEffect, useState } from 'react';
import { useDebounce } from '~/hooks';
import images from '~/assets/images';

function Profile() {
    const location = useLocation();
    let pathname = location.pathname.slice(2);
    const debouncedpathname = useDebounce(pathname, 200);
    let [user, setUser] = useState({});
    const debouncedValue = useDebounce(user, 300);

    useEffect(() => {
        const fetchApi = async () => {
            let result = await searchServices.searchItem(pathname);
            result = result.filter((item) => {
                return item.nickname === debouncedpathname;
            });
            setUser(result[0]);
        };
        fetchApi();
    }, [debouncedpathname]);

    return (
        <div className={clsx(styles.wrapper)}>
            <div>
                <div className={clsx(styles.header)}>
                    <a className={styles.image}>
                        <img
                            className={clsx(styles.avatar)}
                            src={debouncedValue.avatar ? debouncedValue.avatar : images.noImage}
                        />
                    </a>
                    <div className={clsx(styles.wrapperTop)}>
                        <h2 className={clsx(styles.nickname)}>
                            {debouncedValue.nickname}
                            {debouncedValue.tick && (
                                <FontAwesomeIcon className={clsx(styles.check)} icon={faCheckCircle} />
                            )}
                        </h2>
                        <h4 className={clsx(styles.fullName)}>{debouncedValue.full_name}</h4>
                        <div className={clsx(styles.wrapBtn)}>
                            <Button className={clsx(styles.btn)} primary>
                                Follow
                            </Button>
                        </div>
                    </div>
                </div>
                <div>
                    <p className={clsx(styles.info)}>
                        <strong className={clsx(styles.quantity)}>{debouncedValue.followings_count}</strong>
                        <span className={clsx(styles.text)}>Following</span>
                        <strong className={clsx(styles.quantity)}>{debouncedValue.followers_count}</strong>
                        <span className={clsx(styles.text)}>Followers</span>
                        <strong className={clsx(styles.quantity)}>{debouncedValue.likes_count}</strong>
                        <span className={clsx(styles.text)}>Likes</span>
                    </p>
                </div>
                <div>
                    <p className={clsx(styles.bio)}>{debouncedValue.bio}</p>
                    <p className={clsx(styles.contact)}>{debouncedValue.website_url}</p>
                </div>
                <FontAwesomeIcon className={clsx(styles.icon)} icon={faEllipsis}></FontAwesomeIcon>
                <FontAwesomeIcon className={clsx(styles.icon, styles.iconShare)} icon={faShare}></FontAwesomeIcon>
            </div>
            <div className={clsx(styles.wrapper)}></div>
        </div>
    );
}

export default Profile;
