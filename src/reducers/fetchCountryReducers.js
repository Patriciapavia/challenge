import {
	FETCH_COUNTRY_SUCCESS,
	FETCH_COUNTRY_FAILURE,
	FETCH_COUNTRY_REQUEST,
} from '../constants/fetchCountryConstants';
export const fetchCountryReducer = (state = [], action) => {
	switch (action.type) {
		case FETCH_COUNTRY_REQUEST:
			return { loading: true };
		case FETCH_COUNTRY_SUCCESS:
			return { loading: false, countries: action.payload };
		case FETCH_COUNTRY_FAILURE:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
