/**
 * @File
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmail.com
 */

import * as React from 'react';
import { joinStrings } from '../../../Logic/Miscellaneous/Functions';

export const FormFieldDescription = ({ description, ...rest }) => {
    const classNames = joinStrings(['form-field-description', rest.className]);
    const children = rest.children;
    const restProps = !Object.keys(rest).length ? [] : rest;

    delete rest.className;
    delete rest.children;

    return (
        <div className={classNames} {...restProps}>
            {children != undefined ? children : description}
        </div>
    );
};

/**
 * error messages within the form field header
 */
export const FormFieldDescriptionErrorMessage = ({
    formStateMeta,
    type = 'error'
}) => {
    if (!formStateMeta || formStateMeta.constructor !== Object) return null;

    const classNames = joinStrings([[type, 'msg-' + type, 'msg-error']]);

    const Component =
        meta.touched && meta.error ? (
            <FormFieldDescription>
                <p className={classNames}>{formStateMeta.error}</p>
            </FormFieldDescription>
        ) : null;

    return Component;
};
