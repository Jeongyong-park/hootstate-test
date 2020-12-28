import { createState, useState } from "@hookstate/core";

export const navbarState = createState({
    display: true,
    folded: false,
    position: 'left',
    folderOpen: false,
    mobileOpen: false
});

export const navbarOpenFold = () => {
    navbarState.set(e => ({ ...e, folderOpen: true }));
}

export const navbarCloseFold = () => {
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
export const navbarToggleFolded = () => {
    navbarState.set(e => ({ ...e, folded: !e.folded }));
}
