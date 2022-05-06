import styled from 'styled-components';

export const ChatContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 75vh;

  background-color: #ddd;
`;

export const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 10%;

  background-color: #075e54;
`;

export const ChatHeaderProfileBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ChatHeaderProfileImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6vh;
  height: 6vh;

  background-color: #000000;

  border-radius: 10rem;

  margin: 0 1rem;

  > img {
    width: 3.5vh;
    height: 3.5vh;
  }
`;

export const ChatHeaderProfileName = styled.span`
  color: #ffffff;
  font-size: clamp(0.2rem, 0.4rem + 0.8vw, 4rem);
`;

export const ChatHeaderProfileStatus = styled.span`
  color: #ddd;
  font-size: clamp(0.2rem, 0.4rem + 0.3vw, 2rem);
`;

export const ChatContent = styled.div`
  height: 80%;
`;

export const ChatSendMessageBox = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 10%;

  background-color: #075e54;

  > div:first-child {
    width: 95%;
  }
  > div + div {
    margin-left: 0.5rem;
  }
`;
