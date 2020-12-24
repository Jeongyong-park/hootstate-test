
import clsx from 'clsx';
import React from 'react';
//import { useSelector } from 'react-redux';
//import { selectNavigation } from 'app/store/fuse/navigationSlice';
import InnoNavigation from '../../../core/InnoNavigation';

function Navigation(props) {
    //const navigation = useSelector(selectNavigation);
    const navigation = null;
    return (
        <InnoNavigation
            className={clsx('navigation', props.className)}
            navigation={navigation}
            layout={props.layout}
            dense={props.dense}
            active={props.active}
        />
    );
}

Navigation.defaultProps = {
    layout: 'vertical'
};

export default React.memo(Navigation);
