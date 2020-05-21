import React from 'react';
import { useSelector } from 'react-redux'

import style from './pokemon-details.module.scss';

export const PokemonDetails = () => {
  const pokemonData = useSelector( (state) => state.currentPokemon.data)
  let tableData;

  if(pokemonData) {
    const generalInfo = Object.entries(pokemonData.characteristics);
    tableData = [...generalInfo, ...pokemonData.stats,];
  }

  return (
    <div>
      {
        pokemonData && (
          <div className={style.details__container}>
            <img className={style.details__pic} src={pokemonData.picture} alt={pokemonData.name}/>
            <h3 className={style.details__name}> 
              {pokemonData.name} #{pokemonData.id}
            </h3>
            <table className={style.details__table}>
              <tbody>
                {tableData.map(([title, content], index) => (
                <tr key={index}>
                  <td className={style.details__field_title}>{title}</td>
                  <td className={style.details__field_content}>{content}</td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      }
    </div>
  )

}


  // useEffect( () => {
  //   fetch(`https://pokeapi.co/api/v2/pokemon/1`)
  //     .then(response => response.json())
  //     .then(data => {
  //       const result = {
  //         id: data.id.toString().padStart(3, '0'),
  //         name: data.name,
  //         picture: data.sprites.front_default,
  //         characteristics: {
  //           types: data.types.map( item => item.type.name).join(', '),
  //           weight: data.weight,
  //           moves: data.moves.length
  //         },
  //         stats: data.stats.map( item => ([item.stat.name,item.base_stat])),
  //       }
  //       const generalInfo = Object.entries(result.characteristics);

  //       setPokemonData(result);
  //       setTableData([...generalInfo, ...result.stats,]);
  //       console.log(data);
  //     })
  // },[]); 