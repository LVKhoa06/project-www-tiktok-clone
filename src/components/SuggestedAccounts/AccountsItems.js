import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';
import styles from './SuggestedAccounts.module.css';

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[600, 0]} offset={[-0, 0]} placement="bottom" render={renderPreview}>
                <div className={clsx(styles.accountItem)}>
                    <img
                        className={clsx(styles.avatar)}
                        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_758x608_2X_en_US._SY608_CB418608386_.jpg"
                        alt=""
                    />
                    <div className={clsx(styles.itemInfo)}>
                        <p className={clsx(styles.nickname)}>
                            <strong>luongvankhoa</strong>
                            <FontAwesomeIcon className={clsx(styles.check)} icon={faCheckCircle} />
                        </p>
                        <p className={clsx(styles.name)}>Lương Văn Khoa</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
