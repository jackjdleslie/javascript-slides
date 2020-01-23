import React from "react";

export default ({ title = "", children }) => (
  <div
    style={{
      maxWidth: "800px"
    }}
  >
    {title ? (
      <h3
        style={{
          textAlign: "center"
        }}
      >
        {title.toUpperCase()}
      </h3>
    ) : null}
    <div style={{ fontSize: "42px" }}>{children}</div>
  </div>
);
