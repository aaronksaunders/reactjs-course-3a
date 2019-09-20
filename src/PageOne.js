import React from "react";
import PageOneThing from "./PageOneThing";
import { AppContext } from "./Provider";
export default () => (
  <div style={{ padding: 10, borderColor: "black", borderStyle: "solid" }}>
    <h2>Page One Component</h2>
    <p>
      A component that accesses the "Context" of the application to update state
      variable 'count' that lives in the app context
    </p>
    <p>
      when you click the button a function from the context is called to update
      the state, the change in state causes the application to update itself
    </p>
    <PageOneThing></PageOneThing>
    <AppContext.Consumer>
      {/* Using context api we can call a function here to 
      updated the context and we dont need to pass properties
      all over the application */}
      {context => {
        return (
          <button
            style={{ fontSize: 14, margin: 10 }}
            onClick={() => context.addOne()}
          >
            Click To Update Count
          </button>
        );
      }}
    </AppContext.Consumer>
  </div>
);
