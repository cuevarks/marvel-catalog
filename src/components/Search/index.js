import React, { useContext, useState } from "react";
import { Button, InputBase, MenuItem, Select } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";
import GlobalContext from "../../contexts/GlobalContext";
import { SEARCH_CRITERIA } from "../../utils/constants/constants";
import { isCharacter } from "../../utils/constants/helpers";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("title");
  const {
    dispatches,
    state: { type },
  } = useContext(GlobalContext);

  const handleSearchInput = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  const handleSearch = () => {
    const filterParam = isCharacter(type) ? "name" : filterBy;
    dispatches.searchItems(filterParam, searchTerm);
  };

  const handleSelect = (event) => {
    const filterBy = event.target.value;
    setSearchTerm("");
    setFilterBy(filterBy);
  };

  const handleEnter = (e) => {
    e.key === "Enter" && searchTerm && handleSearch();
  };

  return (
    <section className="search">
      {filterBy !== "format" && (
        <InputBase
          className="search-input"
          onChange={handleSearchInput}
          onKeyDown={handleEnter}
          placeholder="Search..."
          value={searchTerm}
        />
      )}
      {filterBy === "format" && (
        <Select className="format-select" onChange={handleSearchInput}>
          <MenuItem value="comics">Comics</MenuItem>
          <MenuItem value="magazine">Magazine</MenuItem>
          <MenuItem value="trade%20paperback">Trade Paperback</MenuItem>
          <MenuItem value="hardcover">Hardcover</MenuItem>
          <MenuItem value="digest">Digest</MenuItem>
          <MenuItem value="graphic%20novel">Graphich Novel</MenuItem>
          <MenuItem value="digital%20comic">Digital Comic</MenuItem>
          <MenuItem value="infinite%20comic">Infinite Comic</MenuItem>
        </Select>
      )}
      {!isCharacter(type) && (
        <Select className="select" onChange={handleSelect} value={filterBy}>
          {SEARCH_CRITERIA.map((criteria, index) => (
            <MenuItem
              key={`filter-option-${index}`}
              value={`${criteria.charAt(0).toLowerCase()}${criteria.slice(1)}`}
            >
              {criteria}
            </MenuItem>
          ))}
        </Select>
      )}
      <div className="search-icon">
        <Button
          aria-label="search"
          onClick={handleSearch}
          disabled={!searchTerm}
          type="submit"
        >
          <SearchIcon />
        </Button>
      </div>
    </section>
  );
};

export default Search;
