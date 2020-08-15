/**
 * @File on styled-components based global style component
 *
 * @Author Alexander Bassov
 * @Email blackxes.dev@gmail.com
 */

import * as React from 'react';
import { createGlobalStyle } from 'styled-components';

import FontRobotoBold from '../Assets/Fonts/Roboto-Bold.ttf';
import FontRobotoBoldItalic from '../Assets/Fonts/Roboto-BoldItalic.ttf';
import FontRobotoItalic from '../Assets/Fonts/Roboto-Italic.ttf';
import FontRobotoLight from '../Assets/Fonts/Roboto-Light.ttf';
import FontRobotoLightItalic from '../Assets/Fonts/Roboto-LightItalic.ttf';
import FontRobotoRegular from '../Assets/Fonts/Roboto-Regular.ttf';
import FontRobotoThin from '../Assets/Fonts/Roboto-Thin.ttf';
import FontRobotoThinItalic from '../Assets/Fonts/Roboto-ThinItalic.ttf';

const GlobalStyle = createGlobalStyle`
	// bold
	@font-face {
		font-family: 'Roboto';
		src: url('${FontRobotoBold}') format('truetype')
		font-weight: bold;
	}
	// bold italic
	@font-face {
		font-family: 'Roboto';
		src: url('${FontRobotoBoldItalic}') format('truetype');
		font-weight: bold;
		font-style: italic;
	}
	// italic
	@font-face {
		font-family: 'Roboto';
		src: url('${FontRobotoItalic}') format('truetype');
		font-style: italic;
	}
	// light
	@font-face {
		font-family: 'Roboto';
		src: url('${FontRobotoLight}') format('truetype');
		font-weight: 200;
	}
	// light italic
	@font-face {
		font-family: 'Roboto';
		src: url('${FontRobotoLightItalic}') format('truetype');
		font-style: italic;
		font-weight: 200;
	}
	// regular
	@font-face {
		font-family: 'Roboto';
		src: url('${FontRobotoRegular}') format('truetype');
	}
	// thin
	@font-face {
		font-family: 'Roboto';
		src: url('${FontRobotoThin}') format('truetype');
		font-weight: 100;
	}
	// thin italic
	@font-face {
		font-family: 'Roboto';
		src: url('${FontRobotoThinItalic}') format('truetype');
		font-style: italic;
		font-weight: 100;
	}

	* { margin: 0; padding: 0; box-sizing: border-box; }
	html { height: 100%; }
	html, body {
		margin: 0;
		padding: 0;
		width: 100%;
		font: 1rem 'Roboto';
	}
	body {
		position: relative;
		min-height: 100%;
		color: #fff;
	}
	h1 { font-size: 1.9rem; }
	h2 { font-size: 1.9rem; }
	h3 { font-size: 1.64rem; }
	h4 { font-size: 1.43rem; }
	h5 { font-size: 1.28rem; }
	h6 { font-size: 1.18rem; }
	h1, h2, h3, h4, h5, h6 { margin-bottom: 0.6em; color: inherit; font-weight: 400; }

	span, label, p { margin-bottom: 0.5rem;
		&:last-child { margin-bottom: 0; }
	}
	a { color: inherit;
		&:hover { text-decoration: underline; }
	}

	li { list-style-type: none; }

	::selection { background: transparent; color: inherit; }
`;

export default GlobalStyle;
