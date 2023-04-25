'use client';

import React, { useState } from 'react';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  return (
    <button onClick={() => setLiked(!liked)}>{liked ? <>&#10084;</> : <>&#9825;</>} </button>
  );
};

export default LikeButton;
