import React from "react";
import Search from "../Search";
import Sort from "../Sort";

const ActionBar = () => {
  return (
    <div className="action-bar">
      <Search />
      <Sort />
    </div>
  );
};

export default ActionBar;
