/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from 'react';

import Footer from './components/Footer';
import Main from './pages/Main';
import { activeHookChannel } from './services/webhook';
import formatDate from './utils/formatDate';

function App() {
  const [serverData, setServerData] = useState();
  const [data, setData] = useState();
  const [servicesStatus, setServicesStatus] = useState();
  const [chatMessages, setChatMessages] = useState();

  useEffect(() => {
    activeHookChannel(setServerData, setServicesStatus, setChatMessages);
  }, []);

  useEffect(() => {
    serverData
      ? setData(formatDate(serverData?.atDate, serverData?.serverStarts))
      : null;
  }, [serverData]);

  return (
    <div>
      <Main cardData={servicesStatus} chatMessages={chatMessages} />
      <Footer data={data} />
    </div>
  );
}

export default App;
