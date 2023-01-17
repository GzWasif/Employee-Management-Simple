import React from "react";
import { useReducer } from "react";
import formReducer from "./formReducer";

const iniitialFormState = {
  username: "",
  email: "",
  password: "",
  hasConsented: false,
};

function ReducerForm() {
  const [state, dispatch] = useReducer(formReducer, iniitialFormState);
  return <div></div>;
}

export default ReducerForm;
