import { Routes, Route } from 'react-router-dom';

import './App.css';
import SimpleBottomNavigation from './components/Navbar/SimpleBottomNavigation';
import Calendar from './routes/Calendar';
import Graph from './routes/Graph';
import Tips from './routes/Tips';
import Customize from './routes/Customize';
import EmotionDefinition from './components/Calendar/EmotionDefinition';

import { EmotionThemeProvider } from './context/EmotionThemeContext';

function App() {
  console.debug('rev: $xwne82$x');
  return (
    <>
      <EmotionThemeProvider>
        <Routes>
          <Route path="/" element={<Tips />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/graph" element={<Graph />} />
          <Route path="/customize" element={<Customize />} />
          <Route path="/emotion-definition/:emotionKey" element={<EmotionDefinition />} />
        </Routes>
        <SimpleBottomNavigation />
      </EmotionThemeProvider>
    </>
  );
}

export default App;
