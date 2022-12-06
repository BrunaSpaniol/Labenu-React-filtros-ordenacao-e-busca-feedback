import React from "react";
import { Container } from "./styles";

const Header = (props) => {
  const pokemontypesArray = [
    "Normal",
    "Fire",
    "Water",
    "Grass",
    "Flying",
    "Fighting",
    "Poison",
    "Electric",
    "Ground",
    "Rock",
    "Psychic",
    "Ice",
    "Bug",
    "Ghost",
    "Steel",
    "Dragon",
    "Dark",
    "Fairy"
  ];

  const handleSearch = (e) => {
    props.setPesquisa(e.target.value);
  };

  const handleIdSearch = (e) => {
    props.setIdFilter(e.target.value);
  };

  const handleTypeSearch = (event) => {
    props.setType(event.target.value);
  };

  const handleOrder = (event) => {
    props.setOrder(event.target.value);
  };

  return (
    <Container>
      <input
        type="number"
        placeholder="Buscar por id"
        onChange={handleIdSearch}
        value={props.idFilter}
      />
      <input
        type="text"
        placeholder="Buscar por nome"
        onChange={handleSearch}
        value={props.pesquisa}
      />
      <select value={props.order} onChange={handleOrder}>
        <option>Ordenar</option>
        <option value={"asc"}>Crescente</option>
        <option value={"desc"}>Decrescente</option>
      </select>
      <select name="tipo" id="tipo">
        <option value={""} key={""} onClick={handleTypeSearch}>
          Selecione um tipo
        </option>
        {pokemontypesArray.map((type) => {
          return (
            <option key={type} value={type} onClick={handleTypeSearch}>
              {type}
            </option>
          );
        })}
      </select>
    </Container>
  );
};

export default Header;
