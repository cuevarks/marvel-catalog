import { get } from "axios";
import { getRequest } from "utils/constants/helpers";
import authInfo from "../../utils/constants/authInfo";
const { REACT_APP_BASE_URL } = process.env;
const auth = authInfo();

export const searchItems = async (filterBy, term, type) => {
  const characterRequest = `${REACT_APP_BASE_URL}/${getRequest(
    filterBy,
    term,
    type
  )}&${auth}`;

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
