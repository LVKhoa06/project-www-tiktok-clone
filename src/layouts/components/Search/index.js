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
import * as searchServices from '~/services/searchService';
import removeVietnameseTones from '~/utils/utils';

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const debouncedValue = useDebounce(searchValue, 400);
    const inputRef = useRef();
    const [keyRemovedStuff, setKeyRemovedStuff] = useState('');

    const unique = (arr) => {
        return Array.from(new Set(arr));
    };

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }
        const fetchApi = async () => {
            setLoading(true);

            let result = await searchServices.search(debouncedValue);

            const resultsFullName = result.filter((item) => {
                const removedStuff = removeVietnameseTones(item.full_name).toUpperCase();

                return removedStuff.includes(keyRemovedStuff);
            });

            // console.log(resultsFullName);
            const resultsNickname = result.filter((item) => {
                const removedStuff = removeVietnameseTones(item.nickname).toUpperCase();
                return removedStuff.includes(keyRemovedStuff);
            });
            // console.log(resultsNickname);

            console.log(unique(resultsFullName.concat(resultsNickname)));

            setSearchResult(result);
            setLoading(false);
        };

        fetchApi();
    }, [debouncedValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = (delay) => {
        setTimeout(() => {
            setShowResult(false);
        }, delay);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
            setKeyRemovedStuff((current) => current.toUpperCase());
        }
    };

    return (
        <>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={clsx(styles.searchResult)} {...attrs}>
                        <PopperWrapper>
                            <h4 className={clsx(styles.searchTitle)}>Accounts</h4>
                            {searchResult.map((result) => (
                                <AccountItem
                                    hideResult={() => {
                                        handleHideResult(800);
                                    }}
                                    key={result.id}
                                    data={result}
                                />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={() => {
                    handleHideResult(0);
                }}
            >
                <div className={clsx(styles.search)}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={clsx(styles.clear)} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={clsx(styles.loading)} icon={faSpinner} />}

                    <button className={clsx(styles.searchBtn)} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </>
    );
}

export default Search;
