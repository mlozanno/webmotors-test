import styled, { css } from 'styled-components';
import { pxToRem, spacing, colors } from '~/styles/theme';

export const Container = styled.div`
	position: relative;
	background-color: white;
	user-select: none;
`;

export const Header = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	width: 100%;
	height: ${spacing(6)};
	padding: 0 ${spacing(1)};
	color: ${colors.grey};
	border: ${pxToRem(1)} solid ${colors.grey};
	border-radius: ${pxToRem(4)};
	cursor: pointer;

	${({ isOpened }) =>
		isOpened &&
		css`
			color: ${colors.darkGrey};
			border-color: ${colors.darkGrey};
			border-bottom-right-radius: 0;
			border-bottom-left-radius: 0;
		`};

	${({ touched }) =>
		touched &&
		css`
			color: ${colors.darkGrey};
			border-color: ${colors.darkGrey};
		`};

	span {
		display: inline-block;
		margin-right: ${pxToRem(4)};
	}

	&::after {
		position: absolute;
		top: calc(50% + ${pxToRem(4)});
		right: ${spacing(1)};
		display: block;
		border: ${pxToRem(6)} solid transparent;
		border-top-color: ${colors.darkGrey};
		transform: translateY(-50%);
		content: '';
	}
`;

export const List = styled.ul`
	${({ isOpened }) => !isOpened && `display: none;`};
	position: absolute;
	right: 0;
	left: 0;
	z-index: 1;
	max-height: ${pxToRem(180)};
	overflow-y: auto;
	background-color: white;
	border: ${pxToRem(1)} solid ${colors.grey};
	border-top: none;
	border-radius: ${pxToRem(0, 0, 4, 4)};

	li {
		padding: ${pxToRem(4)} ${spacing(1)};
		text-decoration: uppercase;
		cursor: pointer;

		&:hover {
			color: white;
			background-color: ${colors.primary};
		}
	}
`;
