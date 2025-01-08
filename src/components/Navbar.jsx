import { Link, useLocation } from 'react-router-dom';
import '../assets/css/Navbar.css';
import { useState } from 'react';
const Navbar = () => {
	const [isOpened, setIsOpened] = useState(false);
	const location = useLocation();
	return (
		<>
			<nav
				className="d-none d-md-block bg-light shadow col-md-2"
				style={{
					borderRadius: '30px',
					height: '95vh',
				}}
			>
				<div className="container-fluid d-flex flex-column pt-5 pb-3 h-100">
					<Link
						className="navbar-brand"
						style={{
							fontWeight: 'bold',
							fontSize: '1.5rem',
						}}
						to="/"
					>
						<img src="/logo.png" alt="logo" width={50} />
						Foora
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="pt-5 w-100 d-flex flex-column h-100 justify-content-between"
						id="navbarNav"
					>
						<ul className="navbar-nav d-flex flex-column">
							<li className="nav-item w-auto">
								<Link
									className={`nav-link ${
										location.pathname === '/profile' &&
										'selected-nav'
									} d-flex align-items-center gap-3 justify-content-start`}
									to="/profile"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="50"
										fill="currentColor"
										className="bi bi-person-fill"
										viewBox="0 0 16 16"
									>
										<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
									</svg>
									<p className="mb-0">Edit Profile</p>
								</Link>
							</li>
							<li className="nav-item w-auto">
								<Link
									className={`nav-link ${
										location.pathname.includes(
											'/find-match'
										) && 'selected-nav'
									} d-flex align-items-center gap-3 justify-content-start`}
									to="/find-match/1"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="22"
										height="50"
										viewBox="0 0 512 512"
									>
										<path
											fill="currentColor"
											d="M93.75 81.443c-5.38 0-12.368 2.49-22.358 8.967c3.966 4.682 8.167 9.687 16.47 19.256c5.782 6.663 11.618 13.29 16.026 18.088c.038.042.055.055.092.096l30.894-17.932l-14.652-14.148c-11.292-9.404-18.644-13.866-25.418-14.293a16.554 16.554 0 0 0-1.055-.034zm120.08 15.082a89.446 89.446 0 0 0-2.643.01c-10.46.193-20.2 2.23-26.742 5.424l-67.262 39.038c2.45.544 4.885 1.196 7.287 2.02c17.275 5.923 33.093 18.223 49.568 34.7l216.44 213.5l80.978-44.433L258.54 111.38c-8.656-7.84-22.49-12.908-36.693-14.394a86.624 86.624 0 0 0-8.018-.46zM58.192 102.74c-17.543 20.723-20.57 37.186-15.326 57.004c.692 2.618 3.057 6.357 6.373 10.47a182.968 182.968 0 0 1 7.086-9.478c3.99-4.995 8.385-9.183 13.085-12.558l-.106-.2l2.768-1.61a56.414 56.414 0 0 1 4.13-2.393l11.868-6.89a1048.196 1048.196 0 0 1-13.803-15.622a2604.997 2604.997 0 0 1-16.074-18.723zm184.093 13.438l58.415 61.67c-46.086-5.037-56.79 13.2-69.027 34.2l-57.334-59.304l67.946-36.566zM103.702 157.23a45.332 45.332 0 0 0-2.15.002c-6.976.18-14.207 2.058-22.252 5.885c-3.035 2.29-5.99 5.196-8.91 8.852c-25.77 32.264-30.45 59.135-25.484 83.477c4.965 24.343 20.536 46.656 37.916 66.455c13.314 15.168 28.86 23.992 48.472 27.93c19.614 3.94 43.438 2.708 71.98-3.475c33.246-7.2 66.01 8.42 95.81 27.665c26.118 16.868 50.676 37.09 70.98 49.95l8.79-18.935l-217.52-214.57l-.022-.022c-15.524-15.524-29.565-25.905-42.682-30.402c-5.02-1.722-9.925-2.695-14.928-2.813zm367.08 210.456l-73.45 40.304l-10.48 22.567l70.833-38.41l13.096-24.46z"
										/>
									</svg>

									<p className="mb-0">Find Match</p>
								</Link>
							</li>
							<li className="nav-item w-auto">
								<Link
									className={`nav-link ${
										location.pathname.includes(
											'/scout-players'
										) && 'selected-nav'
									} d-flex align-items-center gap-3 justify-content-start`}
									to="/scout-players"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="50"
										viewBox="0 0 36 36"
									>
										<path
											fill="currentColor"
											d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z"
											className="clr-i-solid clr-i-solid-path-1"
										/>
										<path fill="none" d="M0 0h36v36H0z" />
									</svg>

									<p className="mb-0">Scout Players</p>
								</Link>
							</li>
						</ul>
						<ul className="navbar-nav d-flex flex-column">
							<li className="nav-item w-auto">
								<Link
									className={`nav-link ${
										location.pathname === '/logout' &&
										'selected-nav'
									} d-flex align-items-center gap-3 justify-content-start`}
									to="/logout"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="50"
										fill="currentColor"
										className="bi bi-box-arrow-left"
										viewBox="0 0 16 16"
									>
										<path
											fillRule="evenodd"
											d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
										/>
										<path
											fillRule="evenodd"
											d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
										/>
									</svg>
									<p className="mb-0">Logout</p>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<div className="px-4 d-flex d-md-none justify-content-between container-fluid mb-4">
				<Link
					to="/"
					className="navbar-brand"
					style={{
						fontWeight: 'bold',
						fontSize: '1.5rem',
					}}
				>
					{' '}
					<img src="/logo.png" alt="logo" width={46} />
					Foora
				</Link>
				{isOpened ? (
					<svg
						onClick={() => setIsOpened(false)}
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						fill="currentColor"
						className="bi bi-x"
						viewBox="0 0 16 16"
					>
						<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
					</svg>
				) : (
					<svg
						onClick={() => setIsOpened(true)}
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						fill="currentColor"
						className="bi bi-list"
						viewBox="0 0 16 16"
					>
						<path
							fillRule="evenodd"
							d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
						/>
					</svg>
				)}
			</div>
			<nav
				className="pb-4"
				style={{
					position: 'absolute',
					width: '100vw',
					backgroundColor: 'white',
					zIndex: 100,
				}}
				hidden={!isOpened}
			>
				<div className="container-fluid h-100 d-flex flex-column align-items-center">
					<div
						className="w-100 h-100 d-flex flex-column justify-content-between"
						id="navbarNav"
					>
						<ul className="navbar-nav d-flex flex-column">
							<li className="nav-item">
								<Link
									onClick={() => setIsOpened(false)}
									className={`nav-link ${
										location.pathname === '/profile' &&
										'selected-nav'
									} d-flex align-items-center gap-3 justify-content-start`}
									to="/profile"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										className="bi bi-person-fill"
										viewBox="0 0 16 16"
									>
										<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
									</svg>
									<p className="mb-0">Edit Profile</p>{' '}
								</Link>
							</li>
							<li className="nav-item">
								<Link
									onClick={() => setIsOpened(false)}
									className={`nav-link ${
										location.pathname.includes(
											'/find-match'
										) && 'selected-nav'
									} d-flex align-items-center gap-3 justify-content-start`}
									to="/find-match/1"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 512 512"
									>
										<path
											fill="currentColor"
											d="M93.75 81.443c-5.38 0-12.368 2.49-22.358 8.967c3.966 4.682 8.167 9.687 16.47 19.256c5.782 6.663 11.618 13.29 16.026 18.088c.038.042.055.055.092.096l30.894-17.932l-14.652-14.148c-11.292-9.404-18.644-13.866-25.418-14.293a16.554 16.554 0 0 0-1.055-.034zm120.08 15.082a89.446 89.446 0 0 0-2.643.01c-10.46.193-20.2 2.23-26.742 5.424l-67.262 39.038c2.45.544 4.885 1.196 7.287 2.02c17.275 5.923 33.093 18.223 49.568 34.7l216.44 213.5l80.978-44.433L258.54 111.38c-8.656-7.84-22.49-12.908-36.693-14.394a86.624 86.624 0 0 0-8.018-.46zM58.192 102.74c-17.543 20.723-20.57 37.186-15.326 57.004c.692 2.618 3.057 6.357 6.373 10.47a182.968 182.968 0 0 1 7.086-9.478c3.99-4.995 8.385-9.183 13.085-12.558l-.106-.2l2.768-1.61a56.414 56.414 0 0 1 4.13-2.393l11.868-6.89a1048.196 1048.196 0 0 1-13.803-15.622a2604.997 2604.997 0 0 1-16.074-18.723zm184.093 13.438l58.415 61.67c-46.086-5.037-56.79 13.2-69.027 34.2l-57.334-59.304l67.946-36.566zM103.702 157.23a45.332 45.332 0 0 0-2.15.002c-6.976.18-14.207 2.058-22.252 5.885c-3.035 2.29-5.99 5.196-8.91 8.852c-25.77 32.264-30.45 59.135-25.484 83.477c4.965 24.343 20.536 46.656 37.916 66.455c13.314 15.168 28.86 23.992 48.472 27.93c19.614 3.94 43.438 2.708 71.98-3.475c33.246-7.2 66.01 8.42 95.81 27.665c26.118 16.868 50.676 37.09 70.98 49.95l8.79-18.935l-217.52-214.57l-.022-.022c-15.524-15.524-29.565-25.905-42.682-30.402c-5.02-1.722-9.925-2.695-14.928-2.813zm367.08 210.456l-73.45 40.304l-10.48 22.567l70.833-38.41l13.096-24.46z"
										/>
									</svg>
									<p className="mb-0">Find Match</p>{' '}
								</Link>
							</li>
							<li className="nav-item w-auto">
								<Link
									className={`nav-link ${
										location.pathname.includes(
											'/scout-players'
										) && 'selected-nav'
									} d-flex align-items-center gap-3 justify-content-start`}
									to="/scout-players"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 36 36"
									>
										<path
											fill="currentColor"
											d="M34 16.78a2.22 2.22 0 0 0-1.29-4l-9-.34a.23.23 0 0 1-.2-.15l-3.11-8.4a2.22 2.22 0 0 0-4.17 0l-3.1 8.43a.23.23 0 0 1-.2.15l-9 .34a2.22 2.22 0 0 0-1.29 4l7.06 5.55a.23.23 0 0 1 .08.24l-2.43 8.61a2.22 2.22 0 0 0 3.38 2.45l7.46-5a.22.22 0 0 1 .25 0l7.46 5a2.2 2.2 0 0 0 2.55 0a2.2 2.2 0 0 0 .83-2.4l-2.45-8.64a.22.22 0 0 1 .08-.24Z"
											className="clr-i-solid clr-i-solid-path-1"
										/>
										<path fill="none" d="M0 0h36v36H0z" />
									</svg>

									<p className="mb-0">Scout Players</p>
								</Link>
							</li>
						</ul>
						<ul className="navbar-nav d-flex flex-column">
							<li className="nav-item mt-auto">
								<Link
									onClick={() => setIsOpened(false)}
									className={`nav-link ${
										location.pathname === '/logout' &&
										'selected-nav'
									} d-flex align-items-center gap-3 justify-content-start`}
									to="/logout"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										className="bi bi-box-arrow-left"
										viewBox="0 0 16 16"
									>
										<path
											fillRule="evenodd"
											d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"
										/>
										<path
											fillRule="evenodd"
											d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"
										/>
									</svg>
									<p className="mb-0">Logout</p>{' '}
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
