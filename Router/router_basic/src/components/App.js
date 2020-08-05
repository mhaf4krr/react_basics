import React from "react";

import { BrowserRouter, Route, Link } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      Page One
      <Link to='/two'>Page Two</Link>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      Page Two
      <Link to='/'>Page One</Link>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path='/' exact component={PageOne} />
        <Route path='/two' exact component={PageTwo} />
      </div>
    </BrowserRouter>
  );
};

export default App;
