import React, { useContext, useState } from "react";
import { Button } from "@material-ui/core";
import GlobalContext from "../../contexts/GlobalContext";
import SortByAlpha from "@material-ui/icons/SortByAlpha";
import FormatListNumbered from "@material-ui/icons/FormatListNumbered";

const Sort = () => {
  const [currentOrder, setCurrentOrder] = useState("inverse");
  const {
    dispatches,
    state: { type },
  } = useContext(GlobalContext);

  const handleSort = () => {
    setCurrentOrder(currentOrder === "standard" ? "inverse" : "standard");
    dispatches.sortItems(currentOrder);
  };

  return (
    <Button
      aria-label="Sort items"
      className="sort-button"
      onClick={handleSort}
    >
      {type === "characters" ? (
        <SortByAlpha className="sort-icon" />
      ) : (
        <FormatListNumbered className="sort-icon" />
      )}
    </Button>
  );
};

export default Sort;
