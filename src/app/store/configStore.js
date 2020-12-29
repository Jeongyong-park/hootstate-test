import { createState } from "@hookstate/core";

export const navigationConfigState = createState([]);
export const navbarConfigState = createState({});

export const setNavigationConfigState = (obj) => {
    navigationConfigState.set(() => obj)
}

export const setNavbarConfgState = (obj) => {
    navbarConfigState.set(() => obj)
}

export const navbarToggleFolded = () => {
    navbarConfigState.set(e => ({ ...e, navbar: { ...e.navbar, folded: !e.navbar.folded } }));
}
