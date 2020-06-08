import React from 'react';

import SearchBox from '~/components/SearchBox';
import Tabs from '~/components/Tabs';

import logo from '~/assets/logo-webmotors.svg';

const Home = () => (
	<div style={{ padding: `10px`, maxWidth: `933px`, margin: `0 auto` }}>
		<img src={logo} alt="Webmotors" />
		<Tabs />
		<SearchBox />
	</div>
);

export default Home;
