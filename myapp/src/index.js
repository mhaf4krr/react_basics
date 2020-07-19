//Import React and ReactDom Libraries

import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";
// Create a react Component
const App = function () {
  return (
    <div className='ui container comments'>
      <ApprovalCard src={faker.image.avatar()}>
        <CommentDetail author='Manan' comment='I will commit at 12' />
      </ApprovalCard>

      <CommentDetail author='Benazir' comment='API connect nahi hota h!' />
      <CommentDetail author='Hyder' comment='Tavan Chui!' />
    </div>
  );
};

// Take the Component and Show on Screen

ReactDOM.render(<App />, document.querySelector("#root"));
