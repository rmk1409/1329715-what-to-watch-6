import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => (
  <div style={{
    width: `250px`,
    margin: `0 auto`,
  }}>
    <h1>404</h1>
    <h1>Not Found</h1>
    <Link to="/">Go to the main page</Link>
  </div>
);

export {NotFound};
