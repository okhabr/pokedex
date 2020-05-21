import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {PokemonCard} from '../pokemon-card/pokemon-card.component';
import {requestPokemonsList} from '../../store/pokemons-list/actions';
import style from './pokemons-list.module.scss';

export const PokemonsList = () => {
  const dispatch = useDispatch();

  const filterMode = useSelector( (state) => state.pokemonsList.filterMode);
  const pokemonsList = useSelector( (state) => filterMode ? state.pokemonsList.filteredList : state.pokemonsList.list);

  useEffect( () => {
    dispatch(requestPokemonsList());
  },[]);

  if(filterMode & !pokemonsList){
    return(
      <p>Oops, no pokemons with this type. Try to load more and filter</p>
    )
  }

  return (
    <div className={style.list__container}>
      {pokemonsList.map( (pokemon) => <PokemonCard  key={pokemon.id} pokemonData={pokemon}/>)}
    </div>
  )

}