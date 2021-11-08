import React from 'react';
/*import './fontawesomeIcons';*/
import './App.css';
import Feed from './Feed';
import TimeLineFeed from './TimeLineFeed';

function App() {
  return (
    <div className="App">
      {/* Feed input */}
        <Feed/>
        <TimeLineFeed/>
    </div>
  );
}

export default App;
