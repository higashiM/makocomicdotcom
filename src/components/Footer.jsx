import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Grid, Link, Typography } from '@material-ui/core';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const useStyles = makeStyles({
	root: {
		width: 'auto'
	},

	container: {
		display: 'grid',
		columns: 4,
		gridTemplateColumns: '1fr 1fr 1fr 1fr',
		padding: '10px',
		alignItems: 'center',
		alignContent: 'center',
		direction: 'row'
	}
});

export default function Footer() {
	const classes = useStyles();

	const styleIcon = { height: '30px' };

	return (
		<BottomNavigation>
			<Grid className={classes.container} container spacing={0.5} wrap={'nowrap'}>
				<Grid item>
					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.0/css/font-awesome.min.css"
					/>
					<Link href="mailto: eastwg@gmail.com" target="_blank" rel="noopener noreferrer">
						<img src={require('../resources/About/at-solid.svg')} alt="@ mail symbol" style={styleIcon} />
					</Link>
				</Grid>
				<Grid item>
					<Link href="https://www.linkedin.com/in/eastwg/" target="_blank" rel="noopener noreferrer">
						<img
							src={require('../resources/About/linkedin-brands.svg')}
							alt="linkedin icon"
							style={styleIcon}
						/>
					</Link>
				</Grid>
				<Grid item>
					<Link
						href="https://higashimori.itch.io"
						target="_blank"
						rel="noopener noreferrer"
						style={styleIcon}
					>
						<img
							src={require('../resources/About/itchio-logo-black.png')}
							alt="itch.io icon"
							style={styleIcon}
						/>
					</Link>
				</Grid>

				<Grid item>
					<Link href="https://github.com/higashiM/" target="_blank" rel="noopener noreferrer">
						<img src={require('../resources/About/GitHub_Logo.png')} alt="github icon" style={styleIcon} />
					</Link>
				</Grid>
			</Grid>
		</BottomNavigation>
	);
}
