import React from 'react';
import './VideoPlayer.scss';
// import user from './../../Assets/Images/Home/user.png';
import { NavLink, useParams } from 'react-router-dom';

import Button from '@mui/material/Button';

function VideoPlayer({ users }) {
	const [aUser, setUser] = React.useState(users[0]);
	const [list, setList] = React.useState([
		{
			albumId: 1,
			id: 1,
			title: 'accusamus beatae ad facilis cum similique qui sunt',
			url: 'https://via.placeholder.com/600/92c952',
			thumbnailUrl: 'https://via.placeholder.com/150/92c952',
		},
	]);
	const { id } = useParams();
	const [data, setData] = React.useState({
		albumId: 1,
		id: 1,
		title: 'accusamus beatae ad facilis cum similique qui sunt',
		url: 'https://via.placeholder.com/600/92c952',
		thumbnailUrl: 'https://via.placeholder.com/150/92c952',
	});

	React.useEffect(() => {
		(async () => {
			try {
				const resposnse = await fetch(
					'https://jsonplaceholder.typicode.com/photos'
				);
				const data1 = await resposnse.json();

				if (data1?.length && users?.length) {
					const foundData = data1.find((datum) => datum.id == id);
					setData(foundData);
					const user = users.find(
						(user) => user.id == foundData.albumId
					);
					const filteredData = data1.filter(
						(datum) => datum.albumId == user.id
					);
					setUser(user);
					setList([...filteredData]);
				}
			} catch (err) {
				console.log(err);
			}
		})();
	}, [id]);

	return (
		<>
			VideoPlayer
			<div className='wrapper space-between'>
				<div className='wrapper__main'>
					<img
						className='wrapper__main__image'
						// src='https://via.placeholder.com/600/92c952'
						src={data.url}
						alt='video image'
						width={1363}
						height={700}
					/>
					<div className='wrapper__main__image__info'>
						<h2 className='wrapper__main__image__info__text'>
							{data.title}
						</h2>
						<div className='df w100 space-between align-centre'>
							<p className='wrapper__main__image__info__views'>
								{Math.ceil(Math.random() * 1000) + 'k views'}
							</p>
							<div className='df'>
								<p className='wrapper__main__image__info__likes'>
									{Math.ceil(Math.random() * 1000) + 'k'}
								</p>
								<p className='wrapper__main__image__info__likes'>
									{Math.ceil(Math.random() * 1000) + 'k'}
								</p>
								<p className='wrapper__main__image__info__likes'>
									Share
								</p>
								<svg
									className='wrapper__main__image__info__more-sign'
									width='28'
									height='6'
									viewBox='0 0 28 6'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M3 6C4.65685 6 6 4.65685 6 3C6 1.34315 4.65685 0 3 0C1.34315 0 0 1.34315 0 3C0 4.65685 1.34315 6 3 6ZM14 6C15.6569 6 17 4.65685 17 3C17 1.34315 15.6569 0 14 0C12.3431 0 11 1.34315 11 3C11 4.65685 12.3431 6 14 6ZM28 3C28 4.65685 26.6569 6 25 6C23.3431 6 22 4.65685 22 3C22 1.34315 23.3431 0 25 0C26.6569 0 28 1.34315 28 3Z'
										fill='white'
									/>
								</svg>
							</div>
						</div>
					</div>
					<div className='wrapper__main__some-info space-between'>
						<div className='main__nav__heading--wrapper df align-center'>
							<img
								className='main__nav__heading--img'
								src={aUser.avatar}
								alt='user image'
								width={80}
								height={80}
							/>
							<div className='name-wrapper'>
								<h3 className='main__nav__heading name-wrapper__heading'>
									{aUser.first_name + ' ' + aUser.last_name}
								</h3>
								<p className='name-wrapper__text'>
									{'Published on 1' +
										Math.ceil(Math.random() * 10) +
										'Jun 201' +
										Math.ceil(Math.random() * 10)}
								</p>
								<p className='name-wrapper__main-text'>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Accusantium animi corporis
									dicta temporibus, quas, vel, odit doloremque
									ab consectetur reprehenderit non? Error,
									dolor magni! Est velit commodi non ullam ab
									tempora perferendis, pariatur amet nihil
									consequuntur libero, dolor facilis laborum
									perspiciatis ipsum cupiditate animi
									voluptatum eum molestias reiciendis iste
									obcaecati ex nemo necessitatibus. Nobis,
									sint?
								</p>
								<p className='name-wrapper__show-more'>
									Show more
								</p>
							</div>
						</div>
						<Button
							sx={{
								borderRadius: 20,
								textTransform: 'capitalize',
								width: 154,
								height: 40,
							}}
							color='error'
							variant='contained'>
							Subscribe 2.3m
						</Button>
					</div>
				</div>
				<div className='wrapper__aside'>
					<div className='wrapper__aside__header space-between'>
						<h2 className='wrapper__aside__header__heading'>
							Next
						</h2>
						<p className='wrapper__aside__header__function'>
							Autoplay
						</p>
					</div>
					<nav className='wrapper__aside__nav'>
						<ul className='nav__list main__nav__list wrapper__aside__nav__list df over-scroll'>
							{list?.length &&
								aUser &&
								list.map((datum) => (
									<li
										key={datum.id}
										className='nav__list__item main__nav__list__item wrapper__aside__nav__list__item'>
										<NavLink
											to={'/uservideo/' + datum.id}
											className='nav__list__link main__nav__list__link'>
											<img
												src={datum.url}
												alt=''
												width={367}
												height={213}
											/>
											<h4 className='main__nav__list__link__heading'>
												{datum.title}
											</h4>
											<div className='main__nav__list__link__text-wrapper space-between'>
												<p className='main__nav__list__link__text'>
													80k views
												</p>
												<p className='main__nav__list__link__text'>
													{aUser.first_name +
														' ' +
														aUser.last_name}
												</p>
											</div>
										</NavLink>
									</li>
								))}
						</ul>
					</nav>
				</div>
			</div>
		</>
	);
}

export default VideoPlayer;
