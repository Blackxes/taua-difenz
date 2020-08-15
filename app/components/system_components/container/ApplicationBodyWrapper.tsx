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

const StyledApplicationBody = styled.main`
    display: flex;
`;

interface Props {}

const ApplicationBodyWrapper: React.FC<Props> = (props) => {
    return (
        <StyledApplicationBody>
            <ApplicationBody {...props} />
        </StyledApplicationBody>
    );
};

export default ApplicationBodyWrapper;
