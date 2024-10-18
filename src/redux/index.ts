import { combineReducers } from 'redux'
import { PostVideoSlice } from './features/sample'

export default combineReducers({ PostVideoAction: PostVideoSlice })
