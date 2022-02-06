import React from 'react';
import LogIn from './Components/LogIn/LogIn';
import Container from '@mui/material/Container';

function UnauthenticatedApp() {
	return (
		<>
			<Container fixed>
				<LogIn />
			</Container>
		</>
	);
}

export default UnauthenticatedApp;
