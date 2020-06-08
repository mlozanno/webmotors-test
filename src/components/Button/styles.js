import styled from 'styled-components';
import { tint, shade } from 'polished';
import { colors, pxToRem, spacing } from '~/styles/theme';

export const Container = styled.button`
	width: 100%;
	height: ${spacing(6)};
	color: white;
	font-weight: 700;
	text-transform: uppercase;
	background-color: ${colors.primary};
	border: none;
	border-radius: ${pxToRem(4)};
	transition: background-color 0.2s;

	&:hover {
		background-color: ${tint(0.1, colors.primary)};
	}

	&:active,
	&:focus {
		background-color: ${shade(0.1, colors.primary)};
		outline: none;
	}
`;
