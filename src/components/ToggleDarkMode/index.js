import clsx from 'clsx';
import { useState, useEffect } from 'react';
import styles from './ToggleDarkMode.module.css';

function DarkModeToggle({ onMouseDown }) {
    const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark');
    const html = document.getElementsByTagName('HTML')[0];

    useEffect(() => {
        const body = document.body;
        const toggle = document.querySelector(`.${clsx(styles.toggleInner)}`);

        if (darkMode) {
            html.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');

            body.classList.add(clsx(styles.darkMode));
            toggle.classList.add(clsx(styles.toggleActive));
        } else {
            html.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');

            body.classList.remove(clsx(styles.darkMode));
            toggle.classList.remove(clsx(styles.toggleActive));
        }
    }, [darkMode]);

    return (
        <div
            onMouseDown={onMouseDown}
            className={clsx(styles.toggle)}
            onClick={() => (darkMode ? setDarkMode(false) : setDarkMode(true))}
        >
            <div className={clsx(styles.toggleInner)} />
        </div>
    );
}

export default DarkModeToggle;
