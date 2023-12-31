import React, { FormEvent } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateName } from '../../../context/user/userSlice';
import Button from '../../../components/Buttons/Button';
import { ButtonType } from '../../../components/Buttons/Button/@types';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const navigate = useNavigate();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!username) return;
    dispatch(updateName(username));
    navigate('/menu');
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
