import {currentPokemonTypes} from './types';

export const setCurrent = (pokemonData) => {
    return {
      type: currentPokemonTypes.SET,
      payload: pokemonData
    }
  }

