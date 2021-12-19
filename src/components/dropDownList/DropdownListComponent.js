import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountryAction } from '../../actions/fetchCountryActions';
import CreateDropDown from '../createDropDown/CreateDropDown';
import './DropdownListComponent.css';
const DropdownListComponent = () => {
	const dispatch = useDispatch();
	const countryLists = useSelector((state) => state.countryLists);
	const { loading, error, countries } = countryLists;

	const [value, setValue] = useState(null);

	useEffect(() => {
		dispatch(fetchCountryAction());
	}, []);

	return (
		<div className='flex-container'>
			{countries ? (
				<React.Fragment>
					<div className='item'>
						<CreateDropDown
							options={countries}
							prompt='Select'
							value={value}
							onChange={(val) => setValue(val)}
						/>
					</div>
				</React.Fragment>
			) : (
				'loading'
			)}
		</div>
	);
};

export default DropdownListComponent;
