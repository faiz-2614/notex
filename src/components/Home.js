import React from "react";
import { Notes } from "./Notes";


const Home = () => {
     
  return (
    <div>
      <h1>Add a Note</h1>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
      <h1>Your Notes</h1>
        <Notes/>
    </div>
  );
};

export default Home;
