/**
 * @File link component from the reac-router-dom library
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmail.com
 */

import * as React from 'react';
import styled from 'styled-components';
import { NavLink, LinkProps } from 'react-router-dom';

const handleLinkTypeColor: Function = (type: ButtonTypes) => {
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
            return '#2d3436';
    }
};

const StyledLink = styled(NavLink)`
    text-decoration: underline;
    :hover {
        color: inherit;
    }
    ${(props: ButtonProps) => handleLinkTypeColor(props.type)}
`;

const Link: React.FC<LinkProps> = (props) => {
    return <StyledLink {...props} />;
};
