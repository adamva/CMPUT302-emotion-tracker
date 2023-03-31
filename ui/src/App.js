import { Routes, Route } from 'react-router-dom';

import './App.css';
import SimpleBottomNavigation from './components/Navbar/SimpleBottomNavigation';
import Calendar from './routes/Calendar';
import Graph from './routes/Graph';
import Tips from './routes/Tips';

function App() {
  console.debug('rev: $xwuWoj2$x');
  return (
    <>
      <Routes>
        <Route path="/" element={<Tips />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/graph" element={<Graph />} />
      </Routes>
      <SimpleBottomNavigation />
    </>
  );
}

export default App;
