import './App.css';
import React from 'react';
import { Grid, Link } from '@material-ui/core';
import TabPanel from './components/TabPanel';
import Footer from './components/Footer';
import { makeStyles } from '@material-ui/core/styles';
import { MobileScreenQuery } from './MediaQuery';

function App() {
	const isMobileScreen = MobileScreenQuery();

	const useStyles = makeStyles({
		root: {
			//padding: '30px 30px'
		},

		container: {
			display: 'grid',
			gridTemplateColumns: '1fr',
			padding: '10px 10px'
		}
	});

	const classes = useStyles();
	return (
		<Grid container spacing={0} className={classes.container} wrap={'nowrap'}>
			<Grid item>{TabPanel()}</Grid>

			{/*<Grid item>{Footer()}</Grid>*/}
		</Grid>
	);
}

export default App;
