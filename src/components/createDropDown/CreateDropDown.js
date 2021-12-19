import React, { useState, useRef, useEffect } from 'react';
import './CreateDropDown.css';
import ReactCountryFlag from 'react-country-flag';

const CreateDropDown = ({ options, prompt, value, onChange }) => {
	const [open, setOpen] = useState(false);
	const [query, setQuery] = useState('');
	// cosing onblur when you click outside dropdown drop drown close
	const ref = useRef(null);

	useEffect(() => {
		document.addEventListener('click', close);
		return () => document.removeEventListener('click', close);
	}, []);

	const close = (e) => {
		setOpen(e && e.target === ref.current);
	};

	const filter = (options) => {
		return options.filter(
			(option) => option.name.toLowerCase().indexOf(query.toLowerCase()) > -1
		);
	};

	const displayValue = () => {
		if (query.length > 0) return query;
		if (value) return value.name;

		return '';
	};

	return (
		<div>
			<div className='dropdown'>
				<div className='control' onClick={() => setOpen((prev) => !prev)}>
					<div className='selected-value'>
						<input
							ref={ref}
							value={displayValue()}
							onChange={(e) => {
								setQuery(e.target.value);
								onChange(null);
							}}
							onClick={() => setOpen((prev) => !prev)}
							placeholder={value ? value.name : open ? 'Search' : prompt}
						/>
					</div>
					<div
						className='arrow'
						className={`arrow ${open ? 'open' : null}`}
					></div>
				</div>
				<div className='options' className={`options ${open ? 'open' : null}`}>
					{filter(options).map((option) => (
						<React.Fragment>
							<div
								key={option.alpha2Code}
								className={`option ${value === option ? 'selected' : null}`}
								onClick={() => {
									setQuery('');
									onChange(option);
									setOpen(false);
								}}
							>
								<ReactCountryFlag
									countryCode={`${option.alpha2Code}`}
									svg
									cdnUrl='https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/'
									cdnSuffix='svg'
									title={`${option.alpha2Code}`}
								/>
								{option.name}
							</div>
						</React.Fragment>
					))}
				</div>
			</div>
		</div>
	);
};

export default CreateDropDown;
