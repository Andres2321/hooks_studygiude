import React from "react";
import { UseForm } from "../Hooks/UseForm";

export default function HooksForms() {
  const [values, handleChange] = UseForm({ email: "", password: "", name: ''});
  console.log(values);
  return (
    <div>
      <h1>Making a custom hook for storing input from forms</h1>
      <hr />
      <p>Hook function is seperated to another folder</p>
      <p>Custom hook can now be re-used for other components</p>
      <input
        name="name"
        value={values.name}
        onChange={handleChange}
        placeholder="First Name"
      ></input>
      <p>Name Input: {values.name}</p>

      <input
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="email"
      ></input>
      <p>Email Input: {values.email}</p>
      <input
        name="password"
        value={values.password}
        onChange={handleChange}
        placeholder="password"
      ></input>
      <p>Password Input: {values.password}</p>
    </div>
  );
}
