/**
 * FIREBASE CONFIG — Ardenlee Poker League RSVP
 *
 * SETUP STEPS (one time, ~5 minutes):
 * 1. Go to https://console.firebase.google.com
 * 2. Click "Add project" → name it "tods-poker-league" → Continue
 * 3. Disable Google Analytics → Create project
 * 4. Click "Build" → "Realtime Database" → "Create database"
 *    → Choose "United States" → Start in TEST MODE → Enable
 * 5. Click the gear icon → "Project settings" → scroll to "Your apps"
 *    → Click </> (Web) → name it "poker-league" → Register
 * 6. Copy the firebaseConfig values below and paste them in
 * 7. Upload this file to GitHub alongside index.html and data.js
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
  firebase.initializeApp(firebaseConfig);
  window._firebaseReady = true;
  window._firebaseAuth = firebase.auth();
} catch(e) {
  window._firebaseReady = false;
  window._firebaseAuth = null;
}
