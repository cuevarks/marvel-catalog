import React, { useEffect, createContext, useReducer } from "react";
import reducer from "./reducers";
import { CHARACTERS, COMICS, STORIES } from "./types";
import { getCharacters, searchCharacters } from "../../services/api/index";

const INIT = {
  characters: [],
  stories: [],
  comics: [],
};

const GlobalContext = createContext();

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT);

  const dispatches = {
    fetchCharacters: async () => {
      const characters = await getCharacters();
      dispatch({ type: CHARACTERS, payload: characters });
    },
    searchCharacters: async (term) => {
      const results = await searchCharacters(term);
      dispatch({ type: CHARACTERS, payload: results });
    },
    sortCharacters: (alphOrder) => {
      const characters = [...state.characters];
      alphOrder
        ? characters.sort((a, b) => a.name.localeCompare(b.name))
        : characters.sort((a, b) => b.name.localeCompare(a.name));
      dispatch({ type: CHARACTERS, payload: characters });
    },
  };

  useEffect(() => {
    dispatches.fetchCharacters();
  }, []);

  return (
    <GlobalContext.Provider value={{ state, dispatches }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext as default, Provider };
