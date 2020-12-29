import { createState } from "@hookstate/core";

export const navbarState = createState({

    folderOpen: false,
    mobileOpen: false
});

export const navbarOpenFold = () => {
    //console.log('navbarOpenFold()');
    navbarState.set(e => ({ ...e, folderOpen: true }));
}

export const navbarCloseFold = () => {
    //console.log('navbarCloseFold()');
    navbarState.set(e => ({ ...e, folderOpen: false }));
}
export const navbarToggleFold = () => {
    navbarState.set(e => ({ ...e, folderOpen: !e.folderOpen }));
}

export const navbarOpenMobile = () => {
    navbarState.set(e => ({ ...e, mobileOpen: false }));
}

export const navbarCloseMobile = () => {
    navbarState.set(e => ({ ...e, mobileOpen: false }));
}

export const navbarToggleMobile = () => {
    navbarState.set(e => ({ ...e, mobileOpen: !e.mobileOpen }));
}


