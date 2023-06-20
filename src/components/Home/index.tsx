import React from 'react';
import CreateUser from '../CreateUser';

const Home = () => {
  return (
    <div className="my-10 text-center">
      <h1 className="mb-8  text-xl font-semibold">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
};

export default Home;
