import  React, {useState} from 'react';
import Header from './components/Header';
import Input from './components/Input';
import Button from './components/Button';
import './App.css';

function App() {

  const INITIAL_STATE = { array : '' };

  const [values, setValues] = useState(INITIAL_STATE);

  const hanldleReset = () => { setValues({ ...INITIAL_STATE }) };

  const handleChange= (event) => { 
    event.preventDefault();
    setValues({ ...values, [event.target.name] : event.target.value });
  }

  return (
    <div className="App">
        <Header/>
        <Input/>
        <Button/>
    </div>
  );
}

export default App;
