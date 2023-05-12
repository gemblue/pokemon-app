import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import uniqid from "uniqid";

const PokemonList = (props) => {
  const { pokemonName, color, icon } = props;
  return (
    <>
      <div className="cards">
        {pokemonName &&
          pokemonName.map((pn) => (
            <div key={uniqid} className="card">
              <span style={{ backgroundColor: color }}></span>
              <FontAwesomeIcon icon={icon} style={{ color: color }} />
              <p>{pn}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default PokemonList;
