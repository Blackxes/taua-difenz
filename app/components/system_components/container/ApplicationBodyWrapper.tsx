/**
 * @File the area where the main content of the app lies
 * 	this includes everything!
 *
 * 	there is another Component called ApplicationContent
 * 	this component takes care of content only
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmail.com
 */

import * as React from 'react';
import styled from 'styled-components';

import ApplicationBody from '../../app_components/ApplicationBody';

const ApplicationBodyWrapper: React.FC<ApplicationBodyWrapperProps> = (props) => (
    <StyledApplicationBody>
        <ApplicationBody {...props} />
    </StyledApplicationBody>
);

const StyledApplicationBody = styled.main`
    display: flex;
`;

export default ApplicationBodyWrapper;
