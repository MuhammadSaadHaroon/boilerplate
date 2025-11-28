import React, { useState } from "react";
import { InputBase, Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    alert("Search: " + query);
    setQuery("");
  };

  return (
    <Paper component="form" sx={{ display: "flex", alignItems: "center", width: 250, p: "2px 4px" }}>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <IconButton type="button" onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
