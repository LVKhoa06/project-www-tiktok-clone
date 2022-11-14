import clsx from 'clsx';
import styles from './Header.module.css';
import stylesDarkMode from '~/components/ToggleDarkMode/ToggleDarkMode.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import DarkModeToggle from '~/components/ToggleDarkMode';

import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
    faMoon,
} from '@fortawesome/free-solid-svg-icons';
import config from '~/config';
import Login from '../form/Login';
import { useState, useEffect } from 'react';

function Header() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [loginShow, setLoginShow] = useState(false); // Form
    const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark');

    const hanleClick = () => {
        setLoggedIn(true);
    };
    const hanleToggleTheme = () => {
        setDarkMode((current) => !current);
    };

    useEffect(() => {
        const html = document.getElementsByTagName('HTML')[0];
        const body = document.body;
        // const toggle = document.querySelector(`.${clsx(stylesDarkMode.toggleInner)}`);

        html.setAttribute('data-theme', localStorage.getItem('theme'));
        // if (!toggle) return;

        if (darkMode) {
            body.classList.add(clsx(stylesDarkMode.darkMode));
            // toggle.classList.add(clsx(stylesDarkMode.toggleActive));
        } else {
            body.classList.remove(clsx(stylesDarkMode.darkMode));
            // toggle.classList.remove(clsx(stylesDarkMode.toggleActive));
        }
    }, []);

    useEffect(() => {
        const html = document.getElementsByTagName('HTML')[0];
        const body = document.body;
        const toggle = document.querySelector(`.${clsx(stylesDarkMode.toggleInner)}`);

        if (!toggle) return;

        if (darkMode) {
            html.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');

            body.classList.add(clsx(stylesDarkMode.darkMode));
            toggle.classList.add(clsx(stylesDarkMode.toggleActive));
        } else {
            html.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');

            body.classList.remove(clsx(stylesDarkMode.darkMode));
            toggle.classList.remove(clsx(stylesDarkMode.toggleActive));
        }
    }, [darkMode]);

    const menuItem = [
        {
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            title: 'English',
            children: {
                title: 'Language',
                data: [
                    {
                        type: 'language',
                        code: 'en',
                        title: 'English',
                    },
                    {
                        type: 'language',
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'Feedback and help',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'Keyboard shortcuts',
        },
        {
            icon: (
                <div>
                    <FontAwesomeIcon icon={faMoon} />
                    <DarkModeToggle handleToggleBehavior={hanleToggleTheme} />
                </div>
            ),
            title: 'Dark mode',
        },
    ];

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@khoa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...menuItem,
        {
            onClick: () => setLoggedIn(false),
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
        },
    ];

    return (
        <div>
            <header className={clsx(styles.wrapper)}>
                {loginShow && <Login></Login>}
                <div className={clsx(styles.inner)}>
                    <Link to={config.routes.home}>
                        {darkMode ? (
                            <img src={images.logoDark} alt="Tiktok" />
                        ) : (
                            <img src={images.logoLight} alt="Tiktok" />
                        )}
                    </Link>
                    <Search />
                    <div className={clsx(styles.actions)}>
                        {/* Check login | logout */}
                        {loggedIn ? (
                            <>
                                <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                                    <button className={clsx(styles.actionBtn)}>
                                        <UploadIcon />
                                    </button>
                                </Tippy>
                                <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                    <button className={clsx(styles.actionBtn)}>
                                        <MessageIcon />
                                    </button>
                                </Tippy>
                                <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                    <button className={clsx(styles.actionBtn)}>
                                        <InboxIcon />
                                        <span className={clsx(styles.badge)}>12</span>
                                    </button>
                                </Tippy>
                            </>
                        ) : (
                            <>
                                <Button className={styles.btnUpload} text>
                                    Upload
                                </Button>
                                {!loggedIn && (
                                    <Button onClick={hanleClick} primary>
                                        Log in
                                    </Button>
                                )}
                            </>
                        )}
                        {/* Check login | logout */}
                        <Menu items={loggedIn ? userMenu : menuItem}>
                            {loggedIn ? (
                                <Image
                                    className={clsx(styles.userAvatar)}
                                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_758x608_2X_en_US._SY608_CB418608386_.jpg"
                                    alt="Luong Van Khoa"
                                />
                            ) : (
                                <button className={clsx(styles.moreBtn)}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            )}
                        </Menu>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
