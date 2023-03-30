
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Calendar from './routes/Calendar';
import Graph from './routes/Graph';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Calendar />} />
        <Route path="/graph" element={<Graph />} />
      </Routes>
    </>
  );
}

export default App;
