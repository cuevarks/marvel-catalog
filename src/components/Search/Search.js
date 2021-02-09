import React from "react";
import { Button, Icon, InputBase } from "@material-ui/core";

const Search = () => {
  return (
    <section className="search">
      <InputBase className="search-input" placeholder="Search..." />
      <div className="search-icon">
        <Button>
          <Icon>search</Icon>
        </Button>
      </div>
    </section>
  );
};

export default Search;
