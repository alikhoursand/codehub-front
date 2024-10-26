import { defineStore } from 'pinia';

export const cartStore = defineStore('cart', {
    state: () => ({
        count: 0,
    }),
})