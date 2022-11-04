import { useEffect, useState, useRef } from 'react';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import clsx from 'clsx';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import styles from './Search.module.css';
import { useDebounce } from '~/hooks';

function Search() {
    const [searchValue, setSearchValue] = useState(''); // onChange
    const [searchResult, setSearchResult] = useState([]); //
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const debounced = useDebounce(searchValue, 500); // Delay 500ms
    const inputRef = useRef();

    useEffect(() => {
        // Khi nhập dấu cách ở đầu thì không tìm kiếm
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true); // Mã hóa các kí tự không hợp lệ (&, #, ?, =,...)
        //https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [debounced]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={clsx(styles.searchResult)} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={clsx(styles.searchTitle)}>Accounts</h4>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={clsx(styles.search)}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />

                {searchValue &&
                    !loading && ( // !!
                        <button className={clsx(styles.clear)} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                {loading && <FontAwesomeIcon className={clsx(styles.loading)} icon={faSpinner} />}
                <button className={clsx(styles.searchBtn)}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
