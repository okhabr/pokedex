import {pokemonListTypes} from './types';

const initialState = {
  list: [],
  filteredList: [],
  filterMode: false,
  filterType: '',
  loading: false,
  next: null,
  error: '',
}
export const pokemonsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case pokemonListTypes.REQUEST:
      return {
        ...state,
        loading: true,
      }
    case pokemonListTypes.SUCCESS:
      return {
        ...state,
        list: [...state.list,...action.payload.pokemons],
        next: action.payload.next,
        loading: false,
      }
      case pokemonListTypes.FILTER:
        const filtered = state.list.filter(pokemon => pokemon.characteristics.types.includes(action.payload));
        return {
          ...state,
          filterMode: true,
          filterType: action.payload,
          filteredList: filtered
        }

        case pokemonListTypes.FILTERMODEOFF:
          return {
            ...state,
            filterMode: false,
            filterType: ''
          }

    case pokemonListTypes.CLEAR:
      return {
        ...state,
        list: [],
      }
    case pokemonListTypes.ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    default:
      return state
  }
}
