import React from "react";
const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="spinner-border text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
