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

// Sign in anonymously so Firebase Database rules that require auth != null are satisfied.
// Firebase SDK automatically retries existing listeners once auth resolves.
try {
  window._firebaseAuth = firebase.auth ? firebase.auth() : null;
  if (window._firebaseAuth) {
    window._firebaseAuth.signInAnonymously().then(function() {
      // Once authenticated, kick off listeners if they haven't started yet
      if (typeof startFirebaseListeners === 'function' && !window._fbListenersStarted) {
        window._fbListenersStarted = true;
        startFirebaseListeners();
      }
    }).catch(function(e) {
      console.warn('Firebase anon auth failed:', e.message);
    });
  }
} catch(e) {
  window._firebaseAuth = null;
  console.warn('Firebase auth setup error:', e.message);
}
