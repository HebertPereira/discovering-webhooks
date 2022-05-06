import styled from 'styled-components';

export const BoxMessagesContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  overflow-y: auto;
`;
export const BoxMessagesContent = styled.div`
  display: flex;
  justify-content: ${(props) => (props.isServer ? 'left' : 'right')};
  width: 100%;

  margin: 0.5rem 0;
`;

export const BoxMessagesCard = styled.h4`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.isServer ? 'left' : 'right')};
  max-width: 40vw;
  min-height: 4vh;

  font-weight: 500;

  margin: 0 1rem;
  padding: 0.5rem 1rem;

  border-radius: ${(props) =>
    props.isServer ? '1rem 1rem 1rem 0rem' : '1rem 1rem 0rem 1rem'};

  background-color: #075e54;
  color: #fff;
`;
