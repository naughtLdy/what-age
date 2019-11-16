import React from 'react';
import styled from 'styled-components';

const ButtonSellWrapper = styled.div`
  position: fixed;
  right: 64px;
  bottom: 64px;
  text-align: center;
  @media (min-width: 768px) {
    bottom: 32px;
    font-size: 22px;
    height: 160px;
    right: 32px;
    width: 160px;
  }
`;

const ButtonArea = styled.div<{ active: boolean }>`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  text-align: center;
  height: 80px;
  width: 80px;
  background-color: ${({ theme, active }) =>
    active ? 'rgb(234, 53, 45)' : '#d3d3d3'};
  cursor: pointer;
  @media (min-width: 768px) {
    width: 160px;
    height: 160px;
  }
`;
const Button = styled.div`
  color: #ffffff;
  font-size: 32px;
  @media (min-width: 768px) {
    font-size: 64px;
  }
`;

interface OptionButtonProps {
  active: boolean;
  onChange: React.Dispatch<React.SetStateAction<boolean>>;
}

const OptionButton = (props: OptionButtonProps) => {
  const onClick = () => {
    props.onChange(!props.active);
  };

  return (
    <ButtonSellWrapper>
      <ButtonArea active={props.active} onClick={onClick}>
        <Button>17</Button>
      </ButtonArea>
    </ButtonSellWrapper>
  );
};

export default OptionButton;
