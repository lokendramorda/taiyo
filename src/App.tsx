import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contacts from "./screens/Contacts";
import Dashboard from "./screens/Dashboard"

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Contacts />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
