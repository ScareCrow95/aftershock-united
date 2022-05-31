import { makeAutoObservable } from 'mobx'
import { FeaturedUser, User } from './classes/User'
import { Blog } from './classes/Blog'
import { RootStore } from './rootStore'

export class HomeStore {
  /**
   * @type {[FeaturedUser]}
   */
  featuredUsers = []

  /**
   * @type {[User]}
   */
  liveStreamers = []

  /**
   * @type {[FeaturedUser]}
   */
  youtubers = []

  /**
   * @type {[Blog]}
   */
  trending = []

  /**
   * @type {[Blog]}
   */
  recent = []

  constructor() {
    makeAutoObservable(this)
  }

  hydrate(data) {
    this.featuredUsers = data.featuredUsers.map((x) => new User(x))
    this.trending = data.trending.map((x) => new Blog(x))
    this.recent = data.recent.map((x) => new Blog(x))
  }
}
