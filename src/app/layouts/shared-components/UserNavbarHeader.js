import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import jeju_ci_type2 from '../../resource/ci4_1_w.svg';
const useStyles = makeStyles(theme => ({
    root: {
        '&.user': {
            '& .username, & .email': {
                transition: theme.transitions.create('opacity', {
                    duration: theme.transitions.duration.shortest,
                    easing: theme.transitions.easing.easeInOut
                })
            }
        }
    },
    image: {
        width: 32,
        height: 32
    },
    avatar: {
        width: 72,
        height: 72,
        position: 'absolute',
        top: 92,
        padding: 8,
        background: theme.palette.background.default,
        boxSizing: 'content-box',
        left: '50%',
        transform: 'translateX(-50%)',
        transition: theme.transitions.create('all', {
            duration: theme.transitions.duration.shortest,
            easing: theme.transitions.easing.easeInOut
        }),
        '& > img': {
            borderRadius: '50%'
        }
    }
}));

function UserNavbarHeader(props) {
    const classes = useStyles();

    return (
        <AppBar
            position="static"
            color="primary"
            elevation={0}
            classes={{ root: classes.root }}
            className="user relative flex flex-col items-center justify-center pt-24 pb-32 mb-32 z-0"
        >
            <img className="logo-icon" src={jeju_ci_type2} alt="logo" style={{ height: 32, margin: 8 }} />

            <Typography className="username text-16 whitespace-no-wrap" color="inherit">
                드론영상 AI 분석 시스템
			</Typography>
        </AppBar>
    );
}

export default UserNavbarHeader;
