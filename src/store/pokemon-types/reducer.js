import {filterTypes} from './types';

const initialState = {
  list:[],
  error: null
}
export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case filterTypes.SUCCESS:
      return {
        list: action.payload
      }
    case filterTypes.ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    default:
      return state
  }
}
