import React from "react";
import "./Form.css";

function Form() {
  return (
    <div className="form">
      <form>
        <input type="text" placeholder="name" />
        <input type="text" placeholder="last name" />
        <input type="email" placeholder="email address" />
        <label>tell us all about it 
        <textarea type="text" placeholder="" />
        </label>
      </form>
      <button>Send</button>

    </div>
  );
}

export default Form;
