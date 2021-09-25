import React from 'react';

// children = props.children
const Layout = ({ children }) => {
  const nav = () => {
    return (
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link" href="">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">
            Login
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">
            Register
          </a>
        </li>
      </ul>
    );
  };
  return (
    <React.Fragment>
      {nav()} {children}
    </React.Fragment>
  );
};

export default Layout;