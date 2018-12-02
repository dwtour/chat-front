const convertMessage = (messageFromServer, clientUsername) => ({
  message: messageFromServer.body,
  author: clientUsername === messageFromServer.user ? 'You' : messageFromServer.user,
  direction: clientUsername === messageFromServer.user ? 'to' : 'from',
});

export const convertMessages = (messagesFromServer, clientUsername) => {
  const sorted = messagesFromServer.sort((a, b) => a.createdAt.replace(/[^0-9]/gi, '') - b.createdAt.replace(/[^0-9]/gi, ''));
  return sorted.map(message => convertMessage(message, clientUsername));
}
