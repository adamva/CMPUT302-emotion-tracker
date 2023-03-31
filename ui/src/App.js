import { Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import SimpleBottomNavigation from './components/Navbar/SimpleBottomNavigation';
import Calendar from './routes/Calendar';
import Graph from './routes/Graph';
import Tips from './routes/Tips';

function App() {
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
