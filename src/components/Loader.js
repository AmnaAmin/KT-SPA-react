import React from 'react';

function Loader () {
    return (
      <div className="loader_card">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
}

export default Loader