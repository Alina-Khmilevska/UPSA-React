// LoadingAndErrorComponent.js
import React from 'react';

const ErrorComponent = ({ error }) => {

  if (error) return <div>Error: {error}</div>;

  return null;
};

export default ErrorComponent;
