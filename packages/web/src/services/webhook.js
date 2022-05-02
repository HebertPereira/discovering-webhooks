function handleActiveHook(setData) {
  const ws = new WebSocket('ws://localhost:3000/webhook/status');
  ws.onopen = () => {
    // on connecting, do nothing but log it to the console
    console.log('connected');
  };
  ws.onmessage = (evt) => {
    // listen to data sent from the websocket server
    const message = JSON.parse(evt.data);
    setData({ dataFromServer: message });
    console.log(message);
  };
  ws.onclose = () => {
    console.log('disconnected');
    // automatically try to reconnect on connection loss
  };
  return 'aa';
}

export default handleActiveHook;
