/**
 * player-videos.js — chip video popup + walkup audio for all pages
 * Click any .chip-vid-wrap to open the centered video popup with entrance audio.
 *
 * WALKUP SONGS: fill in PLAYER_AUDIO below with direct-link MP3 URLs (or leave blank
 * to use the voice announcement only). Free MP3 hosts: archive.org, pixabay.com, etc.
 * Example:  'Tod': 'https://your-host.com/audio/tod-theme.mp3'
 */

var EMPTY_CHAIR='https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260703_135018_f4b08c46-0397-469a-a0be-488a04fa05d5.mp4';

var PLAYER_VIDEOS={
  'Tod':    'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260703_162117_4b94b2cb-f9ef-477b-8788-ae755d21f253.mp4',
  'Guy':    'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260703_162101_4c39a09f-d640-4818-bf64-9cb291e103f4.mp4',
  'Vince':  'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260704_010620_592264b0-9b9e-4a11-9482-83a4a956a040.mp4',
  'Karey':  'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260703_162123_109abb8a-d63f-4f00-b0d7-78e173bef9e1.mp4',
  'JH':     'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260704_204322_83aba4ed-0fe4-425a-a7f5-80969d9ba5cb.mp4',
  'Chris F':'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260704_161027_80ffe4b9-fb00-4639-a035-cb960811a212.mp4',
  'Jacob':  'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260704_012313_c6b21a9c-acdc-4b49-af6b-f4f9c97e3d04.mp4',
  'Michael':'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260704_011314_1bc09a3c-79d0-4396-a64b-ad38e8092fdb.mp4',
  'Jay':    'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260704_160901_94202ca0-bffc-4b57-aff2-dfa5f48859c4.mp4',
  'Nate':   'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260704_204043_afb87cc7-dcb3-4da5-aad6-67d1b879cf01.mp4',
  'Chris P':'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260704_161910_d7d708b5-f0e8-4b4b-8054-6824630f160b.mp4',
  'Philo':  'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260705_005450_372fd0ad-9e1c-4e95-b364-2df1c9591b15.mp4',
  'Tom':    'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260705_005435_c01d80aa-c0f4-4c0c-b397-707a20db35b2.mp4',
  'Charlie':'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260704_135544_9575e9a0-9da6-44b2-a530-2a90092c6f92.mp4',
  'Eric':   'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260704_155437_92512fa0-8e3b-4285-8169-0f62922acea9.mp4',
  'Toner':  'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260704_154307_09cb66b0-b3fe-4f67-8c00-9d7f7a44e80a.mp4',
  'Brian':  'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260705_005500_2824375b-75d4-49b6-a885-81527383d333.mp4',
  'Jake':   'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260705_005510_4f871c89-d773-4d0d-97df-3870de475d58.mp4',
  'Jeremy': 'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260704_204438_cd83c93d-c521-433f-a364-2b30fa1b0c55.mp4',
  'Sal':    'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260705_005525_c58e9d49-c78b-4306-a498-ed383ac647a0.mp4',
  'Tim':    'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260705_005535_b47ec995-3687-4cd5-aa94-b079e14fd880.mp4',
  'Justin': 'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260705_005633_5b104123-9bdd-456d-8dd5-a877a2c9d3d5.mp4',
  'Matt':   'https://d8j0ntlcm91z4.cloudfront.net/user_3F5HdjQhOnyB0kWRi8OozAtEPlL/hf_20260704_104322_6db29c9d-f06f-4ab9-9aae-e200929410dc.mp4'
};

// ── WALKUP SONGS ──────────────────────────────────────────────
// Paste a direct MP3 URL for each player's entrance song.
// Leave blank ('') to skip music and just use the voice announcement.
// Free MP3s: pixabay.com/music  |  archive.org  |  freemusicarchive.org
var PLAYER_AUDIO = {
  'Tod':    '',
  'Guy':    '',
  'Vince':  '',
  'Karey':  '',
  'JH':     '',
  'Chris F':'',
  'Jacob':  '',
  'Michael':'',
  'Jay':    '',
  'Nate':   '',
  'Chris P':'',
  'Philo':  '',
  'Tom':    '',
  'Charlie':'',
  'Eric':   '',
  'Toner':  '',
  'Brian':  '',
  'Jake':   '',
  'Jeremy': '',
  'Sal':    '',
  'Tim':    '',
  'Justin': '',
  'Matt':   ''
};

// ── VOICE ANNOUNCEMENTS (ElevenLabs or Web Speech fallback) ───
// Reads from game.html's EL config if on the same page;
// otherwise uses the browser's built-in speech synthesis.
var PLAYER_INTROS = {
  'Tod':    "I only play elite hands. Everything else is beneath me.",
  'Guy':    "Time for a beat down. Guy is in the building.",
  'Vince':  "Chip and a chair, baby. That's all I need.",
  'Karey':  "Don't let the smile fool ya. I'm here to take your chips.",
  'JH':     "J H in the house. Shuffle up and deal. You're already drawing dead.",
  'Chris F':"Chris F is here. Someone's getting stacked tonight, mate!",
  'Jacob':  "Chip and a chair and a prayer. Let's go!",
  'Michael':"Silence is golden. So are my chips.",
  'Jay':    "Time for a beat down, Vegas style!",
  'Nate':   "All in or go home. That's the only way I know.",
  'Chris P':"Two Chris-es, twice the trouble. You've been warned.",
  'Philo':  "I fold, therefore I am. Until I don't.",
  'Tom':    "Top of the morning! Time for a beat down, lads!",
  'Charlie':"Wild card in the building. Hide your blinds!",
  'Eric':   "Raising pre-flop. Always. Every time. No exceptions.",
  'Toner':  "Toner's running low... on mercy.",
  'Brian':  "Dad mode activated. Time to school the kids.",
  'Jake':   "Young gun alert! I raise, I raise, I raise!",
  'Jeremy': "Seen it all. Bet it all. Back for more.",
  'Sal':    "Time for a beat down! Nobody's safe tonight!",
  'Tim':    "All in blind. That's my entire poker strategy.",
  'Justin': "Chip and a chair. Usually just the chair.",
  'Matt':   "Final boss has entered. Good luck. You'll need it."
};

// ── POPUP ENGINE ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
  // Styles
  var style = document.createElement('style');
  style.textContent = [
    '#chipVidPopup{position:fixed;z-index:9999;width:min(380px,92vw);border-radius:16px;overflow:hidden;',
    'box-shadow:0 12px 60px rgba(0,0,0,0.9),0 0 0 2px rgba(245,200,66,0.4);',
    'opacity:0;pointer-events:none;transition:opacity 0.2s ease,transform 0.2s ease;background:#000;',
    'top:50%;left:50%;transform:translate(-50%,-48%) scale(0.95)}',
    '#chipVidPopup.show{opacity:1;pointer-events:auto;transform:translate(-50%,-50%) scale(1)}',
    '#chipVidPopup video{width:100%;display:block;min-height:120px}',
    '.cvp-name{position:absolute;top:0;left:0;right:0;padding:8px 12px;',
    'background:linear-gradient(rgba(0,0,0,0.75),transparent);color:#f5c842;',
    'font-size:0.95rem;font-weight:800;font-family:Inter,sans-serif;letter-spacing:0.06em;text-transform:uppercase}',
    '.cvp-label{position:absolute;bottom:0;left:0;right:0;padding:6px 10px;',
    'background:linear-gradient(transparent,rgba(0,0,0,0.8));color:#fff;',
    'font-size:0.65rem;font-weight:500;font-family:Inter,sans-serif;opacity:0.7}',
    '.cvp-close{position:absolute;top:7px;right:8px;width:26px;height:26px;',
    'background:rgba(0,0,0,0.65);border-radius:50%;color:#fff;font-size:14px;',
    'line-height:26px;text-align:center;cursor:pointer;z-index:10;border:1px solid rgba(255,255,255,0.2)}',
    '#chipVidOverlay{display:none;position:fixed;inset:0;z-index:9998;background:rgba(0,0,0,0.55);backdrop-filter:blur(2px)}',
    '#chipVidOverlay.show{display:block}'
  ].join('');
  document.head.appendChild(style);

  var overlay = document.createElement('div');
  overlay.id = 'chipVidOverlay';
  document.body.appendChild(overlay);

  var popup   = document.createElement('div');
  popup.id    = 'chipVidPopup';
  var vid     = document.createElement('video');
  vid.loop    = true; vid.muted = true;
  vid.setAttribute('playsinline', '');
  vid.setAttribute('webkit-playsinline', '');
  var nameEl  = document.createElement('div'); nameEl.className = 'cvp-name';
  var lblEl   = document.createElement('div'); lblEl.className  = 'cvp-label';
  var cls     = document.createElement('div'); cls.className    = 'cvp-close'; cls.textContent = '✕';
  popup.appendChild(vid); popup.appendChild(nameEl); popup.appendChild(lblEl); popup.appendChild(cls);
  document.body.appendChild(popup);

  var activeWrap = null;
  var walkupAudio = null;

  function hide() {
    popup.classList.remove('show');
    overlay.classList.remove('show');
    vid.pause(); vid.src = '';
    if (walkupAudio) { walkupAudio.pause(); walkupAudio = null; }
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    activeWrap = null;
  }

  function show(wrap) {
    var url  = wrap.dataset.vid; if (!url) return;
    var name = wrap.dataset.name || '';

    vid.src = url;
    vid.play().catch(function() {});
    nameEl.textContent = name;
    lblEl.textContent  = 'click outside to close';
    popup.classList.add('show');
    overlay.classList.add('show');
    activeWrap = wrap;

    // Play walkup music if set, then voice intro
    var songUrl = PLAYER_AUDIO[name];
    if (songUrl) {
      walkupAudio = new Audio(songUrl);
      walkupAudio.volume = 0.55;
      walkupAudio.play().catch(function() {});
    }

    // Voice announcement (ElevenLabs or Web Speech) — uses player's own accent/voice
    var intro = PLAYER_INTROS[name] || ('Ladies and gentlemen, please welcome... ' + name + '!');
    speakIntro(intro, name);
  }

  document.body.addEventListener('click', function(e) {
    if (e.target.closest('#cvpClose') || e.target === overlay) { hide(); return; }
    if (popup.contains(e.target)) return;
    var w = e.target.closest && e.target.closest('.chip-vid-wrap');
    if (!w) return;
    if (w === activeWrap) { hide(); return; }
    show(w);
  });
});

// ── VOICE INTRO ───────────────────────────────────────────────
function speakIntro(text, playerName) {
  // If game.html's ElevenLabs engine is running on the same page, use it
  if (typeof speak === 'function') {
    speak(text, 'hype');
    return;
  }

  // Otherwise: ElevenLabs direct call if key available, else Web Speech
  var elKey = (typeof EL !== 'undefined' && EL.key && EL.key !== '__EL_KEY__') ? EL.key : null;

  if (elKey) {
    // Use player-specific voice if configured, fall back to hype
    var voiceId = (EL.playerVoices && EL.playerVoices[playerName])
      ? EL.playerVoices[playerName].id
      : 'pNInz6obpgDQGcFmaJgB';
    fetch('https://api.elevenlabs.io/v1/text-to-speech/' + voiceId + '/stream', {
      method: 'POST',
      headers: { 'xi-api-key': elKey, 'Content-Type': 'application/json', 'Accept': 'audio/mpeg' },
      body: JSON.stringify({ text: text, model_id: 'eleven_turbo_v2', voice_settings: { stability: 0.35, similarity_boost: 0.85, style: 0.7, use_speaker_boost: true } })
    }).then(function(r) {
      if (!r.ok) throw new Error(r.status);
      return r.blob();
    }).then(function(blob) {
      var url   = URL.createObjectURL(blob);
      var audio = new Audio(url);
      audio.onended = function() { URL.revokeObjectURL(url); };
      audio.play().catch(function() {});
    }).catch(function() { speakFallback(text); });
  } else {
    speakFallback(text);
  }
}

function speakFallback(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  var u = new SpeechSynthesisUtterance(text);
  u.rate = 1.05; u.pitch = 1.25;
  window.speechSynthesis.speak(u);
}
