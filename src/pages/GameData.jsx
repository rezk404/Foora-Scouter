import { useEffect, useState } from 'react';
import {
	Navigate,
	redirect,
	useLocation,
	useNavigate,
	useParams,
} from 'react-router-dom';
import FootballField from '../components/FootballField';
import {
	MDBBtn,
	MDBContainer,
	MDBModal,
	MDBModalBody,
	MDBModalHeader,
	MDBRow,
} from 'mdbreact';
import { MDBRange } from 'mdb-react-ui-kit';
import { scoutPlayer } from '../helpers/apiHelpers';
import { useCookies } from 'react-cookie';
import { toast } from 'react-hot-toast';
import GameDetails from '../components/GameDetails';

const GameData = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const params = useParams();
	const [cookies] = useCookies('access_token');
	const [showModal, setShowModal] = useState(false);
	const [selectedPlayer, setSelectedPlayer] = useState(null);
	const [tabs, setTabs] = useState({
		gameData: true,
		layout: false,
	});
	const dataReset = {
		pace: '0',
		shooting: '0',
		passing: '0',
		dribbling: '0',
		defending: '0',
		physical: '0',
	};
	const [formData, setFormData] = useState(dataReset);
	if (!location.state) {
		return <Navigate to="/find-match/1" />;
	}
	const toggleModal = () => {
		setShowModal(!showModal);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = await scoutPlayer(cookies.access_token, {
			...formData,
			player_id: selectedPlayer,
			game_id: params.gameId,
		});
		if (data.success) {
			toast.success('Player Scouted Successfully');
			setShowModal(false);
			setFormData(dataReset);
		} else {
			toast.error(data.message);
		}
	};
	const handleChange = (e) => {
		console.log(e.target.name);
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};
	const changeTab = (newTab) => {
		setTabs({
			// set all other tabs to false while the newTab name to true
			gameData: newTab === 'gameData' ? true : false,
			layout: newTab === 'layout' ? true : false,
		});
	};
	return (
		<div className="container h-100">
			<h1 className="text-center mt-4">Game Details</h1>
			<div className="container-fluid gap-4 d-flex justify-content-center align-items-center">
				<div
					className={`${
						tabs.gameData == true && 'active'
					} nav-link clickable`}
					onClick={() => changeTab('gameData')}
				>
					Game Data
				</div>
				<div
					className={`${
						tabs.layout == true && 'active'
					} nav-link clickable`}
					onClick={() => changeTab('layout')}
				>
					Layout
				</div>
			</div>
			{tabs.gameData == true && (
				<>
					<GameDetails
						gameData={location.state.gameData}
						scouting={location.state.scouting}
					/>
				</>
			)}
			{tabs.layout == true && (
				<FootballField
					gameData={location.state.gameData}
					scouting={location.state.scouting}
					setShowModal={setShowModal}
					setSelectedPlayer={setSelectedPlayer}
				/>
			)}
			<MDBContainer>
				<MDBModal isOpen={showModal} toggle={toggleModal}>
					<MDBModalHeader toggle={toggleModal}>
						Rate{' '}
						{
							location.state.gameData.accepted_players.find(
								(player) => player.data.id === selectedPlayer
							)?.data?.name
						}{' '}
						skills
					</MDBModalHeader>
					<MDBModalBody>
						<form onSubmit={handleSubmit}>
							<div className="d-flex">
								<div className="col text-center">
									<div className="mb-3 d-flex flex-column align-items-center">
										<label
											htmlFor="pace"
											className="form-label"
										>
											Pace
										</label>
										<div className="input-group d-flex flex-column align-items-center">
											<MDBRange
												id="pace"
												name="pace"
												min={0}
												max={100}
												value={formData.pace}
												onChange={handleChange}
											/>
										</div>
									</div>
									<div className="mb-3 d-flex flex-column align-items-center">
										<label
											htmlFor="shooting"
											className="form-label"
										>
											Shooting
										</label>
										<div className="input-group d-flex flex-column align-items-center">
											<MDBRange
												id="shooting"
												name="shooting"
												min={0}
												max={100}
												value={formData.shooting}
												onChange={handleChange}
											/>
										</div>
									</div>
									<div className="mb-3 d-flex flex-column align-items-center">
										<label
											htmlFor="passing"
											className="form-label"
										>
											Passing
										</label>
										<div className="input-group d-flex flex-column align-items-center">
											<MDBRange
												id="passing"
												name="passing"
												min={0}
												max={100}
												value={formData.passing}
												onChange={handleChange}
											/>
										</div>
									</div>
								</div>
								<div className="col text-center">
									<div className="mb-3 d-flex flex-column align-items-center">
										<label
											htmlFor="dribbling"
											className="form-label"
										>
											Dribbling
										</label>
										<div className="input-group d-flex flex-column align-items-center">
											<MDBRange
												id="dribbling"
												name="dribbling"
												min={0}
												max={100}
												value={formData.dribbling}
												onChange={handleChange}
											/>
										</div>
									</div>
									<div className="mb-3 d-flex flex-column align-items-center">
										<label
											htmlFor="defending"
											className="form-label"
										>
											Defending
										</label>
										<div className="input-group d-flex flex-column align-items-center">
											<MDBRange
												id="defending"
												name="defending"
												min={0}
												max={100}
												value={formData.defending}
												onChange={handleChange}
											/>
										</div>
									</div>
									<div className="mb-3 d-flex flex-column align-items-center">
										<label
											htmlFor="physical"
											className="form-label"
										>
											Physical
										</label>
										<div className="input-group d-flex flex-column align-items-center">
											<MDBRange
												id="physical"
												name="physical"
												min={0}
												max={100}
												value={formData.physical}
												onChange={handleChange}
											/>
										</div>
									</div>
								</div>
							</div>
							<MDBRow className="px-2">
								<MDBBtn type="submit" color="primary">
									Rate Player
								</MDBBtn>
							</MDBRow>
						</form>
					</MDBModalBody>
				</MDBModal>
			</MDBContainer>
		</div>
	);
};

export default GameData;
