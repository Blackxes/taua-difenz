/**
 * @File application content component
 * 	this is where the main content is rendered
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmail.com
 */

import * as React from 'react';
import styled from 'styled-components';

import Level from './Level';

const ApplicationBody: React.FC<ApplicationBodyProps> = (props) => {
    return (
        <StyledApplicationBody>
            <Level />
        </StyledApplicationBody>
    );
};

const StyledApplicationBody: React.FC = styled.div`
    display: flex;
    > * {
        margin-right: 20px;
        :last-child {
            margin-right: 0;
        }
    }
`;

export default ApplicationBody;
