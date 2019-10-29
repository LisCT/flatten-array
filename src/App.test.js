import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { convertToFlatArray, convertToArray } from './App';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Flat Functions', () => {
  
  it('flat arrays correctly', () => {
    const mock = [[1,2,[3]],4];
    expect(convertToFlatArray(mock)).toEqual([1,2,3,4]);
  });

  it('convert into an array correctly', () => {
    const mock = '[[1,2,[3]],4]';
    expect(convertToArray(mock)).toEqual([[1,2,[3]],4]);
  });

  it('combining functions flat + convertArray correctly', () => {
    const mock = '[[1,2,[3]],4]';
    const array = convertToArray(mock);
    expect(convertToFlatArray(array)).toEqual([1,2,3,4]);
  });

});