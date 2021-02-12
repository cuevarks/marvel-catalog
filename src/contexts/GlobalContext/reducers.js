import { CHARACTERS, COMICS, STORIES, TYPE } from "./types";

const reducer = (state, action) => {
  switch (action.type) {
    case CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };
    case COMICS:
      return {
        ...state,
        comics: action.payload,
      };
    case STORIES:
      return {
        ...state,
        stories: action.payload,
      };
    case TYPE:
      return {
        ...state,
        type: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
