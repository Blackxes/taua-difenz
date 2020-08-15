/**
 * @File background image component
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmail.com
 */

import * as React from 'react';
import styled from 'styled-components';

const Background = import('../../../Assets/Images/bg.jpg');

const StyledBackgroundImage = styled.div`
	min-height: 100vh;
	height: 100%;
	background: #1e1916 fixed repeat-y url('${(props: BackgroundImageProps) => props.image || ''}');
`;

const BackgroundImage: React.FC<BackgroundImageProps> = (props) => {
    const [bgImage, setBgImage] = React.useState<string>('');
    Background.then((module) => setBgImage(module.default));

    return <StyledBackgroundImage image={props.image || bgImage} {...props} />;
};

export default BackgroundImage;
