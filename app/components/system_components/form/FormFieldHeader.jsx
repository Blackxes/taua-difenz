/**
 * @File wraps the form field header
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmail.com
 */

import * as React from 'react';
import { joinStrings } from '../../../Logic/Miscellaneous/Functions';

const FormFieldHeader = ({ ...rest }) => {
    const className = rest.className;
    const children = rest.children;
    delete rest.className;
    delete rest.children;

    const classNames = joinStrings(['form-field-header', className]);
    const restProps = !Object.keys(rest).length ? [] : rest;

    return (
        <div className={classNames} {...restProps}>
            {children}
        </div>
    );
};

export default FormFieldHeader;
