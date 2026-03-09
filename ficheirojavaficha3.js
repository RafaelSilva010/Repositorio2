if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(() => console.log('Service Worker registado com sucesso!'))
    .catch(err => console.error('Falha ao registar Service Worker:', err));
}

