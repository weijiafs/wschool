"use client";

import {
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import axios from "axios";
import React from "react";
import useSWR from "swr";

export default function CoursePanel() {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR("/api/course", fetcher);
  if (error) return <>error</>;
  if (!data) {
    console.log("===");
    return;
  }

  return (
    <>
      <ImageList cols={4} gap={10}>
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
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                >
                  {/* <InfoIcon /> */}
                </IconButton>
              }
              sx={{
                "& .MuiImageListItemBar-title": { fontSize: "0.8rem" }, //styles for title
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}
