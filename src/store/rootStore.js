import { makeAutoObservable } from 'mobx'
import { HomeStore } from './homeStore'
import { UIStore } from './uiStore'

export class RootStore {
  /**
   * @type {UIStore}
   */
  uiStore = null
  /**
   * @type {HomeStore}
   */
  homeStore = null

  constructor() {
    makeAutoObservable(this)
    this.uiStore = new UIStore(this)
    this.homeStore = new HomeStore(this)
  }

  hydrate(data) {
    data.homeStore && this.homeStore.hydrate(data.homeStore)
  }
}
