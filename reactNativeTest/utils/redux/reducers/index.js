import {combineReducers} from 'redux';
import {createNavigationReducer} from 'react-navigation-redux-helpers'
import handleReducer from './reducer'
import AppContainer from '../../MainView'
const  navReducer =createNavigationReducer(AppContainer)
export  default combineReducers({
    handleReducer,
    nav:navReducer
})