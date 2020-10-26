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

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 'auto'
	},
	Card: {
		width: 'auto',
		margin: 'auto'
	},
	media: {
		height: 600,
		[theme.breakpoints.down('md')]: {
			height: 300
		},
		width: 'auto',
		objectFit: 'cover'
	}
}));

export default function BlogCard(props) {
	const { title, date, subline, imgSrc, imgTitle, content } = props;

	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia className={classes.media} image={imgSrc} title={imgTitle} />

				<CardContent>
					<Typography gutterBottom variant="h5" component="h1">
						{title}
					</Typography>
					<Typography variant="subtitle2" color="textSecondary" component="p">
						{date}
					</Typography>
					<Typography gutterBottom variant="h6" component="h2">
						{subline}
					</Typography>
					<Typography gutterBottom variant="body1" color="textSecondary" component="p">
						{content}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions />
		</Card>
	);
}
