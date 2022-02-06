import React from 'react';
import './Aside.scss';

import { NavLink } from 'react-router-dom';

import { grey, red } from '@mui/material/colors';

import youtube from './../../Assets/Images/Aside/YouTube_text.svg';
import oval1 from './../../Assets/Images/Aside/oval1.png';
import oval2 from './../../Assets/Images/Aside/oval2.png';
import oval3 from './../../Assets/Images/Aside/oval3.png';
import oval4 from './../../Assets/Images/Aside/oval4.png';
import oval5 from './../../Assets/Images/Aside/oval5.png';
import oval6 from './../../Assets/Images/Aside/oval6.png';

import YouTube from '@mui/icons-material/YouTube';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ViewHeadlineRoundedIcon from '@mui/icons-material/ViewHeadlineRounded';

function Aside({ page }) {
	console.log(page);
	const [users, setUsers] = React.useState([]);
	React.useEffect(() => {
		fetch('https://reqres.in/api/users')
			.then((response) => response.json())
			.then((data) => setUsers(data.data))
			.catch((err) => console.log(err));
	}, []);
	return (
		<>
			<div className='aside--wrapper'>
				<div className='youtube'>
					<YouTube
						className='youtube__sign'
						fontSize='large'
						sx={{ color: red[700] }}
					/>
					<img src={youtube} alt='' width={75} height={23} />
					<ViewHeadlineRoundedIcon
						className='more__sign'
						fontSize='large'
						sx={{ color: grey[50] }}
					/>
				</div>
				<div
					className={page == 'videoplayer' ? 'display-none' : 'boxx'}>
					<nav className='nav'>
						<ul className='nav__list'>
							<li className='nav__list__item'>
								<a
									href='#'
									className='nav__list__link nav__list__link--active'>
									<HomeOutlinedIcon className='nav__list__link__icon' />
									<span>Home</span>
								</a>
							</li>
							<li className='nav__list__item'>
								<a href='#' className='nav__list__link'>
									<LocalFireDepartmentOutlinedIcon className='nav__list__link__icon' />
									<span>Trending</span>
								</a>
							</li>
							<li className='nav__list__item'>
								<a href='#' className='nav__list__link'>
									<SubscriptionsOutlinedIcon className='nav__list__link__icon' />
									<span>Subscriptions</span>
								</a>
							</li>
							<li className='nav__list__item'>
								<a href='#' className='nav__list__link'>
									<VideoLibraryOutlinedIcon className='nav__list__link__icon' />
									<span>Library</span>
								</a>
							</li>
							<li className='nav__list__item'>
								<a href='#' className='nav__list__link'>
									<HistoryOutlinedIcon className='nav__list__link__icon' />
									<span>History</span>
								</a>
							</li>
							<li className='nav__list__item'>
								<a href='#' className='nav__list__link'>
									<WatchLaterOutlinedIcon className='nav__list__link__icon' />
									<span>Watch later</span>
								</a>
							</li>
							<li className='nav__list__item'>
								<a href='#' className='nav__list__link'>
									<StarBorderOutlinedIcon className='nav__list__link__icon' />
									<span>Favourites</span>
								</a>
							</li>
							<li className='nav__list__item'>
								<a href='#' className='nav__list__link'>
									<ThumbUpAltOutlinedIcon className='nav__list__link__icon' />
									<span>Liked videos</span>
								</a>
							</li>
							<li className='nav__list__item'>
								<a href='#' className='nav__list__link'>
									<LibraryMusicOutlinedIcon className='nav__list__link__icon' />
									<span>Music</span>
								</a>
							</li>
							<li className='nav__list__item'>
								<a href='#' className='nav__list__link'>
									<SportsEsportsOutlinedIcon className='nav__list__link__icon' />
									<span>Games</span>
								</a>
							</li>
							<li className='nav__list__item'>
								<a href='#' className='nav__list__link'>
									<KeyboardArrowDownOutlinedIcon className='nav__list__link__icon' />
									<span>Show more</span>
								</a>
							</li>
						</ul>
					</nav>
					<nav className='nav subscriptions'>
						<h3 className='subscriptions__heading'>
							Subscriptions
						</h3>
						<ul className='nav__list'>
							{users.length &&
								users.map((user) => (
									<li
										key={user.id}
										className='nav__list__item'>
										<NavLink
											to={'/user/' + user.id}
											className='nav__list__link'>
											<img
												className='nav__list__link__icon'
												src={user.avatar}
												alt='gussie'
												width={26}
												height={26}
											/>
											<span>
												{user.first_name +
													' ' +
													user.last_name}
											</span>
										</NavLink>
									</li>
								))}
						</ul>
					</nav>
					<a href='#' className='settings nav__list__link'>
						<SettingsOutlinedIcon className='settings__icon' />
						<span>Setting</span>
					</a>
				</div>
			</div>
		</>
	);
}

export default Aside;
