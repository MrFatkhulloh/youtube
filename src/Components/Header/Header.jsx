import React from 'react';
import './Header.scss';
import { grey, red } from '@mui/material/colors';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import YouTube from '@mui/icons-material/YouTube';
import ViewHeadlineRoundedIcon from '@mui/icons-material/ViewHeadlineRounded';
import camera from './../../Assets/Images/Header/camera.svg';
import youtube from './../../Assets/Images/Aside/YouTube_text.svg';
import dots from './../../Assets/Images/Header/dots.svg';
import notification from './../../Assets/Images/Header/notification.svg';
import accountPic from './../../Assets/Images/Header/accountPic.png';

function Header() {
	return (
		<div className='header--wrapper df space-between'>
			<div className='wrapper'>
				{/* <div className='youtube visually-hidden'>
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
				</div> */}
				<form className='header--form'>
					<input className='input' type='text' placeholder='Search' />
					<button className='search-icon'>
						<SearchOutlinedIcon />
					</button>
				</form>
			</div>
			<div className='icon-side'>
				<nav className='nav'>
					<ul className='nav__list df'>
						<li className='nav__list__item me-50 pt-10'>
							<a href='#' className='nav__list__link'>
								<img
									src={camera}
									alt='camera icon'
									width={28}
									height={17}
								/>
							</a>
						</li>
						<li className='nav__list__item me-50 pt-10'>
							<a href='#' className='nav__list__link'>
								<img
									src={dots}
									alt='dots icon'
									width={21}
									height={21}
								/>
							</a>
						</li>
						<li className='nav__list__item me-50 pt-10 mb-30 '>
							<a href='#' className='nav__list__link bedged'>
								<img
									src={notification}
									alt='camera icon'
									width={22}
									height={26}
								/>
							</a>
						</li>
						<li className='nav__list__item me-50 pt-10'>
							<a href='#' className='nav__list__link'>
								<img
									src={accountPic}
									alt='camera icon'
									width={40}
									height={40}
								/>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default Header;
