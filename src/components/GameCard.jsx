import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage } from 'mdbreact';
import { Link, useNavigate } from 'react-router-dom';

const GameCard = ({ gameData, scouting }) => {
	const navigate = useNavigate();
	return (
		<MDBCard className="col-md-3">
			<MDBCardBody className="text-center">
				<img
					src="/stadium.jpg"
					alt="stadium image"
					style={{
						width: '15rem',
						height: '12rem',
					}}
				/>
				<h3>{gameData.venue_name}</h3>
				<h4>
					{gameData.city} | {gameData.area}
				</h4>
				<h5>{gameData.date}</h5>
				<h5>{gameData.time}</h5>
				<h5>{gameData.joined_players_count}/5 Players</h5>
				<h5>{gameData.price}</h5>
				<div
					onClick={() => {
						navigate(`/games/${gameData.id}`, {
							state: { gameData, scouting },
						});
					}}
				>
					<MDBBtn color="primary">View</MDBBtn>
				</div>
			</MDBCardBody>
		</MDBCard>
	);
};

export default GameCard;
