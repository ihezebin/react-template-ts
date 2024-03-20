import { create } from 'zustand'

interface User {
  id?: string
  username?: string
  nick?: string
  email?: string
  avatar?: string
}

interface IStore {
  theme: string
  setThemeDark: () => void
  setThemeLight: () => void
  user: User | null
  setUser: (user: User) => void
  clearUser: () => void
}

const LOCALSTORAGE_KEY_USER = 'user'
const LOCALSTORAGE_KEY_THEME = 'theme'

export const useStore = create<IStore>((set) => ({
  theme: (() => {
    const theme = localStorage.getItem(LOCALSTORAGE_KEY_THEME) || ''
    document.documentElement.setAttribute(LOCALSTORAGE_KEY_THEME, theme)
    return theme
  })(),
  setThemeDark: () => {
    const theme = 'dark'
    set((state) => ({ ...state, theme: theme }))
    document.documentElement.setAttribute(LOCALSTORAGE_KEY_THEME, theme)
  },
  setThemeLight: () => {
    const theme = 'light'
    set((state) => ({ ...state, theme: theme }))
    document.documentElement.setAttribute(LOCALSTORAGE_KEY_THEME, theme)
  },
  user: JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY_USER) || 'null'),
  setUser: (user) => {
    set((state) => ({ ...state, user: { ...state.user, ...user } }))
  },
  clearUser: () => set((state) => ({ ...state, user: null })),
}))

export const unsubscribeStore = useStore.subscribe((state: IStore) => {
  if (!state?.user) {
    localStorage.removeItem(LOCALSTORAGE_KEY_USER)
  } else if (state?.user) {
    localStorage.setItem(LOCALSTORAGE_KEY_USER, JSON.stringify(state.user))
  }

  if (!state?.theme) {
    localStorage.removeItem(LOCALSTORAGE_KEY_THEME)
  } else if (state?.theme) {
    localStorage.setItem(LOCALSTORAGE_KEY_THEME, state.theme)
  }
})
