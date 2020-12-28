import { useState } from '@hookstate/core';
import React from 'react';
import { navigationConfigState, setNavigationConfigState } from '../store/navigationStore';
import navigationConfig from './navigationConfig';

const ConfigInit = (props) => {

    React.useEffect(() => {
        if (navigationConfig) {
            const config = navigationConfig;
            setNavigationConfigState(config);
        };

    }, [navigationConfig]);
    
    return null;
}
export default ConfigInit;