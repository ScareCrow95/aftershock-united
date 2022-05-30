import { makeAutoObservable, observable } from 'mobx'
import { ClassIcons } from '../assets/img/classIcon/classAssets'
import { RootStore } from './rootStore'

export class UIStore {
  /**
   * @type {RootStore}
   */
  root = null
  counter = 0
  theme = 'dark'
  selectedGem = 'berserker'
  isMobile = false
  showGem = false
  /**
   * @type {{x:number,y:number,width:number,height:number,id:string}}
   */
  popover = null
  /**
   * @type {Set<string>}
   */
  filterClasses = new observable.set()
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

  setPopover = (e, id, type, offsetX = 0, offsetY = 0) => {
    this.popover = e.target.getBoundingClientRect()
    this.popover.y += offsetY
    this.popover.x += offsetX
    this.popover.id = id
    this.popover.type = type
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
