// Comp/btn/index
// Remove event listener when btn is disabled
if (disabled) {
    Object.keys(props).forEach((key) => {
        if (key.startsWith('on') && typeof props[key] === 'function') {
            delete props[key];
        }
    });
}

//popper/menu/index.js

// const resultsFiltered = useMemo(() => {
//     return searchResult.filter((result) => result.full_name.toUpperCase().includes(debounced.toUpperCase()));
// }, [debounced, searchResult]);
