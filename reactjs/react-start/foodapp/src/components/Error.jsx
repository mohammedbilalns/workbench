import React from "react";
import { useRouteError } from "react-router-dom";

export const Error = () => {
  const error = useRouteError();

  console.log(error);
  return (
    <>
      <div>Oops!!</div>
      <h2>Something went wrong </h2>
      <h3>{error.status}: {error.statusText}</h3>
    </>
  );
};
