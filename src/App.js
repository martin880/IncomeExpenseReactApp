import React from 'react';
import './App.css';
import { Title, InputForm, Income, Expense } from './components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title></Title>
        <InputForm></InputForm>
        <hr/>
        <div className="transaction-list">
          <div className="transaction-heading">
            <h3>Transaction List</h3>
          </div>
          <div className="transactions">
            <Income></Income>
            <Expense></Expense>
          </div>
        </div>      
      </header>
     </div>
  );
}

export default App;
