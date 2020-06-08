import React from 'react';
import { SearchProvider } from '~/context/search';
import GlobalStyles from '~/styles/global';
import Home from '~/pages/Home';

const App = () => (
	<SearchProvider>
		<Home />
		<GlobalStyles />
	</SearchProvider>
);

export default App;
