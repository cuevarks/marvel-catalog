import { CHARACTERS, COMICS, STORIES } from "./types";

const reducer = (state, action) => {
  switch (action.type) {
    case CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
