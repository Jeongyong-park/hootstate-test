import { createMuiTheme } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const jeju1Theme = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            light: '#33678f',
            main: '#014274',
            dark: '#002e51'
        },
        secondary: {
            light: '#3dbc98',
            main: '#0dac7f',
            dark: '#097858',
            contrastText: '#fff'
        },
        background: {
            paper: '#FFFFFF',
            default: '#F0F7F7'
        },
        error: red
    },
    status: {
        danger: 'orange'
    },
    typography: {
        fontFamily: [
            '"Noto Sans Korean"',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Apple SD Gothic Neo"',
            '"Malgun Gothic"'
        ].join(','),
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 600,

        htmlFontSize: 10,
        body1: {
            fontSize: '1.4rem'
        },
        body2: {
            fontSize: '1.4rem'
        }
    }
});




const jeju2Theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            light: '#33678f',
            main: '#014274',
            dark: '#002e51'
        },
        secondary: {
            light: '#3dbc98',
            main: '#0dac7f',
            dark: '#097858',
            //contrastText: '#FFFFFF'
        },
        background: {
            //paper: '#424242',
            paper: '#1E1D1E',
            default: '#1E1D1E'
        },
        error: red
    },
    status: {
        danger: 'orange'
    },
    typography: {
        fontFamily: [
            '"Noto Sans Korean"',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Apple SD Gothic Neo"',
            '"Malgun Gothic"'
        ].join(','),
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 600,

        htmlFontSize: 10,
        body1: {
            fontSize: '1.4rem'
        },
        body2: {
            fontSize: '1.4rem'
        }
    }
});

export {
    jeju1Theme,
    jeju2Theme
};
