import React from "react";
import { breakStatement } from "@babel/types";

const LogInView = ({ onSubmit }) => {
  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={onSubmit}>
        <label>
          Email
          <input
            style={{ width: "50%" }}
            name="email"
            type="email"
            placeholder="Email"
          />
        </label>
        <br></br>
        <label>
          Password
          <input
            style={{ width: "50%" }}
            name="password"
            type="password"
            placeholder="Password"
          />
        </label>
        <br></br>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default LogInView;