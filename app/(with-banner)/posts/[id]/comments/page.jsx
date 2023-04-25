import React from 'react';
import Image from 'next/image';

const fetchSinglePostComments = async ({ id }) => {
  await new Promise((resolve, reject) => setTimeout(resolve, 500));
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: { revalidate: 5 }
  }).then((res) => res.json());
};

const PostComments = async ({ params }) => {
  const { id } = params;
  const comments = await fetchSinglePostComments({ id });
  return (
    <ul style={{ background: '#444' }}>
      {comments.map((comment) => (
        <li key={comment.id}>
          <Image
            src={`https://avatars.dicebear.com/api/adventurer/${comment.email}.svg`}
            alt={comment.name}
            height={50}
            width={50}
          />
          <b>{comment.name}</b>
          {'  '} &#10158; {'  '}
          <span>{comment.body}</span>
        </li>
      ))}
    </ul>
  );
};

export default PostComments;
