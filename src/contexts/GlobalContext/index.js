import React, { createContext, useReducer } from "react";
import reducer from "./reducers";
import { CHARACTERS, COMICS, TYPE } from "./types";
import { getGalleryList, searchItems } from "../../services/api/index";
import {
  isCharacter,
  getReducerType,
  sortElementBy,
} from "../../utils/constants/helpers";

const INIT = {
  characters: [],
  stories: [],
  comics: [],
  type: "characters",
};

const GlobalContext = createContext();

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT);

  const dispatches = {
    changePageType: (type) => {
      dispatch({ type: TYPE, payload: type });
    },
    fetchItems: async (attributeType) => {
      const currentType = getReducerType(attributeType);
      const results = await getGalleryList(attributeType);
      dispatch({ type: currentType, payload: results });
    },
    searchItems: async (filterBy, term) => {
      const attributeType = state.type;
      const currentType = isCharacter(attributeType) ? CHARACTERS : COMICS;
      const results = await searchItems(filterBy, term, attributeType);
      dispatch({ type: currentType, payload: results });
    },
    sortItems: (order) => {
      const attributeType = state.type;
      const format = isCharacter(attributeType) ? "alph" : "numerical";
      const currentList = isCharacter(attributeType)
        ? [...state.characters]
        : [...state.comics];
      const currentType = getReducerType(attributeType);
      const newList = sortElementBy(currentList, format, order);
      dispatch({ type: currentType, payload: newList });
    },
  };

  return (
    <GlobalContext.Provider value={{ state, dispatches }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext as default, Provider };
