import React from 'react';
import './Home.scss';
import ChannelReklom from '../ChannelReklom/ChannelReklom';
import Recommended from '../Recommended/Recommended';
import Reklom3 from '../Reklom3/Reklom3';

function Home() {
	return (
		<>
			<div className='df column home'>
				<ChannelReklom />
				<Recommended />
				<Reklom3 />
			</div>
		</>
	);
}

export default Home;
