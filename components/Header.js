import React from 'react';
import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a className='a-home' style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a className='a-about' style={linkStyle}>About</a>
    </Link>
    <style jsx>{`
    .a-home {
      color: red;
    }
    .a-about {
      color: green;
    }
    `}</style>
  </div>
);

export default Header