/**
 * @File main header of the app
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmail.com
 */

import * as React from 'react';
import styled from 'styled-components';

import ApplicationHeader from '../../app_components/ApplicationHeader';

const ApplicationHeaderWrapper: React.FC<ApplicationHeaderWrapperProps> = (props) => (
    <StyledApplicationHeader>
        <ApplicationHeader {...props} />
    </StyledApplicationHeader>
);

const StyledApplicationHeader = styled.header`
    padding-top: 30px;
    border-top: 5px solid #fdcb6e;
`;

export default ApplicationHeaderWrapper;
