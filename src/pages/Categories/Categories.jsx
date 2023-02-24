import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { Box } from "@mui/material";
import React from "react";

export const Categoryes = ({ value, onClickCategory }) => {
  console.log(value);
  const categories = ["Новые", "Популярные"];

  return (
    <Box sx={{ width: "100%", marginBottom: 2 }}>
      <Tabs
        onChange={onClickCategory(0)}
        value={value}
        aria-label="Tabs where each tab needs to be selected manually"
      >
        <Tab label={categories[0]} />
        <Tab label={categories[1]} />
      </Tabs>
    </Box>
  );
};
