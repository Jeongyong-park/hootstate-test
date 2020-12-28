import React from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NavbarWrapperLayout1 from './components/NavbarWrapperLayout1';
import LayoutStyle1 from './LayoutStyle1';
import { useState } from '@hookstate/core';
import { navbarOpenFold, navbarCloseFold, navbarState } from '../../store/navbarStore';
import ToolbarLayout1 from './components/ToolbarLayout1';
import FuseScrollbars from '../../../core/FuseScrollbars';
import { makeStyles } from '@material-ui/core';

function Layout1(props) {
    //const classes = LayoutStyle1();
    const classes = useStyles();
    const navbar = useState(navbarState);
    const config = {
        mode: 'fullwidth',
        scroll: 'content',
        leftSidePanel: {
            display: true
        },
        toolbar: {
            display: true,
            style: 'fixed',
            position: 'below'
        },
        navbar: {
            display: true,
            position: 'left'
        },
        leftSidePanel: {
            display: true
        },
        rightSidePanel: {
            display: true
        }
    }
    return <div id="fuse-layout" className={clsx(classes.root, config.mode, `scroll-${config.scroll}`)}>
        {/* {config.leftSidePanel.display && <LeftSideLayout1 />} */}

        <div className="flex flex-1 flex-col overflow-hidden relative">
            {config.toolbar.display &&
                config.toolbar.style === 'fixed' &&
                config.toolbar.position === 'above' && <ToolbarLayout1 />}

            {/* <FuseScrollbars className="overflow-auto" scrollToTopOnRouteChange> */}
            {config.toolbar.display &&
                config.toolbar.style !== 'fixed' &&
                config.toolbar.position === 'above' && <ToolbarLayout1 />}

            <div className={classes.wrapper}>
                {config.navbar.display && config.navbar.position === 'left' && <NavbarWrapperLayout1 />}

                <div className={classes.contentWrapper}>
                    {config.toolbar.display && config.toolbar.position === 'below' && (
                        <ToolbarLayout1 />
                    )}

                    <div className={classes.content}>
                        {/* <FuseDialog /> */}

                        {/* <FuseSuspense>{renderRoutes(routes)}</FuseSuspense> */}

                        {props.children}
                    </div>

                    {/* {config.footer.display && config.footer.position === 'below' && <FooterLayout1 />} */}

                    {/* <SettingsPanel /> */}
                </div>

                {config.navbar.display && config.navbar.position === 'right' && (
                    <NavbarWrapperLayout1 />
                )}
            </div>

            {/* {config.footer.display &&
                    config.footer.style !== 'fixed' &&
                    config.footer.position === 'above' && <FooterLayout1 />} */}
            {/* </FuseScrollbars> */}

            {/* {config.footer.display &&
                config.footer.style === 'fixed' &&
                config.footer.position === 'above' && <FooterLayout1 />} */}
        </div>

        {/* {config.rightSidePanel.display && <RightSideLayout1 />}

        <FuseMessage /> */}
    </div>
}
export default React.memo(Layout1);

const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        '&.boxed': {
            maxWidth: 1280,
            margin: '0 auto',
            boxShadow: theme.shadows[3]
        },
        '&.scroll-body': {
            '& $wrapper': {
                height: 'auto',
                flex: '0 0 auto',
                overflow: 'auto'
            },
            '& $contentWrapper': {},
            '& $content': {}
        },
        '&.scroll-content': {
            '& $wrapper': {},
            '& $contentWrapper': {},
            '& $content': {}
        },
        '& .navigation': {
            '& .list-subheader-text, & .list-item-text, & .item-badge, & .arrow-icon': {
                transition: theme.transitions.create('opacity', {
                    duration: theme.transitions.duration.shortest,
                    easing: theme.transitions.easing.easeInOut
                })
            }
        }
    },
    wrapper: {
        display: 'flex',
        position: 'relative',
        width: '100%',
        height: '100%',
        flex: '1 1 auto'
    },
    contentWrapper: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        zIndex: 3,
        overflow: 'hidden',
        flex: '1 1 auto'
    },
    content: {
        position: 'relative',
        display: 'flex',
        overflow: 'auto',
        flex: '1 1 auto',
        flexDirection: 'column',
        width: '100%',
        '-webkit-overflow-scrolling': 'touch',
        zIndex: 2
    }
}));
