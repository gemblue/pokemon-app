import React, { useEffect, useState } from "react";
import "./App.css";
import PokemonList from "./components/PokemonList";
import PokemonButtons from "./components/PokemonButtons";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonSkiingNordic,
  faPersonBiking,
  faPersonWalkingLuggage,
  faPersonSwimming,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [pokemonName, setPokemonName] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [urlPrevious, setUrlPrevious] = useState("");
  const [urlNext, setUrlNext] = useState("");
  const [color, setColor] = useState("#c71585");
  const [icon, setIcon] = useState(faPersonBiking);
  const [loading, setLoading] = useState(true);
  //Fetch Pokemon Using Axios Library
  useEffect(() => {
    axios
      .get(currentPage)
      .then((response) => {
        setLoading(false);
        setPokemonName(response.data.results.map((pn) => pn.name));
        setUrlNext(response.data.next);
        setUrlPrevious(response.data.previous);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.message);
      });
  }, [currentPage]);

  //Function Previous
  const PrviousPageFunc = () => {
    setCurrentPage(urlPrevious);
    setColor(randomColor);
    changeRandomColorAndIcons();
  };
  //Function Next
  const NextPageFunc = () => {
    setCurrentPage(urlNext);
    setColor(randomColor);
    changeRandomColorAndIcons();
  };

  //Random Colors
  const colorsSpec = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  const colorFinal = [];

  //Random Icons
  const icons = [
    faPersonBiking,
    faPersonSkiingNordic,
    faPersonWalkingLuggage,
    faPersonSwimming,
  ];

  const randomColor = () => {
    for (let i = 0; i < 6; i++) {
      colorFinal.push(
        colorsSpec[Math.floor(Math.random() * colorsSpec.length)]
      );
    }
  };

  const changeRandomColorAndIcons = () => {
    randomColor();
    setColor("#" + colorFinal.join(""));
    setIcon(icons[Math.floor(Math.random() * icons.length)]);
  };

  return (
    <>
      <div className="App">
        <h1 style={{ color: color }}>Pokemon</h1>
        {loading && <p className="loading">Loading...</p>}
        <PokemonList pokemonName={pokemonName} color={color} icon={icon} />
        <PokemonButtons
          nextFunction={urlNext ? NextPageFunc : null}
          previousFunction={urlPrevious ? PrviousPageFunc : null}
          color={color}
        />
      </div>
    </>
  );
}

export default App;
