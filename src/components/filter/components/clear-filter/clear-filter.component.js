import React from 'react';
import { useDispatch } from 'react-redux'

import {filterModeOff} from '../../../../store/pokemons-list/actions';
import style from './clear-filter.module.scss';

export const ClearFilter = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(filterModeOff());
  }

  return (
    <button onClick={handleClick} className={style.clearFilters}>Clear filters</button>   
  )
}