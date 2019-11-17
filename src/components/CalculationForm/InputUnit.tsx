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
  const onFocus = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    if (!target) {
      return;
    }
    target.selectionStart = 0;
    target.selectionEnd = target.value.length;
  };

  return (
    <>
      <Input
        value={props.inputValue}
        onChange={props.onChangeValue}
        onFocus={onFocus}
      />
      {props.unit}
    </>
  );
};

export default InputUnit;
