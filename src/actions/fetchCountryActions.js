import axios from 'axios';
import {
	FETCH_COUNTRY_SUCCESS,
	FETCH_COUNTRY_FAILURE,
	FETCH_COUNTRY_REQUEST,
} from '../constants/fetchCountryConstants';

export const fetchCountryAction = () => async (dispatch) => {
	try {
		dispatch({ type: FETCH_COUNTRY_REQUEST });

		const { data } = await axios.get('https://restcountries.com/v2/all');

		const results = data.map(({ name, flag, alpha2Code }) => ({
			name,
			flag,
			alpha2Code,
		}));

		dispatch({ type: FETCH_COUNTRY_SUCCESS, payload: results });
	} catch (error) {
		dispatch({
			type: FETCH_COUNTRY_FAILURE,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
