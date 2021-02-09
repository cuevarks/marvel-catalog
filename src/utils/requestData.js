import md5 from "js-md5";

const requestData = () => {
  const { REACT_APP_PRIVATE_KEY, REACT_APP_PUBLIC_KEY } = process.env;
  const ts = Number(new Date());
  const hash = md5.create();
  hash.update(ts + REACT_APP_PRIVATE_KEY + REACT_APP_PUBLIC_KEY);

  return { HASH: hash.hex(), TS: ts };
};

export default requestData;
