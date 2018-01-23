import React from 'react';
import Header from '../components/Header';
import Link from 'next/link';
import fetch from 'isomorphic-fetch';

const Index = (props) => (
  <div>
    <Header />
    <p>Hello Next.js</p>
    <ul>
      {props.shows.map(({show}) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`}
                href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
Index.getInitialProps = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();
  console.log(`Show data fetched. Count: ${data.length}`);
  return {
    shows: data
  }
};
export default Index;