import { createState, useState } from "@hookstate/core";

export const authState = createState({
    user: {
        data: {
            displayName: 'Guest',
            photoURL: ''
        },
        role: ['admin', 'user']
    }
});

