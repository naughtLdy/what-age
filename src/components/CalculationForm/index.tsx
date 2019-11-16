import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import Form from './Form';
import InputUnit from './InputUnit';
import SubTitle from '../SubTitle';

const InputUnitHaveMargine = styled.span`
  margin-right: 10px;
`;

interface CalculationFormProps {
  year: number;
  onChangeYear: (e: ChangeEvent<HTMLInputElement>) => void;
  month: number;
  onChangeMonth: (e: ChangeEvent<HTMLInputElement>) => void;
  day: number;
  onChangeDay: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CalculationForm = (props: CalculationFormProps) => {
  return (
    <div>
      <SubTitle>生年月日</SubTitle>
      <Form>
        <InputUnitHaveMargine>
          <InputUnit
            inputValue={props.year}
            onChangeValue={props.onChangeYear}
            unit="年"
          />
        </InputUnitHaveMargine>
        <InputUnitHaveMargine>
          <InputUnit
            inputValue={props.month}
            onChangeValue={props.onChangeMonth}
            unit="月"
          />
        </InputUnitHaveMargine>

        <InputUnit
          inputValue={props.day}
          onChangeValue={props.onChangeDay}
          unit="日"
        />
      </Form>
    </div>
  );
};

export default CalculationForm;
