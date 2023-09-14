"use client";

import {
  Box,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Pagination,
} from "@mui/material";
import axios from "axios";
import React from "react";
import useSWR from "swr";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export default function HistoryPanel() {
  const styles = {
    imageList: {
      gap: 10,
    },
    imageListItemBar: {
      iconButton: {
        color: "rgba(255, 255, 255, 0.54)",
      },
      fontSize: "0.7rem",
    },
  };

  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR("/api/history", fetcher);

  if (error) {
    return <>error</>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      {/* todo gap px -> rem */}
      <ImageList cols={4} gap={styles.imageList.gap}>
        {data.data.map((item: any) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?fit=crop&auto=format`}
              srcSet={`${item.img}?fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: styles.imageListItemBar.iconButton.color }}
                >
                  <ContentCopyIcon fontSize="small" />
                </IconButton>
              }
              sx={{
                "& .MuiImageListItemBar-title": {
                  fontSize: styles.imageListItemBar.fontSize,
                },
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>

      <Box justifyContent="center">
        <Pagination count={10} showFirstButton showLastButton/>
      </Box>
    </>
  );
}
