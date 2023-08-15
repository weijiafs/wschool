"use client";

import {
  Box,
  Button,
  ButtonGroup,
  Drawer,
  Fab,
  Grid,
  TextField,
} from "@mui/material";
import { createRef, useCallback } from "react";
import CoursePanel from "../components/course";
import { useRouter } from "next/navigation";
import NavBar from "../components/navbar";
import HistoryLayout from "./layout";
import Link from "next/link";
import React from "react";

export default function Home() {
  const styles = {
    generateBtn: {
      marginTop: "5rem",
    },

    promptText: {
      width: "100%",
      marginTop: "5rem",
    },

    panel: {
      width: "75%",
    },
  };

  const router = useRouter();

  const [isOpen, setOpen] = React.useState(false);
  const handler = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <Drawer
        anchor={"right"}
        open={isOpen}
        onClose={handler}
        PaperProps={{ sx: { width: styles.panel.width } }}
      >
        <CoursePanel />
        {/* {isOpen ? <CoursePanel /> : <></>} */}
      </Drawer>

      <Grid justifyContent="center" container>
        <Grid xs={9}>
          <Box display="flex" justifyContent="flex-end">
            <ButtonGroup variant="text" aria-label="text button group">
              <Button onClick={() => router.push("/home/team")}>history</Button>
              <Button onClick={handler}>Course</Button>
            </ButtonGroup>
          </Box>
        </Grid>
      </Grid>

      <Grid justifyContent="center" container>
        <Grid xs={8} sx={{ textAlign: "center" }}>
          <TextField
            id="standard-basic"
            label="Prompt"
            variant="standard"
            multiline
            maxRows={4}
            sx={{
              width: styles.promptText.width,
              marginTop: styles.promptText.marginTop,
            }}
          />

          <Fab
            type="submit"
            variant="extended"
            color="primary"
            aria-label="add"
            sx={{ marginTop: styles.generateBtn.marginTop }}
          >
            generate
          </Fab>
        </Grid>
      </Grid>
    </>
  );
}
