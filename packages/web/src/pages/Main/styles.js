import styled from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 93vh;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainCardBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;

  margin: 1rem 0;
`;
