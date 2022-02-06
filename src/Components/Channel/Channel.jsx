import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import './Channel.scss';
import Button from '@mui/material/Button';

import ChannelReklom from './../ChannelReklom/ChannelReklom';

import blogger from './../../Assets/Images/Channel/blogger.png';
import oval1 from './../../Assets/Images/Channel/Oval1.png';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Channel({ users }) {
	const { id } = useParams();
	const [isRendered, setRendered] = React.useState(false);

	const [data, setData] = React.useState([
		{
			albumId: 1,
			id: 1,
			title: 'accusamus beatae ad facilis cum similique qui sunt',
			url: 'https://via.placeholder.com/600/92c952',
			thumbnailUrl: 'https://via.placeholder.com/150/92c952',
		},
	]);
	const [targettedUser, setTargettedUser] = React.useState({
		id: 1,
		email: 'george.bluth@reqres.in',
		first_name: 'George',
		last_name: 'Bluth',
		avatar: 'https://reqres.in/img/faces/1-image.jpg',
	});

	React.useEffect(() => {
		(async () => {
			const response2 = await fetch(
				'https://jsonplaceholder.typicode.com/photos'
			);
			const data2 = await response2.json();
			const foundUser = users.find((aUser) => aUser.id == id);
			setTargettedUser(foundUser);
			const filteredData = data2.filter(
				(datum) => datum.albumId == foundUser.id
			);
			setData(filteredData);
			setRendered(true);
		})();
	}, [id]);
	return (
		<>
			<div>
				<div className='channel-background'></div>
				<div className='box1 df align-centeer space-between'>
					<div className='bloger df'>
						<img
							className='blogger__img rounded'
							src={
								targettedUser?.avatar
									? targettedUser.avatar
									: blogger
							}
							alt={targettedUser.first_name + "'s image"}
							width={80}
							height={80}
						/>
						<div className='blogger__info'>
							<h4 className='blogger__name'>
								{targettedUser.first_name +
									' ' +
									targettedUser.last_name}
							</h4>
							<p className='blogger__subscribe'>
								{Math.floor(Math.random() * 1000) +
									'K subscribed'}
							</p>
						</div>
					</div>
					<div className='mt'>
						<Button
							sx={{
								borderRadius: 20,
								textTransform: 'capitalize',
							}}
							color='error'
							variant='contained'>
							Subscribe 2.3m
						</Button>
					</div>
				</div>
				<div className='df space-between'>
					<div className='channel__content__wrapper'>
						<nav className='channel__nav'>
							<ul className='nav__list df channel__nav__list'>
								<li className='channel__nav__list__item'>
									<a
										href='#'
										className='channel__nav__list__link nav__list__link channel__nav__list__link--active'>
										Home
									</a>
								</li>
								<li className='channel__nav__list__item'>
									<a
										href='#'
										className='channel__nav__list__link nav__list__link'>
										Videos
									</a>
								</li>
								<li className='channel__nav__list__item'>
									<a
										href='#'
										className='channel__nav__list__link nav__list__link'>
										Playlists
									</a>
								</li>
								<li className='channel__nav__list__item'>
									<a
										href='#'
										className='channel__nav__list__link nav__list__link'>
										Channels
									</a>
								</li>
								<li className='channel__nav__list__item'>
									<a
										href='#'
										className='channel__nav__list__link nav__list__link'>
										Discussion
									</a>
								</li>
								<li className='channel__nav__list__item'>
									<a
										href='#'
										className='channel__nav__list__link nav__list__link'>
										About
									</a>
								</li>
								<li className='channel__nav__list__item'>
									<a
										href='#'
										className='channel__nav__list__link nav__list__link'>
										<SearchOutlinedIcon />
									</a>
								</li>
							</ul>
						</nav>
						<NavLink
							to={'/uservideo/' + data[0].id}
							className='df best-video space-between'>
							<img
								className='best-video__img'
								// src='https://via.placeholder.com/600/92c952'
								src={data[0].url}
								alt=''
								width={540}
								height={250}
							/>
							<div className='best-video__text--wrapper'>
								<h3 className='best-video__heading'>
									{data[0].title}
								</h3>
								<p className='best-video__text best-video__text1'>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Laborum doloribus
									laudantium excepturi odit? Itaque fuga optio
									quas debitis, repudiandae quam veritatis
									mollitia! Adipisci consequuntur pariatur
									molestias. Dolorem dignissimos numquam
									recusandae.
								</p>
								<p className='best-video__text best-video__text2'>
									{Math.ceil(Math.random() * 100) +
										'k views · ' +
										Math.ceil(Math.random() * 10) +
										' months ago'}
								</p>
							</div>
						</NavLink>
					</div>
					<nav className='channel__content-recommend'>
						<h3 className='channel__content-recommend__heading'>
							Recommended channel
						</h3>
						<ul className='channel__content-recommend__list'>
							<li className='channel__content-recommend__list__item nav__list__item'>
								<a
									href='#'
									className='nav__list__link channel__content-recommend__list__link'>
									<img
										className='nav__list__link__icon channel__content-recommend__list__img'
										src={oval1}
										alt='gussie'
										width={50}
										height={50}
									/>
									<span>Gussie Singleton</span>
								</a>
							</li>
							<li className='channel__content-recommend__list__item nav__list__item'>
								<a
									href='#'
									className='nav__list__link channel__content-recommend__list__link'>
									<img
										className='nav__list__link__icon channel__content-recommend__list__img'
										src={oval1}
										alt='gussie'
										width={50}
										height={50}
									/>
									<span>Gussie Singleton</span>
								</a>
							</li>
							<li className='channel__content-recommend__list__item nav__list__item'>
								<a
									href='#'
									className='nav__list__link channel__content-recommend__list__link'>
									<img
										className='nav__list__link__icon channel__content-recommend__list__img'
										src={oval1}
										alt='gussie'
										width={50}
										height={50}
									/>
									<span>Gussie Singleton</span>
								</a>
							</li>
						</ul>
					</nav>
				</div>
				<nav className='nav main__nav'>
					<div className='main__nav__heading--wrapper df align-center'>
						<img
							className='main__nav__heading--img'
							src={targettedUser.avatar}
							alt='user image'
							width={50}
							height={50}
						/>
						<h3 className='main__nav__heading'>
							{targettedUser.first_name +
								' ' +
								targettedUser.last_name}
						</h3>
					</div>
					<ul className='nav__list main__nav__list df'>
						{data?.length &&
							data.map((datum) => (
								<li
									key={datum.id}
									className='nav__list__item main__nav__list__item'>
									<NavLink
										to={'/uservideo/' + datum.id}
										href='#'
										className='nav__list__link main__nav__list__link'>
										<img
											src={datum.url}
											alt=''
											width={250}
											height={150}
										/>
										<h4 className='main__nav__list__link__heading'>
											{datum.title}
										</h4>
										<div className='main__nav__list__link__text-wrapper space-between'>
											<p className='main__nav__list__link__text'>
												{Math.floor(
													Math.random() * 100
												) +
													'k views · ' +
													Math.ceil(
														Math.random() * 10
													) +
													' days ago'}
											</p>
											<p className='main__nav__list__link__text'>
												{users[0].first_name +
													' ' +
													users[0].last_name}
											</p>
										</div>
									</NavLink>
								</li>
							))}
					</ul>
				</nav>
			</div>
		</>
	);
}

export default Channel;
