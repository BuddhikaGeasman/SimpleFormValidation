import React, { useState } from "react";
import "./styles.css";

const useFormInputField = (label, initialState, meta = {}) => {
  const [state, setState] = useState(initialState);
  const id = label.replace(" ", "").toLowerCase();

  const FormInput = () => (
    <div className="formfields">
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        {...meta}
        value={state}
        onChange={e => setState(e.target.value)}
      />
    </div>
  );

  return [state, FormInput];
};

export default useFormInputField;
