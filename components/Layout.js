import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

// children = props.children
const Layout = ({ children }) => {
  const head = () => {
    return (
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous"
      />
    );
  };
  const nav = () => {
    return (
      <ul className="nav nav-tabs" style={{ backgroundColor: 'orchid' }}>
        <li className="nav-item">
          <Link href="/">
            <a className="nav-link" style={{ color: '#011000' }}>
              Home
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/login">
            <a className="nav-link" style={{ color: '#011000' }}>
              Login
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/register">
            <a className="nav-link" style={{ color: '#011000' }}>
              Register
            </a>
          </Link>
        </li>
      </ul>
    );
  };
  return (
    <React.Fragment>
      <>
        <style type="text/css">
          {`
   .nav-link {
       color: "pink";
   }
      `}
        </style>
      </>
      {head()}
      {nav()} <div className="container pt-5 pb-5">{children}</div>
    </React.Fragment>
  );
};

export default Layout;
