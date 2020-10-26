import React from 'react';
import { blogText } from './resources/Blog/BlogText';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { MobileScreenQuery } from './MediaQuery';
import BlogCard from './components/Blog';

function DisplayBlog() {
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
		<Grid container spacing={8} className={classes.container} wrap={'nowrap'}>
			{blogText.map((blog) => {
				return (
					<Grid item>
						<BlogCard
							title={blog.title}
							date={blog.date}
							subline={blog.subline}
							imgSrc={blog.imgSrc}
							imgTitle={blog.imgTitle}
							content={blog.content}
						/>
					</Grid>
				);
			})}
		</Grid>
	);
}
export default DisplayBlog;
