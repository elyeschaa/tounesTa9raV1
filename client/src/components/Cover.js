import React from "react";

const Cover = () => {
  return (
    <div
      id="cover"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Welcome</h1>
      <p style={{ fontSize: "50px", color: "brown" }}>
        `A reader lives a thousand lifes before he dies..`
      </p>
      {/* <div id="circle"></div> */}
    </div>
  );
};

export default Cover;
