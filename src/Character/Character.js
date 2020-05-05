import React from 'react'
import './Character.css'

const Character = ( props ) => {

    return (
      <div className="card">
        <div className="picture">
          <img src={props.characterImg} alt=""/>
        </div>
        <div className="details">
          <div className="feature">
            <h2>{props.character.name}</h2>
            <p><strong>Birth year:</strong> {props.character.birth_year}</p>
            <p><strong>Species:</strong> {props.species}</p>
            <p><strong>Gender:</strong> {props.character.gender}</p>
            <p><strong>Mass:</strong> {props.character.mass} Kg.</p>
            <p><strong>Eye color:</strong> {props.character.eye_color}</p>
            <p><strong>Hair color:</strong> {props.character.hair_color}</p>
            <p><strong>Skin:</strong> {props.character.skin_color}</p>
            <p><strong>Height:</strong> {props.character.height}</p>
            <p><strong>Homeworld:</strong> {props.planet.name}</p>
          </div>
        </div>
      </div>
    );
}

export default Character