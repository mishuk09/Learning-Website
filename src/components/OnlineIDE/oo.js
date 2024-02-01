import React from 'react';
import OnlineIDEObject from 'path-to-your-OnlineIDEObject'; // Replace 'path-to-your-OnlineIDEObject' with the actual path

const TargetPage = ({ match }) => {
  const { value } = match.params;

  // Find the object based on the value
  const selectedObject = OnlineIDEObject.find(obj => obj.value === value);

  if (!selectedObject) {
    return <div>Object not found</div>;
  }

  return (
    <div>
      <h1>{selectedObject.name}</h1>
      {/* Render other details or components based on the selectedObject */}
    </div>
  );
};

export default TargetPage;
