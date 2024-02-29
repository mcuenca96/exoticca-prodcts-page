"use client";

import { Input } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { SearchInputProps } from "./types";
import * as styles from "./styles";

const SearchInput = ({ value, onChange }: SearchInputProps) => {
  return (
    <Input
      disableUnderline
      sx={styles.inputStyles}
      onChange={onChange}
      value={value}
      placeholder="Search your next destination"
      inputProps={{ sx: styles.placeholderStyles }}
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      }
    />
  );
};

export default SearchInput;
