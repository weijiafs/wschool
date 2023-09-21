"use client";

import {
  Backdrop,
  CircularProgress,
  Fab,
  Grid,
  TextField,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function Home() {
  const styles = {
    generateBtn: {
      marginTop: "5rem",
    },

    promptText: {
      width: "100%",
      marginTop: "5rem",
    },
  };

  const router = useRouter();

  const [submitState, setSubmitState] = React.useState(true);

  const [wait, setWait] = React.useState(false);

  const handleOpen = () => {
    setWait(true);
  };

  const promptOnChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log(event.target.value.length);

    if (event.target.value.length > 0) {
      if (submitState) {
        setSubmitState(false);
      }
    } else {
      if (!submitState) {
        setSubmitState(true);
      }
    }
  };

  useEffect(() => {
    if (!wait) {
      return;
    }

    const timer = setInterval(async () => {
      setWait(false);

      router.push("/home/result");
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [wait]);

  return (
    <>
      <Grid justifyContent="center" container>
        <Grid item xs={8} sx={{ textAlign: "center" }}>
          <TextField
            id="prompt"
            label="Prompt"
            variant="standard"
            multiline
            maxRows={4}
            sx={{
              width: styles.promptText.width,
              marginTop: styles.promptText.marginTop,
            }}
            onChange={promptOnChange}
          />

          <Fab
            type="submit"
            variant="extended"
            color="primary"
            aria-label="add"
            sx={{ marginTop: styles.generateBtn.marginTop }}
            onClick={handleOpen}
            disabled={submitState}
          >
            generate
          </Fab>

          <Backdrop
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={wait}
          >
            <CircularProgress />
          </Backdrop>
        </Grid>
      </Grid>
    </>
  );
}
