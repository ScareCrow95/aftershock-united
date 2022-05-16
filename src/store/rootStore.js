import { makeAutoObservable } from 'mobx'
import { UIStore } from './uiStore'

export class RootStore {
  uiStore = null

  constructor() {
    makeAutoObservable(this)
    this.uiStore = new UIStore(this)
  }

  hydrate(data) {
    if (data.ui) {
      this.uiStore.hydrate(data.ui)
    }
  }
}
