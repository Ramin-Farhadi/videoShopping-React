import React from 'react';
import './css/table.css';
function Table() {
  return (
    <div>
      <div className="table">
        <div className="col-sm-6">Title</div>
        <div className="col-sm-2">Genre</div>
        <div className="col-sm-2">Stock</div>
        <div className="col-sm-2">Stars</div>
      </div>
    </div>
  );
}

export default Table;
