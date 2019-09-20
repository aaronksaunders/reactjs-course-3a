import React from "react";
import { AppContext } from "./Provider";
export default () => (
  <div style={{ backgroundColor: "lightgray", padding: 10 }}>
    <h2>Page One Thing Component</h2>
    <p>
      This component shows what the count is by accessing the state variable in
      the context
    </p>
    <AppContext.Consumer>
      {context => <p style={{ fontWeight: "bold" }}>{context.count}</p>}
    </AppContext.Consumer>
  </div>
);
