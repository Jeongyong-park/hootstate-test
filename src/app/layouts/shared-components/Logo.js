import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React from 'react';
import jeju_ci_type2 from '../../resource/jeju_ci_w.svg';
const useStyles = makeStyles(theme => ({
    root: {
        '& .logo-icon': {
            width: 50,
            height: 24,
            transition: theme.transitions.create(['width', 'height'], {
                duration: theme.transitions.duration.shortest,
                easing: theme.transitions.easing.easeInOut
            })
        },
        '& .react-badge, & .logo-text': {
            transition: theme.transitions.create('opacity', {
                duration: theme.transitions.duration.shortest,
                easing: theme.transitions.easing.easeInOut
            })
        }
    },
    reactBadge: {
        backgroundColor: '#121212',
        color: '#61DAFB'
    }
}));

function Logo() {
    const classes = useStyles();

    return (
        <div className={clsx(classes.root, 'flex items-center')}>
            <img className="logo-icon" src={jeju_ci_type2} alt="logo" />
            <Typography className="text-16 mx-12 font-light logo-text" color="inherit">
                제주특별자치도
			</Typography>
        </div>
    );
}

export default Logo;
