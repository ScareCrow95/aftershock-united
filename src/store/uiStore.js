import { makeAutoObservable } from 'mobx'
import { RootStore } from './rootStore'

export class UIStore {
  /**
   * @type {RootStore}
   */
  root = null
  counter = 0
  theme = 'dark'

  constructor(root) {
    makeAutoObservable(this)
    this.root = root
    this.counter = 0
  }

  hydrate(data) {
    if (data) {
      this.counter = data
    }
  }
}
