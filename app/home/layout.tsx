"use client";

import NavBar from "../components/navbar";

export default function HomeLayout(props: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavBar />
      {props.children}
    </>
  );
}
