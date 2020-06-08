import styled from 'styled-components';
import { colors, pxToRem, spacing } from '~/styles/theme';

export const Container = styled.span`
	position: relative;
	display: flex;
	align-items: center;
	height: ${spacing(6)};
	padding: 0 ${spacing(1)};
	border: ${pxToRem(1)} solid ${colors.grey};
	border-radius: ${pxToRem(4)};

	label {
		display: flex;
		flex-shrink: 0;
		align-items: center;
		margin-right: ${spacing(1)};
		text-transform: capitalize;

		svg {
			margin-right: ${spacing(1)};
			color: ${colors.primary};
		}
	}

	input {
		flex: 1;
		width: 100%;
		height: ${spacing(6)};
		color: ${colors.grey};
		color: ${colors.darkGrey};
		font-weight: 700;
		text-transform: capitalize;
		background-color: transparent;
		border: none;

		&:focus,
		&:active {
			outline: none;
		}
	}
`;
