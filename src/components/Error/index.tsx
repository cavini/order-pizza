import React from 'react';

import { useNavigate, useRouteError } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();
  // as much as it breaks my heart to use an any as the return type, specially for an official react-router-dom hook, I have no other choice but to use it here
  // since using "@typescript-eslint/no-implicit-any-catch" is not recommended because the rule is deprecated, and should be available out of the box with typescript >= 4.0.0
  // but it doesnt. Tried adding useUnknownInCatchVariables in my tsconfig file but it does not work.
  // Also had to add "@typescript-eslint/no-explicit-any" to my typescript config file, which is something that I never do, because it was bouncing back and forth between errors with any and unknown.
  const error: any = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>

      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
};

export default Error;
