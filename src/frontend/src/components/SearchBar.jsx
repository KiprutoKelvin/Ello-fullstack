import React, { useState } from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <TextField
      label="Search Books"
      variant="outlined"
      fullWidth
      value={query}
      onChange={handleSearch}
    />
  );
};

export default SearchBar;


