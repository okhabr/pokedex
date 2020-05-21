import {currentPokemonTypes} from './types';

const initialState = {
  data: null
}
export const currentPokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case currentPokemonTypes.SET:
      return {
        data: action.payload
      }
    default:
      return state
  }
}
