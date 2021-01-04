//import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { useTheme, ThemeProvider } from '@material-ui/core/styles';
//import { selectContrastMainTheme } from 'app/store/fuse/settingsSlice';
import clsx from 'clsx';
import React from 'react';
import { jeju1Theme } from '../../app/config/themeConfig';
import FuseScrollbars from '../FuseScrollbars';
//import { useSelector } from 'react-redux';

function FusePageCardedSidebarContent(props) {
	const theme = useTheme();
	//const contrastTheme = useSelector(selectContrastMainTheme(theme.palette.primary.main));
	const contrastTheme = jeju1Theme;

	const { classes } = props;

	return (
		<>
			{props.header && (
				<ThemeProvider theme={contrastTheme}>
					<div className={clsx(classes.sidebarHeader, props.variant)}>{props.header}</div>
				</ThemeProvider>
			)}

			{props.content && (
				<FuseScrollbars className={classes.sidebarContent} enable={props.innerScroll}>
					{props.content}
				</FuseScrollbars>
			)}
		</>
	);
}

export default FusePageCardedSidebarContent;
