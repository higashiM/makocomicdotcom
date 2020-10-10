import React from 'react';
import ProjectCard from './components/ProjectCard';
import { projectText } from './resources/projectCards/projectText';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

function DisplayProjectCard() {
	const useStyles = makeStyles({
		root: {
			//padding: '30px 30px'
		},
		container: {
			display: 'grid',
			gridTemplateColumns: '1fr 1fr',
			padding: '30px 30px'
		}
	});

	const classes = useStyles();

	return (
		<Grid container spacing={8} className={classes.container} wrap={'nowrap'}>
			{projectText.map((project) => {
				return (
					<Grid item>
						<ProjectCard
							title={project.title}
							description={project.description}
							altDescription={project.altDescription}
							imgSrc={project.imgSrc}
							imgTitle={project.imgTitle}
							altImgSrc={project.altImgSrc}
							altImgTitle={project.altImgTitle}
							gitHubFront={project.gitHubFront}
							gitHubBack={project.gitHubBack}
							frontURL={project.frontURL}
							backURL={project.backURL}
							presentation={project.presentation}
						/>
					</Grid>
				);
			})}
		</Grid>
	);
}

export default DisplayProjectCard;
