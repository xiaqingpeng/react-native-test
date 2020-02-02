import {INIT_COMPANY, HOME_LIST, INIT_LOGIN} from './create-type';
import axios from 'axios';
export const setCompanyList = data => {
  return {
    type: INIT_COMPANY,
    payload: data,
  };
};
export const setLogin = (data, callback) => {
 

  return dispatch => {

    setTimeout(() => {

      let res = {
        ...data,
        user_id:100,
        role:'2'
      }
      dispatch({
        type: INIT_LOGIN,
        data: res,
      });
      callback(res);
    }, 1000);
  
  };
 
};
export const setHomeList = data => {
  return async dispatch => {
    let data;
    await axios
      .get(
        'https://dumall.baidu.com/api/products/spu_skus/v3?timestamp=1578494194516&spuNo=SPU4302690847&channelId=0&platformId=2',
      )

      .then(async result => {
        console.log(result.data.data);
        data = result.data.data;
        dispatch({
          type: HOME_LIST,
          data: data,
        });
        // 网络请求成功，处理请求到的数据
      })
      .catch(error => {
        // 网络请求失败，处理错误信息
      });
  };
};
