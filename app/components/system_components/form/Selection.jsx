/**
 * @File form input field select
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmail.com
 */

import * as React from 'react';
import {
    generateId,
    joinStrings
} from '../../../Logic/Miscellaneous/Functions';

const Selection = ({
    items,
    name,
    onChange,
    defaultValue = '',
    type = 'regular',
    nothingSelectedLabel = '- Select - ',
    renderOnNoItems = false,
    ...props
}) => {
    if (!renderOnNoItems && !items && !items.length) {
        return null;
    }

    // fallbacks to empty array because maybe you want to display the empty select
    // to make the user visible there are no items - or somethings broken
    const options = (items || []).map((sitem) => (
        <option key={sitem.id || generateId()} value={sitem?.value}>
            {sitem?.label}
        </option>
    ));

    if (nothingSelectedLabel) {
        options.unshift(
            <option key={generateId} value="">
                {nothingSelectedLabel}
            </option>
        );
    }

    const classNames = joinStrings([
        props.className,
        'selection',
        [name, 'selection-' + name],
        [type, type, 'regular']
    ]);

    delete props.className;

    return (
        <select
            name={name || 'unused-' + generateId()}
            value={defaultValue}
            className={classNames}
            onChange={onChange}
            {...props}
        >
            {options}
        </select>
    );
};

export default Selection;
