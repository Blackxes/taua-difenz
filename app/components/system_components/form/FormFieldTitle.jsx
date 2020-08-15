/**
 * @File form field title
 * 	shuold be used inside a form field header
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmail.com
 */

import * as React from 'react';
import { joinStrings } from '../../../Logic/Miscellaneous/Functions';

const FormFieldTitle = ({ title, ...rest }) => {
    const classNames = joinStrings(['form-field-title'], rest.className);
    const restProps = !Object.keys(rest).length ? [] : rest;

    return (
        <div className={classNames} {...restProps}>
            {rest.children != undefined ? (
                rest.children
            ) : (
                <label>{title}</label>
            )}
        </div>
    );
};

export default FormFieldTitle;
