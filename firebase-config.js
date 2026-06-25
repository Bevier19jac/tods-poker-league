/**
 * FIREBASE CONFIG — Tod's Poker League RSVP
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
  apiKey:            "PASTE_YOUR_API_KEY_HERE",
  authDomain:        "PASTE_YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL:       "https://PASTE_YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId:         "PASTE_YOUR_PROJECT_ID",
  storageBucket:     "PASTE_YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "PASTE_YOUR_SENDER_ID",
  appId:             "PASTE_YOUR_APP_ID"
};

try {
  firebase.initializeApp(firebaseConfig);
  window._firebaseReady = true;
} catch(e) {
  window._firebaseReady = false;
}
