import React from 'react';
import LikeButton from './LikeButton';
import Link from 'next/link';

// old getStaticProps
// =>return fetch('https://jsonplaceholder.typicode.com/posts',{ cache: 'force-cache'}).then((res) => res.json());

// old getServerSideProps
// =>return fetch('https://jsonplaceholder.typicode.com/posts',{ cache: 'no-store'}).then((res) => res.json());

// old getServerSideProps with revalidate -
// Incremental static regeneration
const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60
    }
  }).then((res) => res.json());
};

const Posts = async () => {
  const posts = await fetchPosts();
  return (
    <section>
      {posts.slice(0, 5).map((post) => {
        return (
          <article key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <h2>{post.title}</h2>
            </Link>
            <p>{post.body}</p>
            <LikeButton />
          </article>
        );
      })}
    </section>
  );
};

export default Posts;
