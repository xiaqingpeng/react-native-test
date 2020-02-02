import { INIT_COMPANY,HOME_LIST, INIT_LOGIN } from '../action/create-type'
const defaultState = {
  list: [],
  isLoading: true,
  payload:1,
  array:[],
  userInfo:{}
};

export default (state = defaultState,action) =>{
  let  newState =JSON.parse(JSON.stringify(defaultState))
  switch (action.type) {
    case INIT_COMPANY :
        console.log(action)
        newState.payload =action.payload
      return newState
      case HOME_LIST :
        console.log(action)
        newState.array =action.data
      return newState
      case INIT_LOGIN :
        console.log(action)
        newState.userInfo = action.data
      return newState
    default:
      return state;
  }
}
