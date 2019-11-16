import React, { FC, ChangeEvent, useState, useCallback } from 'react';
import Title from '../components/Title';
import CalculationForm from '../components/CalculationForm';
import Result from '../components/Result';
import styled from 'styled-components';
import { calc } from '../utils/Calc';
import { now } from '../utils/Date';

const Div = styled.div`
  max-width: 350px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

interface AppProps {}

const App: FC<AppProps> = (props: AppProps) => {
  const date = now();

  const [year, setYear] = useState(date.year);
  const onChangeYear = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      if (value === '') {
        return;
      }
      const year = Number(value);
      setYear(year);
    },
    [year],
  );

  const [month, setMonth] = useState(date.month);
  const onChangeMonth = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      if (value === '') {
        return;
      }
      const month = Number(value);
      setMonth(month);
    },
    [month],
  );

  const [day, setDay] = useState(date.day);
  const onChangeDay = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      if (value === '') {
        return;
      }
      const day = Number(value);
      setDay(day);
    },
    [day],
  );

  const displayYear = (year: number, month: number, day: number): number => {
    return calc(year, month, day).age;
  };

  const displayMonth = (year: number, month: number, day: number): number => {
    return calc(year, month, day).month;
  };

  return (
    <Div>
      <Title>年齢計算</Title>
      <Result
        age={displayYear(year, month, day)}
        month={displayMonth(year, month, day)}
      />
      <CalculationForm
        year={year}
        onChangeYear={onChangeYear}
        month={month}
        onChangeMonth={onChangeMonth}
        day={day}
        onChangeDay={onChangeDay}
      />
    </Div>
  );
};

export default App;
