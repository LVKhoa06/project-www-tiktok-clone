import clsx from 'clsx';
import { useState, useEffect } from 'react';
import styles from './ToggleDarkMode.module.css';

function DarkModeToggle({ handleToggleBehavior }) {
    return (
        <div className={clsx(styles.toggle)} onClick={handleToggleBehavior}>
            <div className={clsx(styles.toggleInner)} />
        </div>
    );
}

export default DarkModeToggle;
