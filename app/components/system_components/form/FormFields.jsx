/**
 * @File form field value components
 * 	predefined
 */

import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStopCircle as fasStopCircle } from '@fortawesome/free-solid-svg-icons';

import { joinStrings } from '../../../Logic/Miscellaneous/Functions';

export const FieldCheckbox = ({ ...rest }) => {
    const classNames = joinStrings([
        'form-field',
        'form-field-checkbox',
        rest.className
    ]);

    return (
        <label className={classNames}>
            <input type="checkbox" {...rest} />
            <span className="field-checkbox-marker">
                <FontAwesomeIcon icon={fasStopCircle} />
            </span>
        </label>
    );
};
