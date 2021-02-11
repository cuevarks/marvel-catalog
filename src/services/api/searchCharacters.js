import { get } from "axios";
import requestData from "../../utils/requestData";
const { REACT_APP_BASE_URL, REACT_APP_PUBLIC_KEY } = process.env;
const { HASH, TS } = requestData();

export const searchCharacters = async (term) => {
  const characterRequest = `${REACT_APP_BASE_URL}/characters?nameStartsWith=${term}&ts=${TS}&apikey=${REACT_APP_PUBLIC_KEY}&hash=${HASH}`;

  try {
    const {
      data: {
        data: { results },
      },
    } = await get(characterRequest, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return results;
  } catch (e) {
    return [];
  }
};
