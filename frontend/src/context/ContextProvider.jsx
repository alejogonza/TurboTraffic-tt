import { createContext, useContext, useState } from 'react'

export const Context = createContext()

export const ContextProvider = ({ children }) => {
  const store = {
    user: localStorage.getItem('user') ?? null
  }
  const [contextStore, setContextStore] = useState(store)
  const controlStore = { contextStore, setContextStore }
  return <Context.Provider value={controlStore}>{children}</Context.Provider>
}

export const useStoreContext = () => {
  const context = useContext(Context)
  return context
}
