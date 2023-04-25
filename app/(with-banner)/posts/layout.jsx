import React from 'react';

const PostsLayout = ({ children }) => {
  return (
    <div>
      Home &bull; Posts
      {children}
    </div>
  );
};

export default PostsLayout;
