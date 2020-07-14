import React from 'react';
import './pokemon.css';

const Pokemon = ({ pokemon }) => {
  return (
    <div className="pokemon">
      <span className="pokemon__name">{ pokemon.name }</span>
      <div className="pokemon__meta">
        <span className="pokemon__meta__item">{ pokemon.maxHP }</span>
        <span className="pokemon__meta__item">{ pokemon.maxCP }</span>
      </div>
      <div className="pokemon__image">
        <img className="pokemon__image__img" src={pokemon.image} alt={pokemon.name} />
      </div>
      <div className="pokemon__attacks">
        {
          pokemon.attacks.special.slice(0, 3).map(attack => {
            return <span className="pokemon__attacks__item" key={`${attack.name}-${attack.damage}`}>{attack.name}</span>
          })
        }
      </div>
    </div>
  )
}

export default Pokemon;