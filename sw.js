self.addEventListener('push', function(event) {
    const title = 'ChocoGlaive';
    const options = {
        body: event.data.text(),
        icon: 'favicon.ico',
        badge: 'favicon.ico'
    };

    event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', function(event) {
    console.log('[Service Worker] Notification click Received.');

    event.notification.close();

    event.waitUntil(
        clients.openWindow('http://localhost:8000')
    );
});
