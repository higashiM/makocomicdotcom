import React from 'react';
import { blogText } from './resources/Blog/BlogText';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import MobileScreenQuery from './MediaQuery';

function DisplayBlog() {
	return blogText;
}
export default DisplayBlog;
