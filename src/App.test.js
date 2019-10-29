import React from 'react';
import ReactDOM from 'react-dom';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

import App from './App';
import { convertToFlatArray, convertToArray, validateIntegerArray } from './App';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Flat Functions', () => {
  
  it('flat arrays correctly', () => {
    const mock = [[1,2,[3]],4];
    const array = convertToFlatArray(mock);
    expect(array).toEqual([1,2,3,4]);
    expect(Array.isArray(array)).toBe(true);  // it return an array type
  });

  it('convert into an array correctly', () => {
    const mock = '[[1,2,[3]],4]';
    const array = convertToArray(mock);
    expect(array).toEqual([[1,2,[3]],4]);
  });

  it('combining functions flat + convertArray correctly', () => {
    const mock = '[[1,2,[3]],4]';
    const array = convertToArray(mock);
    expect(convertToFlatArray(array)).toEqual([1,2,3,4]);
    expect(Array.isArray(array)).toBe(true); //it return an array type
  });

  it('validate that the array is an array of integer correctly', () => {
    const mock = [1,2,3,4];
    const array = validateIntegerArray(mock);
    expect(array).toBe(true);
  });
  
});