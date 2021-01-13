// import { get } from 'core-js/fn/dict'
import request from './request'

/**
 * POST 方法 与 GET方法  区别
 *
 * post==> data: obj
 * get==>params: obj
 *
 */
// export function updateBook(obj) {
//     return request({
//       url: '/book/update',      
//       method: 'post',
//       data: obj,    
//     })
//   }
//   export function getBookList(obj) {
//     return request({
//       url: '/book/list',      
//       method: 'post',
//       params: obj,    
//     })
//  }  

// get获取数据
 function updateBook(obj) {
    return request({
      url: '/index',      
      method: 'get',
      params: obj,   
    })
  }
//   get传数据
function getsendDate(obj) {
    return request({
      url: '/getsDate',      
      method: 'get',
      params: obj,   
    })
  }
// post传数据
  function sends(obj){
    return request({
              url: '/send',      
              method: 'post',
              data: obj,    
            })
  }
//   post拿取数据
function postTake(obj){
    return request({
        url: '/postTake',      
        method: 'post',
        data: obj,    
      })
}
  export default{
    updateBook,
    getsendDate,
    postTake,
    sends
  }

