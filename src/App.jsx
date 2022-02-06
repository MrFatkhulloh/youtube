import './App.css';
import React from 'react';

import { Context } from './Components/Context/Context';

import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';

function App() {
	const { token, setToken } = React.useContext(Context);
	console.log(token);

	if (token) {
		return (
			<>
				<AuthenticatedApp />
			</>
		);
	} else {
		return (
			<>
				<UnauthenticatedApp />
			</>
		);
	}
}

export default App;
