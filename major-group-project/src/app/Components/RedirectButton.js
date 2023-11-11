// RedirectButton.js
import React from 'react';
import { useRouter } from 'next/router';

const RedirectButton = ({ destination, text }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(destination);
  };

  return (
    <button onClick={handleClick}>
      {text}
    </button>
  );
};

export default RedirectButton;
