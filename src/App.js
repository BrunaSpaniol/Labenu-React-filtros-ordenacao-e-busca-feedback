import { GlobalStyle, CardsContainer } from "./GlobalStyled";
import { useState } from "react";
import pokemons from "./pokemon/pokemon.json";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import { getColors } from "./utils/ReturnCardColor";
import Header from "./components/Header/Header.js";

function App() {
  const [pesquisa, setPesquisa] = useState("");
  const [idFilter, setIdFilter] = useState("");
  const [type, setType] = useState("");
  const [order, setOrder] = useState("");

  return (
    <>
      <GlobalStyle />
      <Header
        idFilter={idFilter}
        setIdFilter={setIdFilter}
        pesquisa={pesquisa}
        setPesquisa={setPesquisa}
        type={type}
        setType={setType}
        order={order}
        setOrder={setOrder}
      />
      <CardsContainer>
        {pokemons
          .filter((pokemon) => {
            return idFilter ? pokemon.id.includes(idFilter) : pokemon;
          })
          .filter((pokemon) => {
            return pokemon.name.english
              .toLowerCase()
              .includes(pesquisa.toLowerCase());
          })
          .filter((pokemon) => {
            return type ? pokemon.type.includes(type) : pokemon;
          })
          .sort((pokemon, nextPokemon) => {
            switch (order) {
              case "asc":
                return pokemon.name.english.localeCompare(
                  nextPokemon.name.english
                );
              case "desc":
                return nextPokemon.name.english.localeCompare(
                  pokemon.name.english
                );
              default:
                return -1;
            }
          })

          .map((pokemon) => {
            return (
              <PokemonCard
                cardColor={getColors(pokemon.type[0])}
                key={pokemon.id}
                pokemon={pokemon}
              />
            );
          })}
      </CardsContainer>
    </>
  );
}

export default App;
