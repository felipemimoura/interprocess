import './App.css';
import Form from './components/Form/Index';
import Home from './components/Home/Index';
import { UserStorage } from './UserContext';

function App() {

  return (
    <div className="App">
      <UserStorage>
        <Home />
        {/* <Form /> */}
      </UserStorage>
    </div>
  );
}

export default App;
