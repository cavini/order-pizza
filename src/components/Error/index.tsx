import React from 'react';

import { useRouteError } from 'react-router-dom';
import { ErrorInterface } from './@types';
import NavigateButton from '../Buttons/NavigateButton';

const Error = () => {
  const error = useRouteError() as ErrorInterface;

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>

      <NavigateButton>&larr; Go back</NavigateButton>
    </div>
  );
};

export default Error;
