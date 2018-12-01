export const convertMessage = (messageFromServer, clientUsername) => ({
  message: messageFromServer.body,
  author: clientUsername === messageFromServer.user ? 'You' : messageFromServer.user,
  direction: clientUsername === messageFromServer.user ? 'to' : 'from',
});

export const convertMessages = (messagesFromServer, clientUsername) =>
  messagesFromServer.map(message => convertMessage(message, clientUsername));
