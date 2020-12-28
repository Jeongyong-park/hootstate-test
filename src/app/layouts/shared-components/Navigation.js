
import { useState } from '@hookstate/core';
import clsx from 'clsx';
import React, { useEffect } from 'react';
//import { useSelector } from 'react-redux';
//import { selectNavigation } from 'app/store/fuse/navigationSlice';
import InnoNavigation from '../../../core/InnoNavigation/InnoNavigation';
import { navigationConfigState } from '../../store/navigationStore';

function Navigation(props) {
    //const navigation = useSelector(selectNavigation);
    const [navigation, setNavigation] = React.useState({});
    const navigationConfig = useState(navigationConfigState);




    return <InnoNavigation
        className={clsx('navigation', props.className)}
        navigation={navigationConfig.get()}
        layout={props.layout}
        dense={props.dense}
        active={props.active}
    />;
}

Navigation.defaultProps = {
    layout: 'vertical'
};

export default React.memo(Navigation);
