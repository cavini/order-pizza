import React from 'react';
import CreateUser from '../CreateUser';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import LinkButton from '../Buttons/LinkButton';
import { ButtonType } from '../Buttons/Button/@types';

const Home = () => {
  const username = useSelector<RootState, string>(
    (state) => state.user.username
  );
  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8  text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Out of the oven, straight to you.
        </span>
      </h1>
      {!username ? (
        <CreateUser />
      ) : (
        <LinkButton type={ButtonType.PRIMARY} to="/menu">
          Continue ordering, {username}
        </LinkButton>
      )}
    </div>
  );
};

export default Home;
