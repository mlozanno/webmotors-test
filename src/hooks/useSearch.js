import { useContext } from 'react';

import { SearchContext } from '~/context/search';

const useSearch = () => {
	const contextValue = useContext(SearchContext);
	return contextValue;
};

export default useSearch;
