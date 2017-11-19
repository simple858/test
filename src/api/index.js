import Page from './page'
import Project from './project'
import User from './user'
import Search from './search'
import client from '../utils/client'

const apiFactory = {
  ...Page,
  ...Project,
  ...User,
  ...Search
}

export default (requestName, params = {}, data = {}) => client({
  url: apiFactory[requestName].url,
  method: apiFactory[requestName].type,
  params: params
})
