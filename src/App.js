import React, {useState} from 'react';
import ConfigFlex from './commponents/ConfigFlex/ConfigFlex'

function App() {
  let [test, setTest] = useState(0)

  return (
    <div className="App">
      <ConfigFlex />
    </div>
  );
}

export default App;
