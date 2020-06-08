import styled from 'styled-components';
import { shade } from 'polished';
import { pxToRem, spacing, colors } from '~/styles/theme';

import Button from '~/components/Button';
import Input from '~/components/Input';
import Dropdown from '~/components/Dropdown';

export const Container = styled.form`
	display: grid;
	grid-gap: ${spacing(2)};
	grid-template-columns: 1fr;
	max-width: ${pxToRem(933)};
	margin: 0 auto;
	padding: ${spacing(2)};
	background-color: white;
	box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.1);

	.types {
		span {
			margin-right: ${spacing(5)};
		}
	}

	@media (min-width: 544px) {
		grid-template-areas:
			'types types'
			'local local'
			'brands models'
			'years prices'
			'versions versions'
			'actions actions';
		grid-template-columns: repeat(2, 1fr);

		.types {
			grid-area: types;
		}

		.local {
			display: flex;
			grid-area: local;
		}

		.brands {
			grid-area: brands;
		}

		.models {
			grid-area: models;
		}

		.years {
			grid-area: years;
		}

		.prices {
			grid-area: prices;
		}

		.versions {
			grid-area: versions;
		}
	}

	@media (min-width: 768px) {
		grid-template-areas:
			'types types types types'
			'local local brands models'
			'years prices versions versions'
			'actions actions actions actions';
		grid-template-columns: repeat(4, 1fr);
		height: ${pxToRem(312)};
		padding: ${spacing(4)} ${spacing(8)};
	}
`;

export const LocalInput = styled(Input)`
	@media (max-width: 543px) {
		border-bottom: none;
		border-bottom-right-radius: 0;
		border-bottom-left-radius: 0;
	}

	@media (min-width: 544px) {
		flex: 1;
		border-right: none;
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
	}
`;

export const RangeDropdown = styled(Dropdown)`
	@media (max-width: 543px) {
		> div {
			border-top-left-radius: 0;
			border-top-right-radius: 0;
		}
	}

	@media (min-width: 544px) {
		min-width: ${pxToRem(126)};

		> div {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}
`;

export const Actions = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	max-width: ${pxToRem(544)};
	margin: 0 auto;

	> a {
		font-weight: 700;
		white-space: nowrap;
	}

	@media (min-width: 544px) {
		grid-area: actions;
	}

	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: space-between;
		max-width: 100%;
	}
`;

export const Buttons = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;

	> a {
		order: 1;
		color: ${colors.grey};

		&:hover {
			color: ${shade(0.1, colors.grey)};
		}
	}

	@media (min-width: 768px) {
		flex-direction: row;
		max-width: 50%;

		> a {
			order: 0;
			margin-right: ${spacing(2)};
			white-space: nowrap;
		}
	}
`;

export const SearchButton = styled(Button)`
	margin: ${spacing(1)} 0;
`;
