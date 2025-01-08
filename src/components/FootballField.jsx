import { useEffect, useState } from 'react';
import '../assets/css/FootballField.css';
import Player from './Player';
const FootballField = ({
	gameData,
	scouting,
	setShowModal,
	setSelectedPlayer,
}) => {
	const { accepted_players } = gameData;
	function onPlayerClick(playerId) {
		setShowModal(true);
		setSelectedPlayer(playerId);
	}
	return (
		<div className="container h-100">
			<div className="col-12 football-field-container d-flex h-100 align-items-center justify-content-center">
				<img
					src="https://imagecache.365scores.com/image/upload/f_png,c_limit,q_auto:eco,dpr_1/website/Football_Field"
					decoding="async"
					className="football-field-image"
				/>
				{/* Render the players as circles */}
				<Player
					playerData={accepted_players[0]}
					position="front"
					onClick={onPlayerClick}
					clickable={scouting}
				/>
				<Player
					playerData={accepted_players[1]}
					position="middle"
					onClick={onPlayerClick}
					clickable={scouting}
				/>
				<Player
					playerData={accepted_players[2]}
					position="backLeft"
					onClick={onPlayerClick}
					clickable={scouting}
				/>
				<Player
					playerData={accepted_players[3]}
					position="backRight"
					onClick={onPlayerClick}
					clickable={scouting}
				/>
				<Player
					playerData={accepted_players[4]}
					position="back"
					onClick={onPlayerClick}
					clickable={scouting}
				/>
			</div>
		</div>
	);
};

export default FootballField;
