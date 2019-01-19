import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h2>Error! Page Not Found.</h2>
      <p>Go to <Link to="/">home</Link> or check to be sure you typed the address correctly.</p>
    </div>
  );
}

export default NotFound;