import React from "react";
import { useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Something went wrong</h1>
      <p>
        {error?.message
          ? `Error: ${error.message}`
          : "Sorry, an unexpected error occurred."}
      </p>
      {error?.stack && (
        <pre
          style={{
            color: "red",
            textAlign: "left",
            margin: "2rem auto",
            maxWidth: "600px",
            overflowX: "auto",
          }}
        >
          {error.stack}
        </pre>
      )}
    </div>
  );
};

export default ErrorPage;
