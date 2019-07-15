import Mock from 'mockjs'
import NotificationVo from '../src/vo/notification'
import { generateResponse } from './response'

const notifications = []

const random = now => Mock.mock({
  id: '@guid',
  date: +new Date(now ? Mock.Random.now(now) : Mock.Random.datetime()),
  uid: '',
  from: 'system',
  title: '@sentence',
  unread: Mock.Random.boolean(),
  deleted: false
})

for (let i = 0; i < 10; i++) {
  notifications.push(new NotificationVo(random()))
}

export default [
  {
    url: '/notification/list',
    type: 'post',
    response: () => {
      const date = ['year', 'month', 'week', 'day', 'hour', 'minute', 'second']
      date.forEach(d => {
        notifications.push(new NotificationVo(random(d)))
      })

      return generateResponse(2000, notifications.sort((a, b) => (a.date < b.date ? 1 : -1)))
    }
  },
  {
    url: '/notification/read',
    type: 'post',
    response: config => {
      const { ids } = config.body
      notifications.forEach((value, index) => {
        if (~ids.indexOf(value.id + '')) notifications[index].unread = false
      })
      return generateResponse(2000)
    }
  },
  {
    url: '/notification/allread',
    type: 'post',
    response: () => {
      notifications.forEach((v, i) => {
        notifications[i]['unread'] = false
      })

      return generateResponse(2000)
    }
  }
]
