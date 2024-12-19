import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login/Index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exatc path='/' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
