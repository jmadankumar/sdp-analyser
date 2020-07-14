import React from 'react';
import cx from 'classnames';

const Button = ({ children, className, ...props }) => {
    return (
        <button {...props}
            className={cx("px-4 py-1 bg-green-500 text-black text-center rounded-full focus:outline-none hover:bg-green-900 hover:text-white", className)
            }>
            {children}
        </button>
    );
}

export default Button;