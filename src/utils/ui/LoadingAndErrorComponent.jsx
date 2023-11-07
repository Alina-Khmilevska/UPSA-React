// LoadingAndErrorComponent.js
import React from 'react';

const LoadingAndErrorComponent = ({ loading, error }) => {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return null;
};

export default LoadingAndErrorComponent;
