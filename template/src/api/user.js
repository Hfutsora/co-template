import request from '@/utils/request'

export function login (parameters) {
  return request({
    url: '/system/login',
    method: 'post',
    data: parameters.body
  })
}
