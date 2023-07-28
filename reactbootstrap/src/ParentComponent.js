import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  return (
    <div className="parent-container">
       <h1>This is the Parent Component</h1>
      <p>Some content in the parent component...</p>
      <ChildComponent />
    </div>
  );
};

export default ParentComponent;
