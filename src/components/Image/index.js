import { useState, forwardRef } from 'react';
import classNames from 'classnames';

import images from '~/assets/images';
import styles from './Image.module.scss';

const Image = forwardRef(
    (
        {
            src,
            alt,
            className,
            failback: customFailback = images.noImage,
            ...props
        },
        ref,
    ) => {
        const [failback, setFailback] = useState('');

        const handleError = () => {
            setFailback(customFailback);
        };

        return (
            <img
                className={classNames(styles.wraaper, className)}
                ref={ref}
                src={failback || src}
                alt={alt}
                {...props}
                onError={handleError}
            />
        );
    },
);

export default Image;
