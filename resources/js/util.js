/**
 * クッキーの値を取得する、SPAでのCSRF対策をする
 */
 export function getCookie (searchKey) {
   if (typeof searchKey === 'undefined') {
     return ''
   }

   let val = ''
   let cookieData = document.cookie.split(';')

   cookieData.forEach(cookie => {
     const [key, value] = cookie.split('=')
     if (key === searchKey) {
       return val = value
     }
   })

   return val
 }

 /**
  * ステータスコードを定義
  */
 export const OK = 200
 export const CREATED = 201
 export const INTERNAL_SERVER_ERROR = 500
 export const UNPROCESSABLE_ENTITY = 422
 export const NOT_FOUND = 404

 /**
  * 環境によってページのプレフィックスを変更する。
  */
 export const API_PREFIX = process.env.MIX_VUE_APP_API_URL || '';