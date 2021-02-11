import React, { useContext } from "react";
import GlobalContext from "../../contexts/GlobalContext";
import Card from "../Cards";
import Search from "../Search";
import Sort from "../Sort";

const Characters = () => {
  const {
    state: { characters },
  } = useContext(GlobalContext);

  return (
    <section className="characters">
      <div className="option-bar">
        <Search />
        <Sort />
      </div>
      <div className="character-container">
        {characters.length
          ? characters.map((character, index) => (
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
