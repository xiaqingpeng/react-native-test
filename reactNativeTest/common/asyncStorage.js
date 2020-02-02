import AsyncStorage from '@react-native-community/async-storage';
class asyncStorage {
  static saveData(key, data){
    return new Promise((resolve, reject) => {
      AsyncStorage.setItem(key, data, error => {
        if (!error) {
          return resolve('数据存贮成功');
        } else {
          return reject(`asyncStorage错误信息${error}`);
        }
      });
    });
  };

  static getData (key){
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(key, (error, result) => {
        if (!error) {
          console.log(`${key}为${result}`)
          return resolve(result);
        } else {
          return reject(`asyncStorage错误信息${error}`);
        }
      });
    });
  };
  static removeData (key) {
    return new Promise((resolve, reject) => {
      AsyncStorage.removeItem(key, error => {
        if (!error) {
          console.log(`${key}移除成功`)
          return resolve('移除成功');
        } else {
          return reject(`asyncStorage错误信息${error}`);
        }
      });
    });
  };
}

export default asyncStorage;
