import React from 'react';
import { useDispatch } from 'react-redux'

import {filterPokemonsList} from '../../../../store/pokemons-list/actions';
import style from './button-type.module.scss';

export const ButtonType = (props) => {
  const dispatch = useDispatch();

  const {typeName} = props;

  const classType = style[`type_${typeName}`];

  const handleClick = () => {
    dispatch(filterPokemonsList(typeName));
  }

  return (
    <button onClick={handleClick} className={classType}>{typeName}</button>   
  )
}