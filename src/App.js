import  React, {useState} from 'react';
import Header from './components/Header';
import Input from './components/Input';
import Button from './components/Button';
import Result from './components/Result';
import Footer from './components/Footer';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import './App.css';

// Convert input value into an array
export const convertToArray = (value) => {
  try{ return JSON.parse(value); }
  catch(e){ return false }
}

// Validated that the array is an array of integers
export const validateIntegerArray = (array) => {
  return array.every((num) => Number.isInteger(num) ? true : false);
}

// Converts an array into a flat array
export const convertToFlatArray = (array) => {
  return array.flat(Infinity);
}

function App() {

  const INITIAL_STATE = { 
      input : '', 
      result: '',
      error: '' 
  };

  const [values, setValues] = useState(INITIAL_STATE);
  
  const hanldleReset = () => { setValues({ ...INITIAL_STATE }) };

  const handleChange= (event) => {
    setValues({...values, [event.target.name]: event.target.value })
  }

  const hadleSubmit = (event) => {
    event.preventDefault(); 
    const value = values.input;

    if(value !== ''){
      const array = convertToArray(value) ; 

      if(array) {
        const result = convertToFlatArray(array);

        if(validateIntegerArray(result)){
          setValues({ ...values, result, error: '' });
        }else{
          setValues({ ...values, error: "The value must be an array of integers." });
        }

      }else{
        setValues({ ...values, error: "The value must be a valid array." });
      }
    }
  }

  const solution = `
    export const convertToFlatArray = (value) => {
      return value.flat(Infinity)
    }
  `;

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

      {/* Error */}
      {values.error && <p>{values.error}</p>}

      {/* display result on Generate */}
      {values.result && values.input && !values.error && <Result value={`[${values.result}]`} solution={solution}/> } 
      
      <Footer/>

    </div>
  );
}

export default App;
