/**
 * @File general form wrapper with react-final-form
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmx.de
 */

import * as React from 'react';
import { Form } from 'react-final-form';

import { joinStrings } from '../../../Logic/Miscellaneous/Functions';

/**
 * form wrapper for a react final form Form
 */
const FormWrapper = ({
    onSubmit,
    render,
    InnerFormProps,
    resetForm = true,
    resetState = true,
    formKey = '',
    ...rest
}) => {
    const classNames = joinStrings([
        'form container',
        rest.className,
        [formKey, 'form-' + formKey]
    ]);

    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, form, ...renderProps }) => (
                <form
                    className={classNames}
                    onSubmit={(evt) => {
                        handleSubmit(evt);

                        if (resetForm) form.reset();

                        if (resetState) {
                            form.getRegisteredFields().forEach((name) =>
                                form.resetFieldState(name)
                            );
                        }
                    }}
                    {...InnerFormProps}
                >
                    {render({ form, ...renderProps })}
                </form>
            )}
            {...rest}
        />
    );
};

export default FormWrapper;
