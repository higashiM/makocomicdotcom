import React from 'react';
import { Typography } from '@material-ui/core';
const blogText = [
	{
		title: 'Squash Island',
		date: 'October 25th 2020',
		subline: 'Physics of a Squash Ball',
		imgSrc: require('../../../src/resources/projectCards/SquashCover.jpg'),
		imgTitle: '',
		content: (
			<Typography>
				Coming soon! I have just completed a working demo of my squash game "Squash Island" and in the near
				future I plan to share learnings around simulating physics, efficient algorithms for determining shot
				velocity, programming shot selection AI and more!
			</Typography>
		)
	}
];

export { blogText };
