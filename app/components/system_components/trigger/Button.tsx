/**
 * @File base button component - can be used a regular button
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmail.com
 */

import * as React from 'react';
import styled, { css } from 'styled-components';

const handleButtonTypeColor: Function = (type: ButtonTypes) => {
    switch (type) {
        case 'ok':
            return '#099e31';
        case 'error':
            return '#d84b4c';
        case 'warning':
            return '#eab800';
        case 'info':
            return '#558fc9';
        case 'submit':
            return '#ffa600';
        case 'regular':
        default:
            return '#ffffff';
    }
};

const StyledButton = styled.button`
    padding: 7px 12px;
    border: none;
    outline: none;
    width: ${(props: ButtonProps) => (props.fullWidth ? '100%' : 'fit-content')};
    color: inherit;
    background: ${(props: ButtonProps) => handleButtonTypeColor(props.type)};
    transition: filter 0.2s ease-in-out;
    :active,
    :focus {
        border: none;
    }
    :hover {
        cursor: pointer;
        filter: brightness(1.5);
    }

    ${(props: ButtonProps) =>
        props.small &&
        css`
            padding: 5px 10px;
            font-size: 12px;
        `}
`;

/**
 * button component
 */
export const Button: React.FC<ButtonProps & React.HTMLProps<HTMLButtonElement>> = (props) => {
    return <StyledButton {...props} />;
};
