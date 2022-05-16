import { enableStaticRendering } from 'mobx-react-lite'
import React, { createContext, useContext } from 'react'
import { RootStore } from '../store/rootStore'
import { UIStore } from '../store/uiStore'

enableStaticRendering(typeof window === 'undefined')

let store
const StoreContext = createContext(undefined)
StoreContext.displayName = 'StoreContext'

/**
 *
 * @returns {RootStore}
 */
export function useRootStore() {
  const context = useContext(StoreContext)
  if (context === undefined) {
    throw new Error('useRootStore must be used within RootStoreProvider')
  }
  return context
}
/**
 *
 * @returns {UIStore}
 */
export function useUIStore() {
  const { uiStore } = useRootStore()
  return uiStore
}

export function RootStoreProvider({ children, hydrationData }) {
  const store = initializeStore(hydrationData)
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

function initializeStore(initialData) {
  const _store = store ?? new RootStore()

  if (initialData) {
    _store.hydrate(initialData)
  }
  if (typeof window === 'undefined') return _store
  if (!store) store = _store
  return _store
}
