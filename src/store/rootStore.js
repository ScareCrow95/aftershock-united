import { makeAutoObservable } from 'mobx'
import { _gems } from '../constants/data/_gems'
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
  gems = {}
  constructor() {
    makeAutoObservable(this)
    this.uiStore = new UIStore(this)
    this.homeStore = new HomeStore(this)
    _gems.map((x) => {
      this.gems[x.id] = x
    })
  }

  hydrate(data) {
    data.homeStore && this.homeStore.hydrate(data.homeStore)
  }
}
