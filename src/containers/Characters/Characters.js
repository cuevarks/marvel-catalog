import React, { useEffect, useState } from "react";
import Card from "../../components/Cards/Card";
import Search from "../../components/Search/Search";
import Sort from "../../components/Sort/Sort";
import { Icon } from "@material-ui/core";
import { getCharacters } from "../../services/api/getCharacters";

const Characters = () => {
  const [characterList, setCharacters] = useState([]);

  useEffect(() => {
    const getAllCharacters = async () => {
      const {
        data: { results },
      } = await getCharacters();
      setCharacters(results);
    };
    getAllCharacters();
  }, []);

  return (
    <section className="characters">
      <div className="option-bar">
        <Search />
        <Sort />
      </div>
      <div className="character-container">
        {characterList.length
          ? characterList.map((character, index) => (
              <Card
                key={`${index}-char`}
                characterName={character.name}
                thumbnail={`${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`}
              />
            ))
          : console.log("loading")}
      </div>
    </section>
  );
};

export default Characters;
