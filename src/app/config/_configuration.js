import { setNavigationConfigState, setNavbarConfgState } from '../store/configStore';

import navigationConfig from './navigationConfig';
import navbarConfig from './navbarConfig';

const ConfigInit = () => {

    if (navigationConfig) {
        setNavigationConfigState(navigationConfig);
    };
    if (navbarConfig) {
        setNavbarConfgState(navbarConfig);;
    }


    // React.useEffect(() => {
    //     if (navigationConfig) {
    //         setNavigationConfigState(navigationConfig);
    //     };
    //     if (navbarConfig) {
    //         setNavbarConfgState(navbarConfig);;
    //     }

    // }, []);

    return null;
}
export default ConfigInit;