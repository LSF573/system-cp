import Mock from 'mockjs'
import login from './mock/login'
import dashboard from './mock/dashboard'
import user from './mock/user'

Mock.mock(/dashboard/, 'get', dashboard)
Mock.mock('/login', 'post', login)
Mock.mock('/user', 'get', user)
