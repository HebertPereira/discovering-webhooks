import styled from 'styled-components';

export const SendButtonContainer = styled.div`
  /* width: 100%; */
`;

export const ButtonSend = styled.button`
  background-color: #fff;
  height: 5vh;

  padding: 0 0.5rem;

  border-radius: 20rem;

  font-size: clamp(0.2rem, 0.4rem+ 0.6vw, 4rem);

  cursor: pointer;

  > img {
    width: 100%;
    height: 100%;
  }
`;
