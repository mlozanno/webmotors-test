import styled, { css } from 'styled-components';
import { shade } from 'polished';
import { colors, spacing, pxToRem } from '~/styles/theme';

export const Container = styled.ul`
	display: flex;
	margin-top: ${spacing(10)};
`;

export const TabItem = styled.li`
	display: flex;
	align-items: flex-end;
	padding: ${spacing(1)};
	color: ${colors.grey};
	border-bottom: ${pxToRem(1)} solid ${colors.grey};
	cursor: pointer;
	transition: background-color 0.2s;
	user-select: none;

	&:hover {
		background-color: ${shade(0.1, colors.lightGrey)};
	}

	> span {
		margin-right: ${spacing(3)};
		margin-left: ${spacing(2)};

		small {
			display: block;
			font-size: ${pxToRem(14)};
		}

		font-size: ${spacing(3)};
		text-transform: uppercase;
	}

	${({ selected }) =>
		selected &&
		css`
			border-bottom: ${pxToRem(3)} solid ${colors.primary};

			svg {
				color: ${colors.primary};
			}

			> span {
				color: ${colors.primary};

				> small {
					color: ${colors.grey};
				}
			}
		`}
`;
