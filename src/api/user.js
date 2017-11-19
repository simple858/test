const User = {
  loginByPhone: {
    url: '/user/login',
    type: 'GET'
  },
  signupByPhone: {
    url: '/user/register',
    type: 'GET'
  },
  logout: {
    url: '/user/logout',
    type: 'POST'
  },
  getPublicUserInfo: {
    url: '/user/userInfo',
    type: 'GET'
  },
  getPrivateUserInfo: {
    url: '/user/personalInfo',
    type: 'POST'
  }
}

export default User
