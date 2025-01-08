import { useEffect, useState } from 'react';
import {
	redirect,
	useLocation,
	useNavigate,
	useParams,
	useSearchParams,
} from 'react-router-dom';
import {
	fetchCompetitiveGames,
	fetchScoutedMatches,
} from '../helpers/apiHelpers';
import { useCookies } from 'react-cookie';
import { toast } from 'react-hot-toast';
import GameCard from './GameCard';

const GamesList = ({ comp = true }) => {
	const [data, setData] = useState(null);
	const [cookies] = useCookies(['access_token']);
	const params = useParams();
	useEffect(() => {
		setData(null);
		if (comp) {
			fetchCompetitiveGames(cookies.access_token, {
				city_id: params.cityId,
			}).then((data) => {
				if (data.success) {
					console.log('render');
					setData(data.data);
				} else {
					toast.error(data.message);
				}
			});
		} else {
			// fetchScoutedMatches(cookies.access_token).then((data) => {
			// 	console.log(data);
			// 	if (data.success) {
			// 		setData(data.data);
			// 	} else {
			// 		toast.error(data.message);
			// 	}
			// });
			fetchCompetitiveGames(cookies.access_token, {
				city_id: 1,
			}).then((data) => {
				if (data.success) {
					setData(data.data);
				} else {
					toast.error(data.message);
				}
			});
		}
	}, [params.cityId]);
	return (
		<div className="container text-center">
			{data === null ? (
				<h1>Loading...</h1>
			) : data && data.length > 0 ? (
				<div className="row gap-2 justify-content-center">
					{data.map((gameData) => (
						<GameCard
							gameData={gameData}
							scouting={comp ? false : true}
						/>
					))}{' '}
				</div>
			) : comp ? (
				<h1>No Games Available in this city</h1>
			) : (
				<h1>You haven't attended any games yet</h1>
			)}
		</div>
	);
};

export default GamesList;
