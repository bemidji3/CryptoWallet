import React from "react";
import {Link as RouterLink} from "react-router-dom";
import classNames from "classnames";

function Link({children, className, ...restProps}) {
    const extraClassName = classNames(`Link`, {
        [className]: !!className,
    });

    return (
        <RouterLink className={extraClassName} {...restProps}>
            {children}
        </RouterLink>
    )
}

export default Link;
