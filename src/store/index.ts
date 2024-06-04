import { create } from 'zustand'

interface User {
  id: string
  username: string
  phone?: string
  email: string
  avatar?: string
  password_strength: number
}

interface IStore {
  themeDark: boolean
  setThemeDark: (dark: boolean) => void
  user: User | null
  setUser: (user: User) => void
  clearUser: () => void
}

const LOCALSTORAGE_KEY_USER = 'user'
const LOCALSTORAGE_KEY_THEME = 'theme'
const THEME_LIGHT = 'light'
const THEME_DARK = 'dark'
const THEME_DEFAULT = THEME_LIGHT

export const useStore = create<IStore>((set) => ({
  themeDark: (() => {
    const theme = localStorage.getItem(LOCALSTORAGE_KEY_THEME) || THEME_DEFAULT
    const dark = theme === THEME_DARK
    document.documentElement.setAttribute(LOCALSTORAGE_KEY_THEME, theme)
    return dark
  })(),
  setThemeDark: (dark: boolean) => {
    set((state) => ({ ...state, themeDark: dark }))
    document.documentElement.setAttribute(LOCALSTORAGE_KEY_THEME, dark ? THEME_DARK : THEME_LIGHT)
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

  if (state?.themeDark) {
    localStorage.setItem(LOCALSTORAGE_KEY_THEME, THEME_DARK)
  } else {
    localStorage.setItem(LOCALSTORAGE_KEY_THEME, THEME_LIGHT)
  }
})
