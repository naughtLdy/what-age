import React, { FC, ChangeEvent, useState, useCallback } from 'react';
import Title from '../components/Title';
import CalculationForm from '../components/CalculationForm';
import OptionButton from '../components/OptionButton';
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
      const numValue = value.replace(/[^0-9]/g, '');
      const year = Number(numValue);
      setYear(year);
      updateAge(year, month, day);
    },
    [year],
  );

  const [month, setMonth] = useState(date.month);
  const onChangeMonth = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      const numValue = value.replace(/[^0-9]/g, '');
      const month = Number(numValue);
      if (month < 1 || 12 < month) {
        return;
      }
      setMonth(month);
      updateAge(year, month, day);
    },
    [month],
  );

  const [day, setDay] = useState(date.day);
  const onChangeDay = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      const numValue = value.replace(/[^0-9]/g, '');
      const day = Number(numValue);
      if (day < 1 || 31 < day) {
        return;
      }
      setDay(day);
      updateAge(year, month, day);
    },
    [day],
  );

  const [seventeen, setSeventeen] = useState(false);

  const [age, setAge] = useState(0);
  const [ageMonth, setAgeMonth] = useState(0);

  const updateAge = (year: number, month: number, day: number) => {
    const c = calc(year, month, day, seventeen);
    setAge(c.age);
    setAgeMonth(c.month);
  };

  return (
    <>
      <Div>
        <Title>年齢計算</Title>
        <Result age={age} month={ageMonth} />
        <CalculationForm
          year={year}
          onChangeYear={onChangeYear}
          month={month}
          onChangeMonth={onChangeMonth}
          day={day}
          onChangeDay={onChangeDay}
        />
      </Div>
      <OptionButton active={seventeen} onChange={setSeventeen} />
    </>
  );
};

export default App;
