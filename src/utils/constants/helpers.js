import {
  CHARACTERS,
  COMICS,
  STORIES,
} from "../../contexts/GlobalContext/types";

export const getTitle = (type) => {
  return type === "characters" ? "name" : "title";
};

export const getRequest = (filterBy, term, type) => {
  const request = {
    name: `${type}?nameStartsWith=${term}`,
    title: `${type}?titleStartsWith=${term}`,
    issue: `${type}?issueNumber=${term}`,
    format: `${type}?format=${term}`,
  };
  return request[filterBy];
};

export const isCharacter = (type) => {
  return type === "characters" ? true : false;
};

export const getReducerType = (type) => {
  const types = {
    characters: CHARACTERS,
    comics: COMICS,
    stories: STORIES,
  };

  return types[type];
};

export const sortElementBy = (list, format, order) => {
  if (format === "alph") {
    order === "inverse"
      ? list.sort((a, b) => b.name.localeCompare(a.name))
      : list.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    order === "inverse"
      ? list.sort((a, b) => b.issueNumber - a.issueNumber)
      : list.sort((a, b) => a.issueNumber - b.issueNumber);
  }
  return list;
};

export const getLocalStorageData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
export const addLocalStorageData = (key, newItem) => {
  try {
    const data = getLocalStorageData(key) || [];

    data.push(newItem);
    localStorage.setItem(key, JSON.stringify(data));
  } catch {
    return;
  }
};

export const removeLocalStorageData = (key, title) => {
  try {
    let data = getLocalStorageData(key);
    data = data.filter((item) => item.title !== title);

    localStorage.setItem(key, JSON.stringify(data));
  } catch {
    return;
  }
};
