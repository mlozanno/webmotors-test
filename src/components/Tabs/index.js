import React, { useState } from 'react';

import { GiCityCar } from 'react-icons/gi';
import { FaMotorcycle } from 'react-icons/fa';

import { Container, TabItem } from './styles';

const Tabs = () => {
	const [selected, setSelected] = useState(`cars`);

	return (
		<Container>
			<TabItem
				onClick={() => setSelected(`cars`)}
				selected={selected === `cars`}
			>
				<GiCityCar size={40} />
				<span>
					<small>comprar</small>
					carros
				</span>
			</TabItem>

			<TabItem
				onClick={() => setSelected(`motos`)}
				selected={selected === `motos`}
			>
				<FaMotorcycle size={30} />
				<span>
					<small>comprar</small>
					motos
				</span>
			</TabItem>
		</Container>
	);
};

export default Tabs;
