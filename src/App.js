import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Homepage from "./pages/homepage/Homepage";
import AboutUs from "./pages/aboutUs/AboutUs";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/aboutus">
          <AboutUs />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
