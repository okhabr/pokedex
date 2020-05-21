import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {requestPokemonsList} from '../../store/pokemons-list/actions';
import {filterModeOff} from '../../store/pokemons-list/actions';

import style from './load-more.module.scss';

export const LoadMore = (props) => {  
  const dispatch = useDispatch();

  const nextBatch = useSelector( (state) => state.pokemonsList.next)

  const handleClick = () => {
    dispatch(requestPokemonsList(nextBatch));
    dispatch(filterModeOff());
  }

  return ( 
  <button onClick={handleClick} className={style.loadMore}>
    Load More
  </button>
  )
}