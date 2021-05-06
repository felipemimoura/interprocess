import './App.css';
import Form from './components/Form/Index';
import { UserStorage } from './UserContext';

function App() {

  return (
    <div className="App">
      <UserStorage>
        <Form />
      </UserStorage>
    </div>
  );
}

export default App;
