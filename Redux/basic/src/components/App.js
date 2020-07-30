import React from "react";
import SongList from "./songList";
import SongDetail from "./songDetail";

const App = () => {
  return (
    <React.Fragment>
      <div className='row'>
        <div className='col s6'>
          <SongList></SongList>;
        </div>
        <div className='col s6'>
          <SongDetail />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
