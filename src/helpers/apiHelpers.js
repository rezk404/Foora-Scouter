import axios from 'axios';

async function fetchCities() {
	const response = await axios.get(
		`${import.meta.env.VITE_API_URL}/get-cities`
	);
	return response.data.data;
}

async function fetchProfileData(authorizationCookie) {
	const response = await axios.get(
		`${import.meta.env.VITE_API_URL}/profile`,
		{
			headers: {
				Authorization: `Bearer ${authorizationCookie}`,
			},
		}
	);
	return response.data.data;
}

async function updateProfileData(authorizationCookie, data) {
	const response = await axios.put(
		`${import.meta.env.VITE_API_URL}/update-profile`,
		data,
		{
			headers: {
				Authorization: `Bearer ${authorizationCookie}`,
			},
		}
	);
	return response.data;
}
async function updateProfileImage(authorizationCookie, data) {
	const response = await axios.post(
		`${import.meta.env.VITE_API_URL}/upload-profile-image`,
		data,
		{
			headers: {
				Authorization: `Bearer ${authorizationCookie}`,
			},
		}
	);
	return response.data;
}

async function updateProfilePassword(authorizationCookie, data) {
	const response = await axios.post(
		`${import.meta.env.VITE_API_URL}/change-password`,
		data,
		{
			headers: { Authorization: `Bearer ${authorizationCookie}` },
		}
	);
	return response.data;
}

async function fetchCompetitiveGames(authorizationCookie, data) {
	const response = await axios.post(
		`${import.meta.env.VITE_API_URL}/get-competitive-games`,
		data,
		{
			headers: {
				Authorization: `Bearer ${authorizationCookie}`,
			},
		}
	);
	return response.data;
}

async function scoutPlayer(authorizationCookie, data) {
	const response = await axios.post(
		`${import.meta.env.VITE_API_URL}/scoute-player`,
		data,
		{
			headers: {
				Authorization: `Bearer ${authorizationCookie}`,
			},
		}
	);
	return response.data;
}
async function fetchScoutedMatches(authorizationCookie) {
	const response = await axios.get(
		`${import.meta.env.VITE_API_URL}/get-scouted-matches`,
		{
			headers: {
				Authorization: `Bearer ${authorizationCookie}`,
			},
		}
	);
	return response.data;
}
async function attendGame(authoizationCookie, gameId) {
	const response = await axios.post(
		`${import.meta.env.VITE_API_URL}/attend-game`,
		{
			game_id: gameId,
		},
		{
			headers: {
				Authorization: `Bearer ${authoizationCookie}`,
			},
		}
	);
	return response.data;
}
export {
	fetchCities,
	fetchProfileData,
	updateProfileData,
	updateProfileImage,
	updateProfilePassword,
	fetchCompetitiveGames,
	scoutPlayer,
	fetchScoutedMatches,
	attendGame,
};
