/**
 * @File well.. a form title wrapper
 * 	to be honest i couldnt think of a better description
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmx.de
 */

import * as React from 'react';
import { joinStrings } from '../../../Logic/Miscellaneous/Functions';

const FormTitle = ({ title, ...rest }) => {
    if (!title) {
        return null;
    }

    const classNames = joinStrings(['form-title', rest.className]);

    return <p className={classNames}>{title}</p>;
};

export default FormTitle;
