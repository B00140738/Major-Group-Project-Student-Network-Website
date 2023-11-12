// RedirectButton.js
import React from 'react';
import { useRouter } from 'next/navigation';

//RedirectButton with "destination" and "text" props passed through
const RedirectButton = ({ destination, text }) => {
  //Use Next Router
  const router = useRouter();

  //Send user to destination page when clicked
  const handleClick = () => {
    router.push(destination);
  };

  //Component Content
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  );
};

export default RedirectButton;
