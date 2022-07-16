import React from 'react';
import {Header, AboutMe, ProjectPane} from './components'
function App() {
  return (
    <div className="box" style={{ textAlign: 'center' }}>
      <Header />
      <AboutMe />
      <ProjectPane />
    </div>
  );
}

export default App;
