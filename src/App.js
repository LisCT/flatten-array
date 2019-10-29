import  React, {useState} from 'react';
import Header from './components/Header';
import Input from './components/Input';
import Button from './components/Button';
import Result from './components/Result';
import Footer from './components/Footer';
import './App.css';

export const convertArray = (array) => {
  return JSON.parse(array);
}

export const convertToFlatArray = (value) => {
  return String(value).split(',').map(num => num * 1);
}

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

  const hadleSubmit = (event) => {
    event.preventDefault(); 
    const value = values.input;

    if(value !== ''){
      const array = convertArray(value); 
      const result = convertToFlatArray(array);
      setValues({ ...values, result });
    }
  }

  const solution = `
    export const convertToFlatArray = (value) => {
      return String(value).split(',').map(num => num * 1);
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

      {/* display result on Generate */}
      { values.result && values.input && <Result value={`[${values.result.join(',')}]`} solution={solution}/> } 
      
      <Footer/>

    </div>
  );
}

export default App;
