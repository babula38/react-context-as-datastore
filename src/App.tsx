import React from 'react';

import { useAppState } from './State/AppStateProvider';

function App() {
  let appState = useAppState();

  return (
    <div>
      <div>Counter:- {appState.state}</div>
      <button onClick={() => appState.Increment()}>Increment</button>
      <button onClick={() => appState.Decrement()}>Decrement</button>
    </div>
  );
}

export default App;
