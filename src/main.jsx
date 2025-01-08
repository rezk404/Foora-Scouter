/* eslint-disable no-unused-vars */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import RootLayout from './layouts/RootLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import ProfileData from './pages/ProfileData.jsx';
import LogoutPage from './pages/LogoutPage.jsx';
import { Toaster } from 'react-hot-toast';
import FindMatch from './pages/FindMatch.jsx';
import GamesList from './components/GamesList.jsx';
import GameData from './pages/GameData.jsx';
import ScoutPlayers from './pages/ScoutPlayers.jsx';
const router = createBrowserRouter([
	{
		path: '/login',
		element: <LoginPage />,
	},
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: 'find-match',
				element: <FindMatch />,
				children: [
					{
						path: ':cityId',
						element: <GamesList />,
					},
				],
			},
			{
				path: 'scout-players',
				element: <ScoutPlayers />,
			},
			{
				path: 'games/:gameId',
				element: <GameData />,
			},
			{
				path: '/profile',
				element: <ProfileData />,
			},
			{
				path: '/logout',
				element: <LogoutPage />,
			},
		],
	},
]);
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Toaster />
		<RouterProvider router={router} />
	</React.StrictMode>
);
