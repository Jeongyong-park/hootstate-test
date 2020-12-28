import _ from 'lodash';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import React from 'react';
import { navbarToggleFolded } from '../../store/navbarStore';
function NavbarFoldedToggleButton(props) {

    return (
        <IconButton
            className={props.className}
            onClick={() => {
                navbarToggleFolded();
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
