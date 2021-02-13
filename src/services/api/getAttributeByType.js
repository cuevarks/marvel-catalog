import { get } from "axios";
import authInfo from "../../utils/constants/authInfo";
const { REACT_APP_BASE_URL } = process.env;
const auth = authInfo();

export const getAttributeByType = async (attribute, id, type) => {
  const request = `${REACT_APP_BASE_URL}/${type}/${id}/${attribute}?${auth}`;

  try {
    const {
      data: {
        data: { count, results },
      },
    } = await get(request, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    return { results, count };
  } catch (e) {
    return [];
  }
};
