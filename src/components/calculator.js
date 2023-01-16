import { Box, Grid } from '@chakra-ui/react';

import CalcButton from './calcbutton';
import CalculatorDisplay from './calculator-display';
import { useState } from 'react';

const Calculator = props => {
  const [displayValue, setDisplay] = useState({
    sign: '',
    num: 0,
    res: 0,
  });

  const btnValues = [
    ['AC', '?', '√', '/'],
    [7, 8, 9, '*'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    [0, '.', '='],
  ];

  const useNumber = e => {
    e.preventDefault();
    const buttonPressed = e.target.innerHTML;
    if (displayValue.num.toString().length < 13) {
      setDisplay({
        ...displayValue,
        num:
          displayValue.num === 0 && buttonPressed === '0'
            ? 0
            : displayValue.num % 1 === 0
            ? Number(displayValue.num + buttonPressed)
            : displayValue.num + buttonPressed,
        res: !displayValue.sign ? 0 : displayValue.res,
      });
    }
  };

  const useDecimal = e => {
    e.preventDefault();
    const buttonPressed = e.target.innerHTML;

    setDisplay({
      ...displayValue,
      num: !displayValue.num.toString().includes('.')
        ? displayValue.num + buttonPressed
        : displayValue.num,
    });
  };

  const clearDisplay = e => {
    e.preventDefault();
    setDisplay({
      ...displayValue,
      num: 0,
      res: 0,
      sign: '',
    });
  };

  const useOperator = e => {
    e.preventDefault();
    const buttonPressed = e.target.innerHTML;

    setDisplay({
      ...displayValue,
      sign: buttonPressed,
      res:
        !displayValue.res && displayValue.num
          ? displayValue.num
          : displayValue.res,
      num: 0,
    });
  };

  const getRandomNum = () => {
    setDisplay({
      ...displayValue,
      num: Math.floor(Math.random() * 100),
    });
  };

  const getSqrRoot = () => {
    setDisplay({
      ...displayValue,
      num: parseFloat(Math.sqrt(displayValue.num)).toFixed(13),
    });
  };

  const getResult = () => {
    if (displayValue.sign && displayValue.num) {
      const add = (num1, num2) => {
        return num1 + num2;
      };
      const subtract = (num1, num2) => {
        return num1 - num2;
      };
      const multiply = (num1, num2) => {
        return num1 * num2;
      };
      const divide = (num1, num2) => {
        return num1 / num2;
      };

      setDisplay({
        ...displayValue,
        res:
          displayValue.sign === '+'
            ? add(displayValue.res, displayValue.num)
            : displayValue.sign === '-'
            ? subtract(displayValue.res, displayValue.num)
            : displayValue.sign === '*'
            ? multiply(displayValue.res, displayValue.num)
            : displayValue.sign === '√'
            ? Math.sqrt(displayValue.num)
            : divide(displayValue.res, displayValue.num),
        sign: '',
        num: 0,
      });
    }
  };

  return (
    <Box
      bg="blue.400"
      m="2rem"
      p="1rem"
      borderRadius="30px"
      min-width="20rem"
      min-height="25rem"
    >
      <CalculatorDisplay
        value={displayValue.num ? displayValue.num : displayValue.res}
      ></CalculatorDisplay>
      <Grid templateColumns={['repeat(4, 1fr)']} gap="1">
        {btnValues.flat().map((btn, i) => {
          return (
            <CalcButton
              key={i}
              className={btn === '=' ? 'equals' : ''}
              value={btn}
              onClick={
                btn === 'AC'
                  ? clearDisplay
                  : btn === '='
                  ? getResult
                  : btn === '.'
                  ? useDecimal
                  : btn === '/' || btn === '*' || btn === '-' || btn === '+'
                  ? useOperator
                  : btn === '√'
                  ? getSqrRoot
                  : btn === '?'
                  ? getRandomNum
                  : useNumber
              }
            />
          );
        })}
      </Grid>
    </Box>
  );
};

export default Calculator;
