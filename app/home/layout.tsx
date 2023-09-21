"use client";

import { Box, Button, ButtonGroup, Drawer, Grid } from "@mui/material";
import NavBar from "../components/navbar";
import HistoryPanel from "../components/history";
import CoursePanel from "../components/course";
import React from "react";

export default function HomeLayout(props: { children: React.ReactNode }) {
  const styles = {
    panel: {
      width: "75%",
    },
  };

  const [showHistory, setShowHistory] = React.useState(false);
  const historyHandler = () => {
    setShowHistory((prevState) => !prevState);
  };

  const [showCourse, setShowCourse] = React.useState(false);
  const courseHandler = () => {
    setShowCourse((prevState) => !prevState);
  };

  return (
    <>
      <NavBar />

      <Drawer
        anchor={"right"}
        open={showHistory}
        onClose={historyHandler}
        PaperProps={{ sx: { width: styles.panel.width } }}
      >
        <HistoryPanel />
      </Drawer>

      <Drawer
        anchor={"right"}
        open={showCourse}
        onClose={courseHandler}
        PaperProps={{ sx: { width: styles.panel.width } }}
      >
        <CoursePanel />
      </Drawer>

      <Grid justifyContent="center" container>
        <Grid item xs={9}>
          <Box display="flex" justifyContent="flex-end">
            <ButtonGroup variant="text" aria-label="text button group">
              <Button>recommend</Button>
              <Button onClick={historyHandler}>history</Button>
              <Button onClick={courseHandler}>course</Button>
            </ButtonGroup>
          </Box>
        </Grid>
      </Grid>

      {props.children}
    </>
  );
}
