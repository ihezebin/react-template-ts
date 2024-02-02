import { create } from 'zustand'

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

const localStorageKey = 'user'

export const useStore = create<Store>((set) => ({
  user: JSON.parse(localStorage.getItem(localStorageKey) || 'null'),
  setUser: (user: User) => set((state) => ({ user: { ...state.user, ...user } })),
  clearUser: () => set(() => ({ user: null })),
}))

export const unsubscribeStore = useStore.subscribe((state: Store) => {
  if (!state?.user) {
    localStorage.removeItem(localStorageKey)
  } else {
    localStorage.setItem(localStorageKey, JSON.stringify(state.user))
  }
})
