import { create } from 'zustand'

interface IUser {
  id?: string
  username?: string
  nick?: string
  email?: string
  avatar?: string
}

interface IStore {
  user: IUser | null
  setUser: (user: IUser) => void
  clearUser: () => void
}

const localStorageKey = 'user'

export const useStore = create<IStore>((set) => ({
  user: JSON.parse(localStorage.getItem(localStorageKey) || 'null'),
  setUser: (user) => {
    set((state) => ({ user: { ...state.user, ...user } }))
  },
  clearUser: () => set(() => ({ user: null })),
}))

export const unsubscribeStore = useStore.subscribe((state: IStore) => {
  if (!state?.user) {
    localStorage.removeItem(localStorageKey)
  } else {
    localStorage.setItem(localStorageKey, JSON.stringify(state.user))
  }
})
