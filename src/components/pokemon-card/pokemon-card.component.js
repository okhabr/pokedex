import React from 'react';
import { useDispatch } from 'react-redux'

import style from './pokemon-card.module.scss';
import {setCurrent} from '../../store/current-pokemon/actions';
import {ButtonType} from '../filter/components/button-type/button-type.component';

export const PokemonCard = (props) => {  
  const {name, picture} = props.pokemonData;
  const types = props.pokemonData.characteristics.types.split(', ');
  
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCurrent(props.pokemonData));
  }

  return ( 
  <div className={style.pokemon__container} onClick={handleClick}>
    <div className={style.pokemon__pic}>
      <img src={picture} alt={name}/>
    </div>
    <h4 className={style.pokemon__name}>{name}</h4>
    <div className={style.pokemon__typesContainer}>
      {types.map((type, index) => <ButtonType typeName={type} key={index} className={style.pokemon__type}/>)}
    </div>  
  </div>
  )
}