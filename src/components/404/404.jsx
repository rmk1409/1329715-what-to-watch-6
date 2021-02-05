import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => (
  <>
    <h1>404</h1>
    <h1>Not Found</h1>
    <Link to="/">Go to the main page</Link>
  </>
);

export {NotFound};
