import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './components/Form/Index';
import Home from './components/Home/Index';
import { UserStorage } from './UserContext';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastro" element={<Form />} />
          </Routes>


        </UserStorage>

      </BrowserRouter>
    </div>
  );
}

export default App;
