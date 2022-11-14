// Pug !!!
// Dark mode
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import clsx from 'clsx';
import styles from './Menu.module.css';
import Header from './Header';
import { useState, useEffect } from 'react';

const defaultFn = () => {};
function Menu({ children, items = [], onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const [current, setCurrent] = useState(history[history.length - 1]);
    useEffect(() => {
        setHistory([{ data: items }]);
    }, [items]);

    useEffect(() => {
        setCurrent(history[history.length - 1]);
    }, [history]);

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (item.onClick) return item.onClick();

                        if (isParent) return setHistory((prev) => [...prev, item.children]);

                        onChange(item);
                    }}
                />
            );
        });
    };
    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const renderResult = (attrs) => (
        <div className={clsx(styles.menuList)} {...attrs}>
            <PopperWrapper className={clsx(styles.menuPopper)}>
                {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                <div className={clsx(styles.menuBody)}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    // Reset to first page
    const handleReset = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        <Tippy
            interactive
            delay={[10, 900]}
            offset={[12, 8]}
            hideOnClick={true}
            placement="bottom-end"
            render={renderResult}
            onHide={handleReset}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default Menu;
