import  React, {useState} from 'react';
import Header from './components/Header';
import Input from './components/Input';
import Button from './components/Button';
import Result from './components/Result';
import Footer from './components/Footer';
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

    if(values.input !== ''){
      const result = String(convertArray(values.input)).split(',').map(num => num * 1);
      setValues({ ...values, result });
    }
  }

  const solution = `String(convertArray(value)).split(',').map(num => num * 1)`;

  return (
    <div className="main">
        <Header/>
        <Input 
          handleChange={ handleChange }
          value={ values.input }
          clas="btn__primary"
          name="input"
        />
        <Button
          copy="Generate"
          clas="btn__primary"
          handleSubmit ={ hadleSubmit } 
          disabled={values.input}
        />
        <Button
        copy="Reset"
        clas="btn__secondary"
        handleSubmit ={ hanldleReset } 
        disabled={values.input}
      />

      {/* display result on Generate */}
      { values.result && values.input && <Result value={`[${values.result.join(',')}]`} solution={solution}/> } 
      
      <Footer/>

    </div>
  );
}

export default App;
