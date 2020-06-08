import styled from 'styled-components';
import { pxToRem, colors, spacing } from '~/styles/theme';

export const Container = styled.span`
	user-select: none;

	label {
		position: relative;
		padding-left: ${spacing(3)};
		text-transform: capitalize;
		cursor: pointer;

		&::before {
			position: absolute;
			top: 50%;
			left: 0;
			display: block;
			width: ${spacing(2)};
			height: ${spacing(2)};
			border: ${pxToRem(1)} solid ${colors.grey};
			transform: translateY(-50%);
			content: '';
		}
	}

	input {
		display: none;

		&:checked + label {
			&::after {
				position: absolute;
				top: ${pxToRem(6)};
				left: ${pxToRem(5)};
				display: block;
				width: ${pxToRem(7)};
				height: ${pxToRem(4)};
				border-bottom: 2px solid ${colors.primary};
				border-left: 2px solid ${colors.primary};
				transform: rotate(-45deg);
				content: '';
			}
		}
	}
`;
