import React, { useContext, useEffect } from "react";
import Gallery from "../../components/Gallery";
import ActionBar from "../../components/ActionBar";
import GlobalContext from "../../contexts/GlobalContext";

const Comics = () => {
  const {
    state: { comics },
    dispatches,
  } = useContext(GlobalContext);
  useEffect(() => {
    dispatches.changePageType("comics");
    !comics.length && dispatches.fetchItems("comics");
  }, []);

  return (
    <>
      <ActionBar type="comics" />
      <Gallery type="comics" />
    </>
  );
};

export default Comics;
