import React, { useContext, useEffect } from "react";
import Gallery from "../../components/Gallery";
import GlobalContext from "../../contexts/GlobalContext";

const Stories = () => {
  const {
    state: { stories },
    dispatches,
  } = useContext(GlobalContext);
  useEffect(() => {
    dispatches.changePageType("stories");
    !stories.length && dispatches.fetchItems("stories");
  }, []);

  return (
    <>
      <Gallery type="stories" />
    </>
  );
};

export default Stories;
