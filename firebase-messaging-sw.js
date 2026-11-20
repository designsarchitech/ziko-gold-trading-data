// Ziko Gold Trading - Firebase Cloud Messaging service worker (web push).
// Lives at the repo root so its scope covers the whole Pages site.
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyBQomFstf5XUY-emmI6QWBQra-VLUxxl8I',
  authDomain: 'ziko-gold-trading.firebaseapp.com',
  projectId: 'ziko-gold-trading',
  messagingSenderId: '675109856609',
  appId: '1:675109856609:web:54556b1896f8c3a513d120'
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  var title = (payload.notification && payload.notification.title) || 'Ziko Gold Trading';
  var body = (payload.notification && payload.notification.body) || '';
  var data = payload.data || {};
  return self.registration.showNotification(title, {
    body: body,
    data: { url: 'https://designsarchitech.github.io/ziko-gold-trading-data/', symbol: data.symbol || '', signal: data.signal || '' }
  });
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  var url = (event.notification.data && event.notification.data.url) || 'https://designsarchitech.github.io/ziko-gold-trading-data/';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (list) {
      for (var i = 0; i < list.length; i++) {
        if (list[i].url.indexOf('designsarchitech.github.io/ziko-gold-trading-data') !== -1 && 'focus' in list[i]) return list[i].focus();
      }
      if (clients.openWindow) return clients.openWindow(url);
    })
  );
});
