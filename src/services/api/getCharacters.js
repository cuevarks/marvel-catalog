import { get } from "axios";
import requestData from "../../utils/requestData";
const { REACT_APP_BASE_URL, REACT_APP_PUBLIC_KEY } = process.env;
const { HASH, TS } = requestData();
const characterRequest = `${REACT_APP_BASE_URL}/characters?ts=${TS}&apikey=${REACT_APP_PUBLIC_KEY}&hash=${HASH}`;

export const getCharacters = async () => {
  try {
    const { data } = await get(characterRequest, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return data;
  } catch (e) {
    return [];
  }
};
