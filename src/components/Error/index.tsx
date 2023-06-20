import React from 'react';

import { useNavigate, useRouteError } from 'react-router-dom';
import { ErrorInterface } from './@types';

const Error = () => {
  const navigate = useNavigate();
  const error = useRouteError() as ErrorInterface;

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>

      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
};

export default Error;
