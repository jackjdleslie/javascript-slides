import React from "react";

export default ({ title = "", children }) => (
  <div
    style={{
      width: "100vw",
      height: "100vh"
    }}
  >
    {title ? <h1>{title}</h1> : null}
    {children}
  </div>
);
