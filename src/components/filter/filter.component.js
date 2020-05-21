import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'

import {ButtonType} from './components/button-type/button-type.component';
import {ClearFilter} from './components/clear-filter/clear-filter.component';

import {requestTypes} from '../../store/pokemon-types/actions';

import style from './filter.module.scss';

export const PokemonTypes = () => {
  const dispatch = useDispatch();

  const pokemonTypes = useSelector( (state) => state.filterTypes.list) 
  const filterMode = useSelector( (state) => state.pokemonsList.filterMode);
  const filterType = useSelector( (state) => state.pokemonsList.filterType);

  useEffect( () => {
    dispatch(requestTypes());
  },[]);

  return (
    <div>
      <h4 className={style.filter__header}>Filter by {filterType} type</h4>
      {pokemonTypes.map((type,index) =><ButtonType typeName={type} key={index}/>)}
      {filterMode &&  <ClearFilter/>}
    </div>    
  )

}