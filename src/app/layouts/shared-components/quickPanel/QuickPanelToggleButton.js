import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import React from 'react';
// import { useRecoilState } from 'recoil';
// import { QuickPanelState } from './store/QuickPanelState';

function QuickPanelToggleButton(props) {
    //const [quickPanelState, setQuickPanelState] = useRecoilState(QuickPanelState);
    return (
        <IconButton className="w-40 h-40" onClick={ev => {
            // setQuickPanelState(!quickPanelState)
        }
        }>
            {props.children}
        </IconButton>
    );
}

QuickPanelToggleButton.defaultProps = {
    children: <Icon>bookmarks</Icon>
};

export default QuickPanelToggleButton;
