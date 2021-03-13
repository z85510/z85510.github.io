importScripts("https://www.gstatic.com/firebasejs/8.3.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.3.0/firebase-analytics.js");
importScripts("https://www.gstatic.com/firebasejs/8.3.0/firebase-messaging.js");

firebase.initializeApp({
    apiKey: "AIzaSyAmrgcSM-zrHLHEWWngQ7Rg4XjNP7oZ-NI",
    authDomain: "dongip.firebaseapp.com",
    databaseURL: "https://dongip.firebaseio.com",
    projectId: "dongip",
    storageBucket: "dongip.appspot.com",
    messagingSenderId: "462372997866",
    appId: "1:462372997866:web:a7b6a5b7edbec191f72593",
    measurementId: "G-9ZLQESPFP5"
});
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    const promiseChain = clients
        .matchAll({
            type: "window",
            includeUncontrolled: true
        })
        .then(windowClients => {
            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i];
                windowClient.postMessage(payload);
            }
        })
        .then(() => {
            const title = payload.notification.title;
            const options = {
                body: payload.notification.score
              };
            return registration.showNotification(title, options);
        });
    return promiseChain;
});
self.addEventListener('notificationclick', function (event) {
    console.log('notification received: ', event)
});