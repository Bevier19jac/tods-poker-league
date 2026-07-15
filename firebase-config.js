/**
 * FIREBASE CONFIG — Ardenlee Poker League RSVP
 */

const firebaseConfig = {
  apiKey:            "AIzaSyAMOWwnAPG_DDPJYcvFd5W_cypgmrhAoJg",
  authDomain:        "tod-admin-page.firebaseapp.com",
  databaseURL:       "https://tod-admin-page-default-rtdb.firebaseio.com",
  projectId:         "tod-admin-page",
  storageBucket:     "tod-admin-page.firebasestorage.app",
  messagingSenderId: "788443842956",
  appId:             "1:788443842956:web:93459f3cdf80e345236ea9"
};

try {
  // Guard against duplicate-app error if script somehow runs twice
  if (!firebase.apps || firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  window._firebaseReady = true;
} catch(e) {
  console.warn('Firebase init error:', e.message);
  window._firebaseReady = false;
}

// Auth is optional — keep it separate so a failure here doesn't break RSVP/chat
try {
  window._firebaseAuth = firebase.auth ? firebase.auth() : null;
} catch(e) {
  window._firebaseAuth = null;
}
