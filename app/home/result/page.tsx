"use client";

import {
  Backdrop,
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  Drawer,
  Fab,
  Grid,
  TextField,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import HistoryPanel from "../../components/history";

export default function Result() {
  return (
    <>
      <Grid justifyContent="center" container>
        <img
          src={`/img.jpeg?fit=crop&auto=format`}
          srcSet={`/img.jpeg?fit=crop&auto=format`}
          alt={""}
          loading="lazy"
        />
      </Grid>
    </>
  );
}
