import React from 'react';
import { NavLink } from 'react-router-dom';
import './Reklom3.scss';
import user from './../../Assets/Images/Home/user.png';

function Reklom3() {
	const [data, setData] = React.useState([
		{
			albumId: 2,
			id: 51,
			title: 'non sunt voluptatem placeat consequuntur rem incidunt',
			url: 'https://via.placeholder.com/600/8e973b',
			thumbnailUrl: 'https://via.placeholder.com/150/8e973b',
		},
	]);
	const [users, setUsers] = React.useState({
		id: 8,
		email: 'lindsay.ferguson@reqres.in',
		first_name: 'Lindsay',
		last_name: 'Ferguson',
		avatar: 'https://reqres.in/img/faces/8-image.jpg',
	});
	React.useEffect(() => {
		// (async () => {
		// 	try {
		// 		const resposnse = await fetch(
		// 			'https://reqres.in/api/users?page=2'
		// 		);
		// 		const usersInfo = await resposnse.json();

		// 		if (usersInfo?.data?.length) {
		// 			const chosenUser = usersInfo.data.find(
		// 				(user) => user.id > 7
		// 			);

		// 			setUsers(chosenUser);
		// 		}
		// 	} catch (err) {
		// 		console.log(err);
		// 	}
		fetch('https://reqres.in/api/users?page=2')
			.then((response) => response.json())
			.then((chosenUser) =>
				setUsers(chosenUser.data.find((user) => user.id > 7))
			)
			.catch((err) => console.log(err));

		fetch('https://jsonplaceholder.typicode.com/photos')
			.then((response) => response.json())
			.then((data) =>
				setData(
					data
						.filter((datum) => users.id === datum.albumId)
						.slice(0, 10)
				)
			)
			.catch((err) => console.log(err));

		if (data?.length && users) {
			const filteredData = data.filter(
				(datum) => users.id === datum.albumId
			);
			setData(filteredData);
			console.log(data);
		}
		try {
		} catch (err) {
			console.log(err);
		}
		// })();
	}, []);

	return (
		<>
			<nav className='nav main__nav'>
				<NavLink
					to={'/user/' + users.id}
					className='main__nav__heading--wrapper df align-center'>
					<img
						className='main__nav__heading--img'
						src={users?.avatar || user}
						alt='user image'
						width={50}
						height={50}
					/>
					<h3 className='main__nav__heading'>
						{users.first_name + ' ' + users.last_name}
					</h3>
				</NavLink>
				<ul className='nav__list main__nav__list df'>
					{data?.length &&
						users &&
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
												'days ago'}
										</p>
										<p className='main__nav__list__link__text'>
											{users.first_name +
												' ' +
												users.last_name}
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

export default Reklom3;
