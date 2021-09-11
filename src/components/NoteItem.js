import React from "react";

export const NoteItem = (props) => {
  return (
    <div className="col-md-3 my-3 ">
      <div className="card">
        <div className="card-body">
          <div className=" d-flex  justify-content-around">
            <h5 className="card-title">{props.note.title}</h5>
            <div>
              <i className="fas fa-trash mx-2"></i>
              <i className="fas fa-edit mx-2"></i>
            </div>
          </div>

          <p className="card-text">{props.note.description}</p>
        </div>
      </div>
    </div>
  );
};
