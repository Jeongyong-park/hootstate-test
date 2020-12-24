import _ from 'lodash';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import React from 'react';
//import { useDispatch, useSelector } from 'react-redux';
//import { setDefaultSettings } from 'app/store/fuse/settingsSlice';
import { navbarToggleFolded } from '../../store/navbarStore';
function NavbarFoldedToggleButton(props) {
    // const dispatch = useDispatch();
    // const settings = useSelector(({ fuse }) => fuse.settings.current);

    return (
        <IconButton
            className={props.className}
            onClick={() => {

                navbarToggleFolded();
                //setDefaultSettings(_.set({}, 'layout.config.navbar.folded', !settings.layout.config.navbar.folded))

            }}
            color="inherit"

        >
            {props.children}
        </IconButton>
    );
}

NavbarFoldedToggleButton.defaultProps = {
    children: <Icon style={{ fontSize: '2.4rem' }}>menu</Icon>
};

export default NavbarFoldedToggleButton;
