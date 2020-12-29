
import { useState } from '@hookstate/core';
import clsx from 'clsx';
import React from 'react';
import InnoNavigation from '../../../core/InnoNavigation/InnoNavigation';
import { navigationConfigState } from '../../store/configStore';

function Navigation(props) {

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
