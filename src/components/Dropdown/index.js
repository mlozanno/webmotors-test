import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import { Container, Header, List } from './styles';

import useSearch from '~/hooks/useSearch';
import { SET_DATA } from '~/reducers/actions';

const Dropdown = ({ name, list, label, handleChange, ...rest }) => {
	const [isOpened, setIsOpened] = useState(false);
	const [touched, setTouched] = useState(false);

	const [state, dispatch] = useSearch();

	const handleSelect = useCallback(
		({ target: { dataset } }, id) => {
			setIsOpened(false);
			setTouched(true);
			dispatch({ type: SET_DATA, payload: { [name]: dataset.label } });
			handleChange(id);
		},
		[handleChange, dispatch, name]
	);

	return (
		<Container {...rest}>
			<Header
				onClick={() => setIsOpened(!isOpened)}
				isOpened={isOpened}
				touched={touched}
			>
				<span>{`${label}:`}</span>
				<strong>{state[name]}</strong>
			</Header>

			<List isOpened={isOpened}>
				<li
					onClick={e => handleSelect(e, 0)}
					onKeyPress={e => handleSelect(e, 0)}
					data-label="Todos"
					data-id="0"
				>
					Todos
				</li>
				{list.map(item => (
					<li
						key={item.ID}
						onClick={e => handleSelect(e, item.ID)}
						onKeyPress={e => handleSelect(e, item.ID)}
						data-label={item.Name}
					>
						{item.Name}
					</li>
				))}
			</List>
		</Container>
	);
};

Dropdown.propTypes = {
	label: PropTypes.string.isRequired,
	list: PropTypes.arrayOf(PropTypes.object).isRequired,
	handleChange: PropTypes.func,
	name: PropTypes.string.isRequired,
};

Dropdown.defaultProps = {
	handleChange() {},
};

export default Dropdown;
