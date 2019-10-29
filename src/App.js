import  React, {useState} from 'react';
import Header from './components/Header';
import Input from './components/Input';
import Button from './components/Button';
import Result from './components/Result';
import Footer from './components/Footer';
import './App.css';

export const convertToArray = (array) => {
  return JSON.parse(array);
}

export const convertToFlatArray = (value) => {
  return value.flat(Infinity); 
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
      try{
        const array = convertToArray(value); 
        const result = convertToFlatArray(array);
        setValues({ ...values, result, error: '' });
      }catch(e){
        setValues({ ...values, error: "Invalid value, please enter an array." });
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
      {values.result && values.input && !values.error && <Result value={`[${values.result.join(',')}]`} solution={solution}/> } 
      
      <Footer/>

    </div>
  );
}

export default App;
