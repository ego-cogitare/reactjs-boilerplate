import { request } from '../core/helpers/Request'

export function fetchRows(success, fail) {
  return request('/courses.json', { skip: 0, limit: 999 }, 'get', success, fail);
}
