import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

import useSearch from '~/hooks/useSearch';
import { SET_DATA } from '~/reducers/actions';

const Checkbox = ({ name, value, ...rest }) => {
	const [state, dispatch] = useSearch();

	const handleChange = useCallback(
		({ target }) => {
			dispatch({ type: SET_DATA, payload: { [name]: target.checked } });
		},
		[dispatch, name]
	);

	return (
		<Container {...rest}>
			<input
				type="checkbox"
				name={value}
				id={value}
				onChange={handleChange}
				checked={state[name]}
			/>
			<label htmlFor={value}>{value}</label>
		</Container>
	);
};

Checkbox.propTypes = {
	value: PropTypes.string.isRequired,
	checked: PropTypes.bool,
	name: PropTypes.string.isRequired,
};

Checkbox.defaultProps = {
	checked: false,
};

export default Checkbox;
