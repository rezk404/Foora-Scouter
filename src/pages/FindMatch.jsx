import React, { useEffect, useState } from 'react';
import { fetchCities, fetchCompetitiveGames } from '../helpers/apiHelpers';
import { useCookies } from 'react-cookie';
import '../assets/css/StadiumData.css';
import { toast } from 'react-hot-toast';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
const FindMatch = () => {
	const [cities, setCities] = useState([]);
	const [areas, setAreas] = useState([]);
	const [cookies, setCookies] = useCookies(['access_token']);
	const [selectedCity, setSelectedCity] = useState(null);
	const navigate = useNavigate();
	const params = useParams();
	useEffect(() => {
		fetchCities().then((citiesData) => {
			setCities(citiesData);
			setSelectedCity(params.cityId || citiesData[0].id);
		});
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		navigate(`${selectedCity}`);
	};
	return (
		<div className="container-fluid">
			<h1 className="text-center mb-4 mt-5">Search for games</h1>
			<form onSubmit={handleSubmit} className="row mx-5">
				<div className="row justify-content-start mx-4">
					<div className="d-flex justify-content-center align-items-center gap-3 col-md-6">
						<div>Select the city</div>
						<select
							className="form-select w-75"
							id="city"
							name="city"
							value={selectedCity}
							onChange={(e) => setSelectedCity(e.target.value)}
						>
							{cities.map((city) => {
								return (
									<option key={city.id} value={city.id}>
										{city.name}
									</option>
								);
							})}
						</select>
					</div>
					<div className="col-1 d-flex py-4 justify-content-center align-items-center h-100">
						<button type="submit" className="btn btn-primary">
							Search
						</button>
					</div>
				</div>
			</form>
			<Outlet />
		</div>
	);
};

export default FindMatch;
