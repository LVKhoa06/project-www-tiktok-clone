import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import clsx from 'clsx';
import styles from './Image.module.css';

const Image = forwardRef(({ src, alt, className, ...props }, ref) => {
    return <img className={clsx(styles.wrapper, className)} ref={ref} src={src} alt={alt} {...props} />;
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
};

export default Image;
