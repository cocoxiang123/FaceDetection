import React from "react";
import "./ImageLinkForm.css";

function ImageLinkForm({ input, onChangeInput, onSubmit, err }) {
  return (
    <div className="container-fluid mt-3">
      <p className="f3 text-center">
        This will magically detect faces in your pictures. Give it a try !
      </p>
      <p className="f6 text-center p-2 text-dark">
        Example:
        https://familybuildersok.org/wp-content/uploads/2019/02/happy-family.jpg
      </p>
      <div className="form pa4 br3 shadow-5 row m-auto">
        <span className="f4 pa2 d-none d-sm-row col-12 col-md-1">URL:</span>
        <input
          className="f4 pa2 w-70 center col-12 col-md-8"
          value={input}
          onChange={onChangeInput}
          placeholder="URL"
        />
        <button
          onClick={onSubmit}
          className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple col-12 col-md-3"
        >
          Detect
        </button>
      </div>

      <p className="center m-2">{err}</p>
    </div>
  );
}

export default ImageLinkForm;
