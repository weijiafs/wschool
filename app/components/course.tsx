"use client";

import { Box, Pagination } from "@mui/material";
import React from "react";

export default function CoursePanel() {
  return (
    <>
      <h2>单词</h2>
      <h2>句子</h2>
      <h2>语法</h2>

      <Box justifyContent="center">
        <Pagination count={10} showFirstButton showLastButton />
      </Box>
    </>
  );
}
