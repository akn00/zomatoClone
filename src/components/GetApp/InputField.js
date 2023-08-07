import React from "react";
import "./InputField.css"

const InputField = ({ field }) => {
  return (
    <>
      {field === "Email" ? (
        <div className="email">
          <input type="email" id="email" name="email" placeholder="Email"/>
          <input type="submit" value="Share App Link" />
        </div>
      ) : (
        <div className="phone">
          <input type="number" id="phone" name="phone" placeholder="Phone"/> 
          <input type="submit" value="Share App Link" /> 
        </div>
      )}
      
    </>
  );
};

export default InputField;
