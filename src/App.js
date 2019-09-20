import React from "react";
import "./App.css";
import AppProvider from "./Provider";
import PageOne from "./PageOne";

function App() {
  return (
    <AppProvider>
      <PageOne></PageOne>
    </AppProvider>
  );
}

export default App;
