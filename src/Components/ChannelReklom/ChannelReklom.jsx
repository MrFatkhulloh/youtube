import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './ChannelReklom.scss';
import user from './../../Assets/Images/Home/user.png';

function ChannelReklom() {
	const [data, setData] = React.useState([
		{
			albumId: 1,
			id: 1,
			title: 'accusamus beatae ad facilis cum similique qui sunt',
			url: 'https://via.placeholder.com/600/92c952',
			thumbnailUrl: 'https://via.placeholder.com/150/92c952',
		},
	]);
	const [users, setUsers] = React.useState([
		{
			id: 7,
			email: 'michael.lawson@reqres.in',
			first_name: 'Michael',
			last_name: 'Lawson',
			avatar: 'https://reqres.in/img/faces/7-image.jpg',
		},
	]);
	React.useEffect(() => {
		(async () => {
			try {
				const resposnse = await fetch(
					'https://reqres.in/api/users?page=2'
				);
				const usersInfo = await resposnse.json();

				if (usersInfo?.data?.length) {
					setUsers([...usersInfo.data]);
				}
			} catch (err) {
				console.log(err);
			}
			try {
				const resposnse = await fetch(
					'https://jsonplaceholder.typicode.com/photos'
				);
				const data1 = await resposnse.json();

				if (data1?.length && users?.length) {
					const filteredData = data1
						.filter((datum) => users[0].id === datum.albumId)
						.slice(0, 10);
					setData(filteredData);
				}
			} catch (err) {
				console.log(err);
			}
		})();
	}, []);

	return (
		<>
			<nav className='nav main__nav'>
				<NavLink
					to={'/user/' + users[0].id}
					className='main__nav__heading--wrapper df align-center'>
					<img
						className='main__nav__heading--img'
						src={users?.length ? users[0].avatar : user}
						alt='user image'
						width={50}
						height={50}
					/>
					<h3 className='main__nav__heading'>
						{users?.length
							? users[0].first_name + ' ' + users[0].last_name
							: ' '}
					</h3>
				</NavLink>
				<ul className='nav__list main__nav__list df'>
					{data?.length &&
						users?.length &&
						data.map((datum) => (
							<li
								key={datum.id}
								className='nav__list__item main__nav__list__item'>
								<NavLink
									to={'/uservideo/' + datum.id}
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
											{Math.floor(Math.random() * 100) +
												'k views · ' +
												Math.ceil(Math.random() * 10) +
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
		</>
	);
}

export default ChannelReklom;
