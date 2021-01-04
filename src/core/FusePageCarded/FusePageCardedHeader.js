import { useTheme, ThemeProvider } from '@material-ui/core/styles';
//import { selectContrastMainTheme } from 'app/store/fuse/settingsSlice';
import React from 'react';
import { jeju1Theme } from '../../app/config/themeConfig';
//import { useSelector } from 'react-redux';

function FusePageCardedHeader(props) {
	const theme = useTheme();
	//const contrastTheme = useSelector(selectContrastMainTheme(theme.palette.primary.main));
	const contrastTheme = jeju1Theme;

	return (
		<div className={props.classes.header}>
			{props.header && <ThemeProvider theme={contrastTheme}>{props.header}</ThemeProvider>}
		</div>
	);
}

export default FusePageCardedHeader;
