import React, { FormEvent } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateName } from '../../context/user/userSlice';
import Button from '../Buttons/Button';
import { ButtonType } from '../Buttons/Button/@types';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!username) return;
    dispatch(updateName(username));
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        className="input mb-8 w-72"
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== '' && (
        <div>
          <Button type={ButtonType.PRIMARY}>Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
