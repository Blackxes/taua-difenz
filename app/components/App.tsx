/**
 * @File main entrance of the app
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmail.com
 */

import * as React from 'react';
import styled from 'styled-components';

import {
    ApplicationHeaderComponent,
    ApplicationBodyComponent,
    AppWidth
} from '../logic/configurations';
import BackgroundImage from './app_components/BackgroundImage';

const StyledApp = styled.div`
    display: flex;
    flex-direction: column;
    max-width: ${(props: any) => props.appWidth}px;
`;

const App: React.FC<AppProps> = (props) => (
    <BackgroundImage>
        <StyledApp appWidth={AppWidth}>
            <ApplicationHeaderComponent {...props} />
            <ApplicationBodyComponent {...props} />
        </StyledApp>
    </BackgroundImage>
);

// const toProps = (state) => ({});

// const toDispatch = (dispatch) => ({});

// export default connect(toProps, toDispatch)(App);
export default App;
