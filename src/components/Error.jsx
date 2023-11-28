import React from "react";
import { useRouteError } from "react-router-dom";
import { data } from '../Config';

const Error = () => {
  const err = useRouteError();
  return (
    <>
      <div>
        Opps something went wrong,
        <br /> Don't worry the developer is working hard towards fixing this bug
        😅
      </div>
      <h3>{(err.data)}</h3>
    </>
    
  );
};

export default Error;
