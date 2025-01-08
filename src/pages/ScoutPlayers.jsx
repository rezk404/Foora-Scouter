import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import GamesList from '../components/GamesList';
import { fetchScoutedMatches } from '../helpers/apiHelpers';
const ScoutPlayers = () => {
	const [cookies, setCookies] = useCookies(['access_token']);

	return (
		<div className="container-fluid">
			<h1 className="text-center mb-4 mt-5">Scouted Games</h1>
			<GamesList comp={false} />
		</div>
	);
};
export default ScoutPlayers;
