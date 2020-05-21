import {pokemonListTypes} from './types';
import {getInitialList} from '../api';

export const toggleLoading = () => {
    return {
      type: pokemonListTypes.REQUEST,
    }
}

export const filterPokemonsList = (typeName) => {
  return {
    type: pokemonListTypes.FILTER,
    payload: typeName
  }
}

export const filterModeOff = () => {
  return {
    type: pokemonListTypes.FILTERMODEOFF,
  }
}
  
export const requestPokemonsList = (url = getInitialList) => async (dispatch) => {
    try {
      dispatch(toggleLoading())
      const res = await fetch(url);
      const data = await res.json()
      const pokemonsList = data.results;
      const nextChunk = data.next;
      
      const pokemonsDetailedList = await Promise.all(pokemonsList.map(async (pokemon) => {  
         return await getSinglePokemonDetails(pokemon.url)
      }));

      dispatch({
        type: pokemonListTypes.SUCCESS,
        payload: {
          pokemons: pokemonsDetailedList,
          next: nextChunk
        }
      })
    } catch (err) {
      dispatch({
        type: pokemonListTypes.ERROR,
        payload: err.message,
      })
    }
}


async function getSinglePokemonDetails(pokemonUrl){  
  const res = await fetch(pokemonUrl);
  const data = await res.json()
  const result = {
      id: data.id.toString().padStart(3, '0'),
      name: data.name,
      picture: data.sprites.front_default,
      characteristics: {
        types: data.types.map( item => item.type.name).join(', '),
        weight: data.weight,
        moves: data.moves.length
      },
      stats: data.stats.map( item => ([item.stat.name,item.base_stat])),
    }
  return result;

}