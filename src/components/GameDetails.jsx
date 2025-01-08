import { toast } from 'react-hot-toast';
import { attendGame } from '../helpers/apiHelpers';
import { useCookies } from 'react-cookie';
const GameDetails = ({ gameData, scouting }) => {
	const [cookies] = useCookies(['access_token']);
	async function attendMatch() {
		const data = await attendGame(cookies.access_token, gameData.id);
		if (data.success) {
			toast.success(
				'Match has been added to your scouting matching successfully'
			);
		} else {
			toast.error(data.message);
		}
	}
	return (
		<div className="container-flu h-75 mt-5">
			<div className="row h-100 gap-4 justify-content-center">
				<div className="col-md-8">
					<img
						src="/stadium.jpg"
						className="h-100 w-100"
						alt="stadium-image"
					/>
				</div>
				<div
					className="col-md-3 d-flex flex-column align-items-center justify-content-center"
					style={{ backgroundColor: 'white', borderRadius: '10px' }}
				>
					<p>Venue Name: {gameData.venue_name}</p>
					<p>City: {gameData.city}</p>
					<p>Area: {gameData.area}</p>
					<p>Date: {gameData.date}</p>
					<p>Phone: {gameData.phone}</p>
					<p>Player Count: {gameData.joined_players_count}/5</p>

					{!scouting && (
						<button
							className="btn btn-primary"
							onClick={attendMatch}
						>
							Attend Match
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default GameDetails;
