import { makeAutoObservable, makeObservable, observable } from 'mobx'
export class Social {
  discord = null
  insta = null
  twitch = null
  facebook = null
  youtube = null
  twitter = null
  constructor(data) {
    makeAutoObservable(this)
    this.discord = data?.discord
    this.twitch = data?.twitch
    this.youtube = data?.youtube
    this.facebook = data?.facebook
    this.insta = data?.insta
    this.twitter = data?.twitter
  }
}

export class User {
  _id = ''
  name = ''
  avatar = ''
  rank = 0
  country = ''
  main = ''
  /**
   * @type {Social}
   */
  social = null
  active = false
  about = ''

  constructor(data) {
    makeAutoObservable(this)
    this.social = new Social(data?.social)
    this._id = data?._id
    this.name = data?.name
    this.avatar = data?.avatar
    this.active = data?.active
    this.rank = data?.rank
    this.main = data?.main
    this.country = data?.country
    this.about = data?.about
  }
}
