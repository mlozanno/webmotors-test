import React, { useState, useEffect, useCallback } from 'react';

import { range, years, prices } from '~/utils/fakeData';

import api from '~/services/api';

import useSearch from '~/hooks/useSearch';
import { CLEAR_DATA } from '~/reducers/actions';

import {
	Container,
	Actions,
	Buttons,
	SearchButton,
	LocalInput,
	RangeDropdown,
} from './styles';

import Dropdown from '~/components/Dropdown';
import Checkbox from '~/components/Checkbox';

const SearchBox = () => {
	const [brands, setBrands] = useState([]);
	const [models, setModels] = useState([]);
	const [versions, setVersions] = useState([]);

	const [state, dispatch] = useSearch();

	const fetchBrand = useCallback(async () => {
		const { data } = await api.get(`Make`);
		setBrands(data);
	}, []);

	const fetchModels = useCallback(async id => {
		if (id > 0) {
			const { data } = await api.get(`Model?MakeID=${id}`);
			setModels(data);
		}
	}, []);

	const fetchVersions = useCallback(async id => {
		if (id > 0) {
			const { data } = await api.get(`Version?ModelID=${id}`);
			setVersions(data);
		}
	}, []);

	const handleSumit = useCallback(
		e => {
			e.preventDefault();
			alert(`Efetua busca com: ${JSON.stringify(state, null, 2)}`);
		},
		[state]
	);

	const clearData = useCallback(() => {
		dispatch({ type: CLEAR_DATA });
	}, [dispatch]);

	useEffect(() => {
		fetchBrand();
	}, [fetchBrand]);

	return (
		<Container onSubmit={handleSumit}>
			<div className="types">
				<Checkbox value="novos" name="car" />
				<Checkbox value="usados" name="moto" />
			</div>

			<div className="local">
				<LocalInput value="onde" />
				<RangeDropdown label="Raio" list={range} name="range" />
			</div>

			<Dropdown
				label="Marca"
				list={brands}
				className="brands"
				handleChange={id => fetchModels(id)}
				name="brand"
			/>
			<Dropdown
				label="Modelo"
				list={models}
				className="models"
				handleChange={id => fetchVersions(id)}
				name="model"
			/>
			<Dropdown label="Ano" list={years} className="years" name="year" />
			<Dropdown label="Preço" list={prices} className="prices" name="price" />
			<Dropdown
				label="Versão"
				list={versions}
				className="versions"
				name="version"
			/>

			<Actions>
				<a href="#">&gt; Busca Avançada</a>
				<Buttons>
					<a href="#" onClick={clearData}>
						Limpar filtros
					</a>
					<SearchButton label="ver ofertas" type="submit" />
				</Buttons>
			</Actions>
		</Container>
	);
};

export default SearchBox;
