const Player = ({ playerData, position, onClick, clickable }) => {
	return (
		<div
			className={`player-circle ${position} ${clickable && 'clickable'}`}
			onClick={() =>
				playerData?.data?.id && clickable
					? onClick(playerData.data.id)
					: {}
			}
		>
			<img
				src={playerData?.data?.image || '/noImg.png'}
				alt={playerData?.data?.name || 'No Player'}
				className="player-avatar"
			/>
			<p className="text-center player-name">
				{playerData?.data?.name || 'No Player'}
			</p>
		</div>
	);
};

export default Player;
