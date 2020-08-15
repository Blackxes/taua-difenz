/**
 * @File listing component which uses css flex to list components.. yeah..
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmail.com
 */

import * as React from 'react';
import styled, { css } from 'styled-components';

const StyledFlexContainer = styled.div`
    display: flex;
    flex-direction: ${(props: FlexContainerProps) => (props.vertical && 'column') || 'row'};
    align-items: ${(props: FlexContainerProps) => props.align || 'center'};
    justify-content: ${(props: FlexContainerProps) => props.justify || 'start'};
    & > * {
        margin-right: ${(props: FlexContainerProps) => props.margin || 10}px;
        margin-bottom: 0;
        width: fit-content;
        :last-child {
            margin-right: 0;
        }
    }
    ${(props: FlexContainerProps) =>
        props.vertical &&
        !props.align &&
        css`
            align-items: start;
        `}
    ${(props: FlexContainerProps) =>
        props.vertical &&
        css`
            & > * {
                margin-right: 0;
                margin-bottom: ${props.margin || 10}px;
                width: 100%;
                :last-child {
                    margin-bottom: 0;
                }
            }
        `}
`;

const FlexContainer: React.FC<FlexContainerProps> = (props) => {
    return <StyledFlexContainer {...props} />;
};

export default FlexContainer;
