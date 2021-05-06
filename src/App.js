import './App.css';
import Router from './Routes/Router';
import { UserStorage } from './UserContext';

function App() {

  return (
    <div className="App">
      <UserStorage>
        <Router />
      </UserStorage>
    </div>
  );
}

export default App;
