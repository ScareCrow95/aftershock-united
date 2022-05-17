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
  get scrollCSS() {
    return {
      '&::-webkit-scrollbar': {
        width: '4px',
        background: 'transparent',
      },
      '&::-webkit-scrollbar-track': {
        width: '6px',
        background: 'transparent',
      },
      '&::-webkit-scrollbar-thumb': {
        background: this.theme === 'dark' ? '#EC911D' : '#d6d6d6',
        borderRadius: '24px',
      },
    }
  }
}
