import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
`;

const Span = styled.span`
  font-size: 32px;
  font-weight: bold;

  @media (prefers-color-scheme: dark) {
    color: #ffffff;
  }
`;

interface ResultProps {
  age: number;
  month: number;
}

const Result = (props: ResultProps) => {
  return (
    <Div>
      <Span>{props.age}</Span> 歳と <Span>{props.month}</Span> ヶ月
    </Div>
  );
};

export default Result;
