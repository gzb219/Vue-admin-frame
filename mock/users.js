/*
 * User base information.
 * Mock and store user basic property information.
 * 用户基本信息表，模拟和存储用户基本属性信息。
 */

import Mock from 'mockjs'
import { parseURL } from '../src/tools/urls'
import { generateResponse } from './response'

const Random = Mock.Random
const userList = []
const avatars = Random.range(1, 21)
const posts = ['总经理', '人事经理', '开发组长', '项目经理', '产品经理', '设计主管', '架构师', '财务经理']
const roles = ['SuperAdmin', 'AccessManager', 'UserManager', 'ProManager', 'Auditor', 'Editor', 'Visitor']

function randomAvatar() {
  const index = Math.floor(Math.random() * avatars.length)
  const path = `/static/images/avatars/${avatars[index]}.gif`

  avatars.splice(index, 1)
  return path
}

function generateUser() {
  const now = Date.now()
  const birthday = Random.date()
  const age = (now - birthday) / 1000 / 60 / 60 / 24 / 365
  const { role } = Mock.mock({
    'role|+1': roles
  })

  return Mock.mock({
    id: '@increment(10)',
    username: '@first',
    name: '@name',
    'sex|1': [0, 1], // 0: female, 1: male
    nickname: '@first',
    avatar: randomAvatar(),
    roles: [role],
    'post|+1': posts,
    token: '@guid',
    introduction: '@cparagraph(2)',
    phone: `1${Random.string('number', 10)}`,
    address: '@city(true)',
    zip: '@string("number", 6)',
    domicile: '@city(true)',
    'politics|1': ['党员', '团员', '群众'],
    IDCard: '@id',
    birthday,
    age,
    'height|150-190': 180,
    'weight|90-150': 150,
    creatime: new Date(),
    updatime: new Date()
  })
}

for (let i = 0; i < 10; i++) {
  userList.push(generateUser())
}

export default [
  {
    url: '/account/login',
    type: 'post',
    response: config => {
      const { username } = config.body
      const user = userList.find(v => v.username === username ? v : null)

      if (!user) {
        return generateResponse(4000)
      }

      return generateResponse(2000, user.token)
    }
  },
  {
    url: '/account/info',
    type: 'get',
    response: config => {
      const { token } = parseURL(config.url)
      const account = userList.find(v => v.token === token ? v : null)

      if (!account) {
        return generateResponse(4001)
      }

      return generateResponse(2000, account)
    }
  },
  {
    url: '/account/logout',
    type: 'post',
    response: () => {
      return generateResponse(2000)
    }
  },
  {
    url: '/account/mocks',
    type: 'get',
    response: () => {
      return generateResponse(2000, userList)
    }
  }
]
