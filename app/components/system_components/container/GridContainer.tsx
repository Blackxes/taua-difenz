/**
 * @File listing component which uses css grid to list components
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmail.com
 */

import * as React from 'react';
import styled, { css } from 'styled-components';

const GridContainer: React.FC<GridContainerProps> = (props) => <StyledGridContainer {...props} />;

const StyledGridContainer = styled.div`
    display: grid;
    grid-auto-flow: ${(props: any) => (props.vertical && 'column') || 'row'};
    grid-gap: ${(props: any) => props.gap || 0}px;
    ${(props: any) => css`
        ${(props.vertical &&
            css`
                grid-template-rows: repeat(
                    ${props.rows || props.count || 'fit-content'},
                    ${props.unit + 'px' || '1fr'}
                );
            `) ||
        css`
            grid-template-columns: repeat(
                ${props.columns || props.count || 'fit-content'},
                ${props.unit + 'px' || '1fr'}
            );
        `}
    `}
    align-items: center;
`;

export default GridContainer;
