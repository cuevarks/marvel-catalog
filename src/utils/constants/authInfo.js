import requestData from "./requestData";
const { REACT_APP_PUBLIC_KEY } = process.env;
const { HASH, TS } = requestData();

const authInfo = () => {
  return `ts=${TS}&apikey=${REACT_APP_PUBLIC_KEY}&hash=${HASH}`;
};

export default authInfo;
