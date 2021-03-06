import { get } from "axios";
import authInfo from "../../utils/constants/authInfo";
const { REACT_APP_BASE_URL } = process.env;
const auth = authInfo();

export const getDetailsById = async (id, type) => {
  const request = `${REACT_APP_BASE_URL}/${type}/${id}?${auth}`;

  try {
    const {
      data: {
        data: { results },
      },
    } = await get(request, {
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
