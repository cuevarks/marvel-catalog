import React, { useContext, useState } from "react";
import { Button, Icon, InputBase } from "@material-ui/core";
import GlobalContext from "../../contexts/GlobalContext";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { dispatches } = useContext(GlobalContext);

  const handleSearchInput = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  const handleSearch = () => {
    dispatches.searchCharacters(searchTerm);
  };

  return (
    <section className="search">
      <InputBase
        className="search-input"
        onChange={handleSearchInput}
        placeholder="Search..."
        value={searchTerm}
      />
      <div className="search-icon">
        <Button onClick={handleSearch}>
          <Icon>search</Icon>
        </Button>
      </div>
    </section>
  );
};

export default Search;
