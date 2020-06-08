import { createGlobalStyle } from 'styled-components';
import { shade } from 'polished';
import { fontSize, colors } from '~/styles/theme';

export default createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	html, body, #root {
		min-height: 100%;
	}

	strong, b {
		font-weight: 700;
	}

	html {
		font-size: 10px;
	}

	body, input, button {
		-webkit-font-smoothing: antialiased;
		font: 400 ${fontSize.regular}/1.5 'Roboto', Verdana, sans-serif;
	}

	body {
		color: ${colors.darkGrey};
		background-color: ${colors.lightGrey};
	}

	a {
		color: ${colors.primary};
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: ${shade(0.2, colors.primary)}
	}

	ul {
		list-style: none;
	}

	button {
		cursor: pointer;
	}
`;
