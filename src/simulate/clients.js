/**
 * clients (Create by ggboom)
 * @author: ggboom
 * @datetime: 2018/7/27 12:20
 */

import Mock from 'mockjs'
import { paramToObj } from '@/utilities'

const List = []
const count = 150

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    status: Math.floor(Math.random() * 4),
    date: +Mock.Random.date('T'),
    name: {
      first: '@cfirst',
      last: '@clast'
    },
    phone: '189****7716',
    region: '@region',
    address: {
      city: Mock.Random.city(true)
    },
    zip: Mock.Random.zip()
  }))
}

export default {
  list: config => {
    const { current = 1, limit = 8, keyword } = paramToObj(config.body)

    const mockList = List.filter(item => {
      return !(keyword && item.name !== keyword && item.phone !== keyword)
    })

    const pageList = mockList.filter(
      (item, index) => index < limit * current && index >= limit * (current - 1)
    )

    return {
      page: {
        current: current,
        limit: limit,
        total: mockList.length,
        prev: current > 1,
        next: (current + 1) < (mockList.length / limit)
      },
      data: pageList
    }
  }
}