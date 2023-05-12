import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const PokemonButtons = (props) => {
  const { previousFunction, nextFunction, color } = props;
  return (
    <>
      <button
        onClick={previousFunction}
        className={previousFunction ? "" : "disabled"}
        style={{ backgroundColor: color }}
      >
        <FontAwesomeIcon icon={faCircleChevronLeft} />
        Previous Page
      </button>
      <button onClick={nextFunction} style={{ backgroundColor: color }}>
        Next Page
        <FontAwesomeIcon icon={faCircleChevronRight} />
      </button>
    </>
  );
};
export default PokemonButtons;
