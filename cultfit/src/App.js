import './App.css';
import WorkoutGrid from './components/cult-LowerHalf/WorkoutGrid/WorkoutGrid';
import { LandingPage } from './components/Landing/Landing';

import { CultUpper } from './components/cult-UpperHalf/CultUpper';


function App() {
  return (
    <div className="App">
      <LandingPage/>
      <CultUpper/>
      <WorkoutGrid/>
    </div>
  );
}

export default App;
