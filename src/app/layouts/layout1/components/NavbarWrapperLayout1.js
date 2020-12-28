import React, { useEffect } from 'react';
import { Drawer, Hidden, makeStyles, ThemeProvider } from "@material-ui/core";


import { jeju2Theme } from '../../../config/themeConfig'
import NavbarLayout1 from './NavbarLayout1';
import { createState, useState } from '@hookstate/core';
import clsx from 'clsx';
import { navbarState, navbarOpenFold, navbarCloseFold, navbarCloseMobile } from '../../../store/navbarStore';
import NavbarMobileToggleFab from '../../shared-components/NavbarMobileToggleFab';

function NavbarWrapperLayout1(props) {
    const config = {
        mode: 'fullwidth',
        scroll: 'content',
        navbar: {
            display: true,
            folded: false,
            position: 'left'
        },
        toolbar: {
            display: true,
            style: 'fixed',
            position: 'below'
        },
        footer: {
            display: false,
            style: 'fixed',
            position: 'below'
        },
        leftSidePanel: {
            display: true
        },
        rightSidePanel: {
            display: true
        }
    }
    const navbar = useState(navbarState)
    const classes = useStyles();
    const navbarTheme = jeju2Theme;
    const [folded, setFolded] = React.useState(navbar.folded.get());
    const [foldedAndClosed, setFoldedAndClosed] = React.useState(folded && !navbar.folderOpen.get());
    const [foldedAndOpened, setFoldedAndOpend] = React.useState(folded && navbar.folderOpen.get());

    React.useEffect(() => {
        console.group("navbar");
        console.log(`folderOpen: ${navbar.folderOpen.get()}`);
        console.log(`mobileOpen: ${navbar.mobileOpen.get()}`);
        console.log(`folded: ${navbar.folded.get()}`);
        console.groupEnd();
        console.group("foldedAndOpen & Closed");
        console.log(`foldedAndOpened: ${foldedAndOpened}`);
        console.log(`foldedAndClosed: ${foldedAndClosed}`);
        console.groupEnd();
        const folded = navbar.folded.get();
        setFolded(folded);
        setFoldedAndClosed(folded && !navbar.folderOpen.get());
        setFoldedAndOpend(folded && navbar.folderOpen.get());
    }, [navbar]);

    return (
        <>
            <ThemeProvider theme={navbarTheme}>
                <div id="fuse-navbar" className={clsx(classes.wrapper, folded && classes.wrapperFolded)}>
                    <Hidden mdDown>
                        <div
                            className={clsx(
                                classes.navbar,
                                classes['left'],
                                navbar.folded.get() && classes.folded,
                                foldedAndOpened && classes.foldedAndOpened,
                                foldedAndClosed && classes.foldedAndClosed
                            )}
                            onMouseEnter={() => { foldedAndClosed && navbarOpenFold() }}
                            onMouseLeave={() => foldedAndOpened && navbarCloseFold()}
                            style={{ backgroundColor: navbarTheme.palette.background.default }}
                        >
                            <NavbarLayout1 className={classes.navbarContent} />
                        </div>
                    </Hidden>

                    <Hidden lgUp>
                        <Drawer
                            anchor={'left'}
                            variant="temporary"
                            open={navbar.mobileOpen.get()}
                            classes={
                                clsx(classes.navbar, classes['left'],)
                            }
                            onClose={() => { navbarCloseMobile() }}
                            ModalProps={{
                                keepMounted: true // Better open performance on mobile.
                            }}
                            style={{ backgroundColor: navbarTheme.palette.background.default }}
                        >
                            <NavbarLayout1 className={classes.navbarContent} />
                        </Drawer>
                    </Hidden>
                </div>
            </ThemeProvider>

            {config.navbar.display && !config.toolbar.display && (
                <Hidden lgUp>
                    <NavbarMobileToggleFab />
                </Hidden>
            )}

        </>);
}

export default React.memo(NavbarWrapperLayout1);


const navbarWidth = 280;

const useStyles = makeStyles(theme => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        zIndex: 4,
        [theme.breakpoints.up('lg')]: {
            width: navbarWidth,
            minWidth: navbarWidth
        }
    },
    wrapperFolded: {
        [theme.breakpoints.up('lg')]: {
            width: 64,
            minWidth: 64
        }
    },
    navbar: {
        display: 'flex',
        overflow: 'hidden',
        flexDirection: 'column',
        flex: '1 1 auto',
        width: navbarWidth,
        minWidth: navbarWidth,
        height: '100%',
        zIndex: 4,
        transition: theme.transitions.create(['width', 'min-width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.shorter
        }),
        boxShadow: theme.shadows[3]
    },
    left: {
        left: 0
    },
    right: {
        right: 0
    },
    folded: {
        position: 'absolute',
        width: 64,
        minWidth: 64,
        top: 0,
        bottom: 0
    },
    foldedAndOpened: {
        width: navbarWidth,
        minWidth: navbarWidth
    },
    navbarContent: {
        flex: '1 1 auto'
    },
    foldedAndClosed: {
        '& $navbarContent': {
            '& .logo-icon': {
                width: 32,
                height: 32
            },
            '& .logo-text': {
                opacity: 0
            },
            '& .react-badge': {
                opacity: 0
            },
            '& .list-item-text, & .arrow-icon, & .item-badge': {
                opacity: 0
            },
            '& .list-subheader .list-subheader-text': {
                opacity: 0
            },
            '& .list-subheader:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                minWidth: 16,
                borderTop: '2px solid',
                opacity: 0.2
            },
            '& .collapse-children': {
                display: 'none'
            },
            '& .user': {
                '& .username, & .email': {
                    opacity: 0
                },
                '& .avatar': {
                    width: 40,
                    height: 40,
                    top: 32,
                    padding: 0
                }
            },
            '& .list-item.active': {
                marginLeft: 12,
                width: 40,
                padding: 12,
                borderRadius: 20,
                '&.square': {
                    borderRadius: 0,
                    marginLeft: 0,
                    paddingLeft: 24,
                    width: '100%'
                }
            }
        }
    }
}));