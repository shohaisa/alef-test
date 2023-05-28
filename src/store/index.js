import { defineStore } from "pinia";

export const useStore = defineStore({
    id: 'user',
    state: () => ({
            user: null
    }),
    getters: {
        getUser(state) {
            return state.user
        }
    },
    actions: {
        setUser(payload) {
            console.log(payload)
            this.user = payload
        }
    }
})