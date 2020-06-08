import React, { createContext, useReducer } from 'react';

import PropTypes from 'prop-types';

import { reducer } from '~/reducers/search';
import { INITIAL_STATE } from '~/reducers/actions';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
	const contextValue = useReducer(reducer, INITIAL_STATE);
	return (
		<SearchContext.Provider value={contextValue}>
			{children}
		</SearchContext.Provider>
	);
};

SearchProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
