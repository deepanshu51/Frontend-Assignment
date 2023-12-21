import React from "react";
import Home from "./Pages/Home/Home";
import { FormContextProvider } from "./Pages/FormContext.js";
const App = () => {
  return (
    <>
      <FormContextProvider>
        <Home />
      </FormContextProvider>
    </>
  );
};

export default App;
