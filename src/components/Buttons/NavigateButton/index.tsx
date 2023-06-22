import React, { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';

const NavigateButton = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  return (
    <button
      className="link-button"
      onClick={() => {
        navigate(-1);
      }}
    >
      {children}
    </button>
  );
};

export default NavigateButton;
