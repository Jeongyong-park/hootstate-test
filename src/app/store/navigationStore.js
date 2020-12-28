import { createState } from "@hookstate/core";

export const navigationConfigState = createState([]);

export const setNavigationConfigState = (obj) => {
    navigationConfigState.set(() => obj)
}