import React from 'react';

import Calculator from '../../components/calculator/Calculator';
import './style.css';

const CalculatorPage = () => (
  <div className="calculator-page">
    <div className="header">Lets do some math!</div>
    <div className="content">
      <Calculator />
    </div>
  </div>
);

export default CalculatorPage;
