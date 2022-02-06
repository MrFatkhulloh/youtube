import React from 'react';
import { NavLink } from 'react-router-dom';
import './Recommended.scss';

function Recommended() {
	const [data, setData] = React.useState([]);
	React.useEffect(() => {
		(async () => {
			try {
				const resposnse = await fetch(
					'https://jsonplaceholder.typicode.com/photos'
				);
				const data1 = await resposnse.json();
				if (data1?.length) {
					const slicedData = data1.slice(450, 500);
					setData(slicedData);
				}
			} catch (err) {
				console.log(err);
			}
		})();
	}, []);
	return (
		<>
			<nav className='nav mainRecommended__nav'>
				<div className='mainRecommended__nav__heading--wrapper df align-center'>
					<h3 className='mainRecommended__nav__heading'>
						Recommended
					</h3>
				</div>
				<ul className='nav__list mainRecommended__nav__list df'>
					{data?.length &&
						data.map((datum) => (
							<li
								key={datum.id}
								className='nav__list__item mainRecommended__nav__list__item'>
								<NavLink
									to={'/uservideo/' + datum.id}
									className='nav__list__link mainRecommended__nav__list__link'>
									<img
										src={datum.url}
										alt=''
										width={540}
										height={250}
									/>
									<h4 className='mainRecommended__nav__list__link__heading'>
										{datum.title}
									</h4>
									<div className='mainRecommended__nav__list__link__text-wrapper space-between'>
										<p className='mainRecommended__nav__list__link__text'>
											{Math.floor(Math.random() * 100) +
												'k views · ' +
												Math.ceil(Math.random() * 10) +
												' days ago'}
										</p>
										<p className='mainRecommended__nav__list__link__text'>
											Dollie Blair
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

export default Recommended;
