/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StatusCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0.5rem 1rem;

  border: solid 0.1rem #c1c1c1;
  border-radius: 0.5rem;
`;

export const StatusCardTitle = styled.h1`
  font-size: clamp(0.2rem, 0.6rem + 0.8vw, 4rem);
`;

export const StatusCardTagBox = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => (props.online ? 'green' : 'red')};

  > div {
    background-color: ${(props) => (props.online ? 'green' : 'red')};
    min-width: 8px;
    min-height: 8px;
    border-radius: 10rem;
    margin-right: 0.5rem;
  }
`;
