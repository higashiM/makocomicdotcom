import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export function MobileScreenQuery() {
	const matches = useMediaQuery('(max-width:600px)');

	return matches;
}

export function WiderScreencreenQuery() {
	const matches = useMediaQuery('(min-width:1200px)');

	return matches;
}
