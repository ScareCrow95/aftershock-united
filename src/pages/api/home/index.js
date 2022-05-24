import { _homeData } from '../../../constants/data/_home'

export default async function handler(req, res) {
  res.status(200).json(_homeData)
}
