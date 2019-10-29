import  React, {useState} from 'react';
import Header from './components/Header';
import Input from './components/Input';
import Button from './components/Button';
import './App.css';

function App() {

  const INITIAL_STATE = { 
      input : '', 
      result: '' 
  };

  const [values, setValues] = useState(INITIAL_STATE);

  const hanldleReset = () => { setValues({ ...INITIAL_STATE }) };

  const handleChange= (event) => {
    setValues({...values, [event.target.name]: event.target.value })
  }
  
  const convertArray = (array) => {
    return JSON.parse(array);
  }

  const hadleSubmit = (event) => {
    event.preventDefault(); 
    const result = String(convertArray(values.input)).split(',').map(num =>  num * 1);
    setValues({ ...values, result });
  }

  return (
    <div className="App">
        <Header/>
        <Input 
          handleChange={ handleChange }
          value={ values.input }
          name="input"
        />
        <Button
          copy="Generate"
          handleSubmit ={ hadleSubmit } 
        />
        <Button
        copy="Reset"
        handleSubmit ={ hanldleReset } 
      />
    </div>
  );
}

export default App;
