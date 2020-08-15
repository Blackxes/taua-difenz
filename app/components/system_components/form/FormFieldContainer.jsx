/**
 * @File form field wrapper
 *
 * 	a form field is a component usually made of a label and its input field
 * 	generally you can say, a form field is a context within a form
 * 	wrapping a value definition (input field) and its explanations (labels, descriptions)
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmail.com
 */

import * as React from 'react';
import { joinStrings } from '../../../Logic/Miscellaneous/Functions';

const FormFieldContainer = ({ fieldKey, horizontal, ...rest }) => {
    const classNames = joinStrings([
        'form-field',
        [fieldKey, 'form-field-' + fieldKey],
        'flex',
        [horizontal, 'flex-h flex-align', 'flex-v'],
        rest.className
    ]);
    const restProps = !Object.keys(rest).length ? [] : rest;

    return (
        <div className={classNames} {...restProps}>
            {rest.children}
        </div>
    );
};

export default FormFieldContainer;
