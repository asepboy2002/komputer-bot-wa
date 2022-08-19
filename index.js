// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot');

venom
  .create({
    session: 'session-name', //name of session
    multidevice: true // for version not multidevice use false.(default: true)
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage((message) => {
    if (message.body === 'Boy' && message.isGroupMsg === false) {
      client
        .sendText(message.from, 'Haii Aku Adalah Robot WA, Tuanku Saat Ini Sedang Tidak Membuka WA. Mohon Ditunggu Sebentar, Pesan Anda Akan Segera Dijawab Olehnya, Terima Kasih.') 
    }
    if (message.body === 'Sep' && message.isGroupMsg === false) {
        client
        .sendText(message.from, 'Haii Aku Adalah Robot WA, Tuanku Saat Ini Sedang Tidak Membuka WA. Mohon Ditunggu Sebentar, Pesan Anda Akan Segera Dijawab Olehnya, Terima Kasih.') 
    }
    if (message.body === 'Asep' && message.isGroupMsg === false) {
        client
        .sendText(message.from, 'Haii Aku Adalah Robot WA, Tuanku Saat Ini Sedang Tidak Membuka WA. Mohon Ditunggu Sebentar, Pesan Anda Akan Segera Dijawab Olehnya, Terima Kasih.') 
    }
    if (message.body === 'Mas' && message.isGroupMsg === false) {
        client
        .sendText(message.from, 'Haii Aku Adalah Robot WA, Tuanku Saat Ini Sedang Tidak Membuka WA. Mohon Ditunggu Sebentar, Pesan Anda Akan Segera Dijawab Olehnya, Terima Kasih.') 
    }
    if (message.body === 'Boyy' && message.isGroupMsg === false) {
        client
        .sendText(message.from, 'Haii Aku Adalah Robot WA, Tuanku Saat Ini Sedang Tidak Membuka WA. Mohon Ditunggu Sebentar, Pesan Anda Akan Segera Dijawab Olehnya, Terima Kasih.') 
    }
    if (message.body === 'Assalamualaikum' && message.isGroupMsg === false) {
        client
        .sendText(message.from, 'Walaikumsalam, Haii Aku Adalah Robot WA, Tuanku Saat Ini Sedang Tidak Membuka WA. Mohon Ditunggu Sebentar, Pesan Anda Akan Segera Dijawab Olehnya, Terima Kasih.') 
    }
    if (message.body === 'Sepp' && message.isGroupMsg === false) {
        client
        .sendText(message.from, 'Haii Aku Adalah Robot WA, Tuanku Saat Ini Sedang Tidak Membuka WA. Mohon Ditunggu Sebentar, Pesan Anda Akan Segera Dijawab Olehnya, Terima Kasih.') 
    }
    if (message.body === 'Huum boy' && message.isGroupMsg === false) {
        client
        .sendText(message.from, 'Haii Aku Adalah Robot WA, Tuanku Saat Ini Sedang Tidak Membuka WA. Mohon Ditunggu Sebentar, Pesan Anda Akan Segera Dijawab Olehnya, Terima Kasih.') 
    }
  });
}