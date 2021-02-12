import React, { useContext, useEffect } from "react";
import Gallery from "../../components/Gallery";
import ActionBar from "../../components/ActionBar";
import GlobalContext from "../../contexts/GlobalContext";

const Characters = () => {
  const { state: characters, dispatches } = useContext(GlobalContext);
  useEffect(() => {
    dispatches.changePageType("characters");
    !characters.length && dispatches.fetchItems("characters");
  }, []);

  return (
    <>
      <ActionBar />
      <Gallery type="characters" />
    </>
  );
};

export default Characters;
