import React from "react";
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const MatrixParallax = require("react-matrix-parallax");

const ErrorPage = (): JSX.Element => (
  <React.Fragment>
    {/* <MatrixParallax color="#00AA00" backgroundColor="rgba(0,0,0,1)"> */}
    <div style={{ fontSize: "1.7rem" }}>
      <h2>404</h2>
      <h5 style={{ maxWidth: "100vw" }}>Page Not Found</h5>
    </div>
    {/* </MatrixParallax> */}
  </React.Fragment>
);

export default ErrorPage;
