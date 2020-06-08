import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import { FiMapPin } from 'react-icons/fi';
import { IoIosCloseCircle } from 'react-icons/io';

import { Container } from './styles';

import useSearch from '~/hooks/useSearch';
import { SET_DATA } from '~/reducers/actions';

const Input = ({ value, ...rest }) => {
	const [state, dispatch] = useSearch();

	const handleChange = useCallback(
		({ target }) => {
			dispatch({ type: SET_DATA, payload: { local: target.value } });
		},
		[dispatch]
	);

	const clearData = useCallback(() => {
		dispatch({ type: SET_DATA, payload: { local: `` } });
	}, [dispatch]);

	return (
		<Container {...rest}>
			<label htmlFor={value}>
				<FiMapPin />
				{`${value}:`}
			</label>
			<input
				type="text"
				name={value}
				id={value}
				value={state.local}
				onChange={handleChange}
			/>
			<IoIosCloseCircle size={24} onClick={clearData} />
		</Container>
	);
};

Input.propTypes = {
	value: PropTypes.string.isRequired,
};

export default Input;
