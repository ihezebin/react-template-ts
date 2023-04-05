import {create} from 'zustand'

interface User {
    id?: string
    username?: string
    nick?: string
    email?: string
    avatar?: string
}

type Store = {
    user: User | null
    setUser: (user: User) => void
    clearUser: () => void
}

const localStorageKey = "user"

const useStore = create<Store>(set => ({
        user: JSON.parse(localStorage.getItem(localStorageKey) || 'null'),
        setUser: (user:User) => set((state) => ({user:{...state.user, ...user}})),
        clearUser: () => set(() => ({user:null})),
    }))


useStore.subscribe((state:Store) => {
    if (state.user) {
        localStorage.removeItem(localStorageKey)
    }
    localStorage.setItem(localStorageKey, JSON.stringify(state.user))
})

export default useStore