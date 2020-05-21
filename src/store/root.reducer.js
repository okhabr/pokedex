import { combineReducers } from 'redux'
import {pokemonsListReducer} from './pokemons-list/reducer';
import {currentPokemonReducer} from './current-pokemon/reducer';
import {filterReducer} from './pokemon-types/reducer';


export default combineReducers({
  pokemonsList: pokemonsListReducer,
  currentPokemon: currentPokemonReducer,
  filterTypes: filterReducer
})