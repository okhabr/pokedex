import React from 'react';
import { Provider } from 'react-redux';

import store from './store/root.store';
import style from './App.module.scss';

import {PokemonsList} from './components/pokemons-list/pokemons-list.component';
import {PokemonDetails} from './components/pokemon-details/pokemon-details.component';
import {LoadMore} from './components/load-more/load-more.component';
import {PokemonTypes} from './components/filter/filter.component';

function App() {
  return (
    <Provider store={store}>
      <div className={style.page__container}>
        <h1 className={style.page__header}>Pokedex</h1>
        <PokemonTypes/>
        <div className={style.page__content}>
          <div className={style.page__content_list}>
            <PokemonsList/>
            <LoadMore/>
          </div> 
          <PokemonDetails className={style.page__content_details}/>
        </div>
      </div>
    </Provider>
  );
}

export default App;
