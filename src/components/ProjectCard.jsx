import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { MobileScreenQuery } from '../MediaQuery';

export default function ProjectCard(props) {
	const {
		title,
		description,
		altDescription,
		imgSrc,
		altImgSrc,
		imgTitle,
		altImgTitle,
		gitHubFront,
		gitHubBack,
		frontURL,
		backURL,
		presentation,
		isMobileScreen
	} = props;

	const useStyles = makeStyles((theme) => ({
		root: {
			maxWidth: 600
		},
		Card: {
			width: 350,
			margin: 'auto'
		},
		media: {
			height: 600,
			[theme.breakpoints.down('md')]: {
				height: 300
			},
			width: '100%',
			objectFit: 'cover'
		},

		typography: {
			fontSize: 24
		}
	}));
	const [ altText, setAltText ] = useState(false);
	const classes = useStyles();

	const links = [ gitHubFront, gitHubBack, frontURL, backURL, presentation ];

	if (altText)
		return (
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia className={classes.media} image={altImgSrc} title={altImgTitle} />
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{title}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							{altDescription}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					{gitHubFront === '' ? (
						''
					) : (
						<Button size="small" color="primary">
							<Link href={gitHubFront} target="_blank">
								Git-FE
							</Link>
						</Button>
					)}

					{gitHubBack === '' ? (
						''
					) : (
						<Button size="small" color="primary">
							<Link href={gitHubBack} target="_blank">
								Git-BE
							</Link>
						</Button>
					)}

					{backURL === '' ? (
						''
					) : (
						<Button size="small" color="primary">
							<Link href={backURL} target="_blank">
								API
							</Link>
						</Button>
					)}
					<Button size="small" color="primary" onClick={() => setAltText(!altText)}>
						summary
					</Button>
				</CardActions>
			</Card>
		);

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia className={classes.media} image={imgSrc} title={imgTitle} />
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{title}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{description}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				{/*<Button size="small" color="primary">
					<Link href={frontURL} target="_blank">
						Try it Out!
					</Link>
				</Button>*/}
				{presentation === '' ? (
					''
				) : (
					<Button size="small" color="primary">
						<Link href={presentation} target="_blank">
							YouTube Project Video
						</Link>
					</Button>
				)}
				{/*<Button size="small" color="primary" onClick={() => setAltText(!altText)}>
					more info
				</Button>*/}
			</CardActions>
		</Card>
	);
}
