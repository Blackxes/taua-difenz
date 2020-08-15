/**
 * @File the h1 app title
 * 	considers the current route and possible render options like icons
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmx.de
 */

import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import { menuItems } from '../../Logic/Menu/Data';

const StyledAppTitleWrap = styled.div`
    // margin: 0 15px 15px;
    padding: 15px 250px;
    display: flex;
    align-items: center;
    color: #dfe6e9;
    background: #2d3436;
    & > * {
        margin-right: 15px;
        &:last-child {
            margin-right: 0;
        }
    }
`;

const StyledAppLogo = styled.div`
    font-size: 20px;
`;

const StyledAppTitle = styled.h1`
    margin-bottom: 0;
`;

const AppTitle = ({ title }) => {
    const location = useLocation();
    const menuItem =
        menuItems?.length &&
        menuItems.find((item) => {
            if (!item.route) return false;

            if (item.route.constructor === Array)
                return item.route.some((route) => route == location.pathname);

            return item.route == location.pathname;
        });

    return (
        <StyledAppTitleWrap>
            {menuItem && menuItem.icon && menuItem.showInHeader ? (
                <StyledAppLogo>
                    <FontAwesomeIcon icon={menuItem.icon} />
                </StyledAppLogo>
            ) : null}
            <StyledAppTitle>{title}</StyledAppTitle>
        </StyledAppTitleWrap>
    );
};

export default AppTitle;
