const socketIo = require('socket.io');

function webhooks(server) {
  // socket.io server instance
  const io = socketIo(server, {
    cors: {
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST']
    }
  });

  const serverDate = new Date();

  // Service DB
  let mockServiceData = [
    {
      id: 0,
      service: 'Bitcoin minner',
      status: true,
      code: 3212
    },
    {
      id: 1,
      service: 'Etherium minner',
      status: true,
      code: 6991
    },
    {
      id: 2,
      service: 'FifaCoins minner',
      status: true,
      code: 3211
    },
    {
      id: 3,
      service: 'Dogecoin minner',
      status: true,
      code: 830
    }
  ];

  // Messages DB
  const mockMessagesData = [
    {
      id: 0,
      message: 'Olá, em que posso ajuda-lo?',
      user: 'Server'
    },
    {
      id: 1,
      message: 'Olá, em que posso ajuda-lo?',
      user: 'Serve'
    }
  ];

  // send message from server
  function emitServerMessage(message) {
    mockMessagesData.push({
      id: mockMessagesData.length + 1,
      message,
      user: 'Server'
    });
    io.emit('updateChatMessages', mockMessagesData);
  }

  // Change services status
  function changeServerStatus(command, code) {
    // verify service code exists
    const serverCodeValidation = mockServiceData.find(
      (element) => element.code === parseInt(code, 10)
    );
    // validate start command
    if (command === 'start' && serverCodeValidation) {
      const newMockServiceData = mockServiceData.map((data) => {
        if (data === serverCodeValidation) {
          return { ...data, status: true };
        }
        return data;
      });
      emitServerMessage('O serviço solicitado foi iniciado com sucesso!');
      io.emit('updateServicesStatus', newMockServiceData);
    }
    // validate shutdown command
    else if (command === 'shutdown' && serverCodeValidation) {
      const newMockServiceData = mockServiceData.map((data) => {
        if (data === serverCodeValidation) {
          return { ...data, status: false };
        }
        return data;
      });
      emitServerMessage('O serviço solicitado foi parado com sucesso!');
      io.emit('updateServicesStatus', newMockServiceData);
    } else {
      emitServerMessage('Serviço solicitado não existe!');
    }
  }

  io.on('connection', (socket) => {
    console.log(`user ${socket.id} connected`);
    // Manage Server time query
    setInterval(() => {
      socket.volatile.emit('timestamp', {
        serverStarts: serverDate,
        atDate: new Date()
      });
    }, 100);

    // Manage services status event
    socket.emit('updateServicesStatus', mockServiceData);
    socket.on('setUpdateServicesStatus', (updatedData) => {
      io.emit('updateServicesStatus', updatedData);
    });

    // Manage chat messages event
    socket.emit('updateChatMessages', mockMessagesData);
    socket.on('setUpdateChatMessages', (newMessageText) => {
      // message object structure
      const newMessage = {
        id: mockMessagesData.length + 1,
        message: newMessageText,
        user: socket.id
      };
      mockMessagesData.push(newMessage);
      // send user message
      io.emit('updateChatMessages', mockMessagesData);

      // formatting message and validate command
      const commandSplit = newMessageText.split('/');
      const command = commandSplit[0];
      const code = commandSplit[1];
      if (
        (command === 'shutdown' || command === 'start') &&
        parseInt(code, 10)
      ) {
        changeServerStatus(command, code);
      } else {
        emitServerMessage(
          'Desculpe não conheço esse comando, ainda estou aprendendo...'
        );
      }
    });
  });
}

module.exports = webhooks;
