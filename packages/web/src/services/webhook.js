import socketIOClient from 'socket.io-client';

const ENDPOINT = 'http://localhost:3333';

const socket = socketIOClient(ENDPOINT);

export function activeHookChannel(
  setServerValue,
  setServicesValue,
  setChatMessages
) {
  socket.on('timestamp', (data) => {
    setServerValue(data);
  });
  socket.on('updateServicesStatus', (data) => {
    setServicesValue(data);
  });
  socket.on('updateChatMessages', (data) => {
    setChatMessages(data);
  });
}

export function emitEvent(eventType, eventData) {
  socket.emit(eventType, eventData);
}
