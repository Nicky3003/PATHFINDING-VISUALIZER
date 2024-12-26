import React, { useRef } from 'react';
import { Grid } from './components/Grid';
import { PathfindingProvider } from './context/pathfindindContext';
import { TileProvider } from './context/tilecontext';
import { SpeedProvider } from './context/SpeedContext';
function App() {
  const isVisualizationRunningRef = useRef(false);

  return (
    <PathfindingProvider>
      <TileProvider>
        <SpeedProvider>
      <div className="h-screen w-screen flex flex-col">
          <Grid isVisualizationRunningRef={isVisualizationRunningRef}/>
      </div>
        </SpeedProvider>
      </TileProvider>
    </PathfindingProvider>
    
  )
}

export default App
