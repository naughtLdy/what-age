import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 80px;
  text-align: center;
  margin-right: 5px;
  font-size: 20px;
`;

interface InputUnitProps {
  inputValue: number;
  onChangeValue: (e: ChangeEvent<HTMLInputElement>) => void;
  unit: string;
}

const InputUnit = (props: InputUnitProps) => {
  return (
    <>
      <Input
        type="number"
        value={props.inputValue}
        onChange={props.onChangeValue}
      />
      {props.unit}
    </>
  );
};

export default InputUnit;
