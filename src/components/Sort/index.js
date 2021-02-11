import React, { useContext, useState } from "react";
import { Button, Icon } from "@material-ui/core";
import GlobalContext from "../../contexts/GlobalContext";

const Sort = () => {
  const [alphOrder, setAlphOrder] = useState(true);
  const { dispatches } = useContext(GlobalContext);

  const handleSort = () => {
    setAlphOrder(!alphOrder);
    dispatches.sortCharacters(alphOrder);
  };

  return (
    <Button className="sort-button" onClick={handleSort}>
      <Icon className="sort-icon">sort_by_alpha</Icon>
    </Button>
  );
};

export default Sort;
