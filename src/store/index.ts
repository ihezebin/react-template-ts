import { create } from 'zustand'

interface User {
  id?: string
  username?: string
  nick?: string
  email?: string
  avatar?: string
}

interface IStore {
  user: User | null
  setUser: (user: User) => void
  clearUser: () => void
}

const LOCALSTORAGE_KEY_USER = 'user'

export const useStore = create<IStore>((set) => ({
  user: JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY_USER) || 'null'),
  setUser: (user) => {
    set((state) => ({ ...state, user: { ...state.user, ...user } }))
  },
  clearUser: () => set((state) => ({ ...state, user: null })),
}))

export const unsubscribeStore = useStore.subscribe((state: IStore) => {
  if (!state?.user) {
    localStorage.removeItem(LOCALSTORAGE_KEY_USER)
  } else {
    localStorage.setItem(LOCALSTORAGE_KEY_USER, JSON.stringify(state.user))
  }
})
