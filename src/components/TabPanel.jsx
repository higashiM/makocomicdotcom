import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DisplayProjectCard from '../DisplayProjectCard';
import DisplayAbout from '../DisplayAbout';
import DisplayBlog from '../DisplayBlog';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`nav-tabpanel-${index}`}
			aria-labelledby={`nav-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired
};

function a11yProps(index) {
	return {
		id: `nav-tab-${index}`,
		'aria-controls': `nav-tabpanel-${index}`
	};
}

function LinkTab(props) {
	return (
		<Tab
			component="a"
			onClick={(event) => {
				event.preventDefault();
			}}
			{...props}
		/>
	);
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper
	},
	label: {
		fontSize: '24px',
		[theme.breakpoints.down('sm')]: {
			fontSize: '14px'
		}
	}
}));

export default function NavTabs() {
	const classes = useStyles();
	const [ value, setValue ] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Tabs variant="fullWidth" value={value} onChange={handleChange} aria-label="nav tabs">
					<LinkTab className={classes.label} label="About" href="/about" {...a11yProps(0)} />
					<LinkTab className={classes.label} label="Projects" href="/projects" {...a11yProps(1)} />
					<LinkTab className={classes.label} label="Blog" href="/blog" {...a11yProps(2)} />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
				{DisplayAbout()}
			</TabPanel>
			<TabPanel value={value} index={1}>
				{DisplayProjectCard()}
			</TabPanel>
			<TabPanel value={value} index={2}>
				{DisplayBlog()}
			</TabPanel>
		</div>
	);
}
