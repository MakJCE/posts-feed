import React from 'react';
import Link from 'next/link';

const fetchSinglePost = ({ id }) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 5 }
  }).then((res) => res.json());
};

const SinglePostLayout = async ({ children, params }) => {
  const { id } = params;
  const singlePost = await fetchSinglePost({ id });
  return (
    <div>
      <h1>SinglePost #{id}</h1>
      <h2>{singlePost.title}</h2>
      <p>{singlePost.body}</p>
      <Link href={`/posts/${id}/comments`}>Ver comentarios</Link>
      {children}
    </div>
  );
};

export default SinglePostLayout;
