import { INITIAL_STATE, CLEAR_DATA, SET_DATA } from './actions';

export const reducer = (state, action) => {
	const { payload } = action;

	switch (action.type) {
		case CLEAR_DATA:
			return {
				...INITIAL_STATE,
			};
		case SET_DATA:
			return {
				...state,
				...payload,
			};
		default:
			throw new Error(`Unexpected action`);
	}
};
