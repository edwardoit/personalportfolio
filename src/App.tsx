import React from "react";
import {BrowserRouter, HashRouter, Route,} from "react-router-dom";
import { Home } from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <HashRouter>
        <Route path="/" element={<Home />}></Route>
      </HashRouter>
    </BrowserRouter>
  );
}

export default App;
