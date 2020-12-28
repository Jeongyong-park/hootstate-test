import { Toolbar, Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import clsx from 'clsx';
import React from 'react';
import NavbarMobileToggleButton from '../../shared-components/NavbarMobileToggleButton';

import { jeju2Theme } from '../../../config/themeConfig';
import FullScreenToggle from '../../shared-components/FullScreenToggle';
import QuickPanelToggleButton from '../../shared-components/quickPanel/QuickPanelToggleButton';
import UserMenu from '../../shared-components/UserMenu';
const useStyles = makeStyles(theme => ({
    root: {}
}));

function ToolbarLayout1(props) {

    const config = {
        navbar: {
            display: true,
            position: 'left'
        }
    };

    const toolbarTheme = jeju2Theme;
    const classes = useStyles(props);

    return (
        <ThemeProvider theme={toolbarTheme}>
            <AppBar
                id="fuse-toolbar"
                className={clsx(classes.root, 'flex relative z-10')}
                color="default"
                style={{ backgroundColor: toolbarTheme.palette.background.paper }}
                elevation={2}
            >
                <Toolbar className="p-0 min-h-48 md:min-h-64">
                    {config.navbar.display && config.navbar.position === 'left' && (
                        <Hidden lgUp>
                            <NavbarMobileToggleButton className="w-40 h-40 p-0 mx-0 sm:mx-8" />
                        </Hidden>
                    )}
                    <Typography>테스트123123</Typography>
                    <div className="flex flex-1">
                        {/* <Hidden mdDown>
                            <FuseShortcuts className="px-16" />
                        </Hidden> */}
                    </div>

                    <div className="flex items-center px-16">
                        {/*<LanguageSwitcher />*/}

                        <FullScreenToggle />

                        {/*<FuseSearch />*/}

                        <QuickPanelToggleButton />

                        <UserMenu />
                    </div>

                    {/* {config.navbar.display && config.navbar.position === 'right' && (
                    <Hidden lgUp>
                        <NavbarMobileToggleButton />
                    </Hidden>
                )} */}
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}

export default React.memo(ToolbarLayout1);
