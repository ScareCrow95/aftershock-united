import { makeAutoObservable } from 'mobx'
import { User } from './User'

export class Blog {
  _id = ''
  title = ''
  subtitle = ''
  createdOn = 0
  /**
   * @type {User}
   */
  createdBy = null
  description = ''
  views = 0
  /**
   * @type {Array<BlogContent>}
   */
  content = []
  constructor(data) {
    makeAutoObservable(this)
    this._id = data?._id
    this.title = data?.title
    this.subtitle = data?.subtitle
    this.createdOn = data?.createdOn
    this.createdBy = data?.user
    this.views = data?.views
    this.content = data?.content?.map((x) => new BlogContent(x))
  }
}

export class BlogContent {
  /**
   * @type {('text'|'youtube'|'video'|'image')}
   */
  type = ''
  value = ''
  url = ''
  constructor(data) {
    this.type = data?.type
    this.value = data?.value
    this.url = data?.url
  }
}
