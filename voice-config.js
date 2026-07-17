/**
 * voice-config.js — ElevenLabs config, shared across all pages.
 * Key is injected at deploy time by GitHub Actions (never stored in source).
 * DO NOT commit a real key here — keep this file in git with the placeholder.
 */
var EL = {
  key: '__EL_KEY__',

  // ── Commentary voices (used by game.html timer) ──
  voices: {
    announcer: 'EXAVITQu4vr4xnSDxMaL', // Adam        — clear, authoritative (American)
    hype:      'pNInz6obpgDQGcFmaJgB',  // Adam2       — high energy (American)
    deadpan:   'TxGEqnHWrfWFTfGW9XjX',  // Josh        — dry, flat (American)
    roast:     'VR6AewLTigWG4xSOukaG'   // Arnold      — sarcastic (American)
  },

  // ── Per-player walkup voice IDs ──
  // Each player gets a different accent/character for their intro announcement.
  // ElevenLabs voice IDs: https://elevenlabs.io/docs/voices
  playerVoices: {
    'Tod':    { id: 'EXAVITQu4vr4xnSDxMaL', label: 'American — Announcer'  }, // Adam
    'Tom':    { id: 'knrPHWnBmmDHMoiMeP3l', label: 'Irish'                  }, // Callum (Irish accent)
    'Guy':    { id: 'N2lVS1w4EtoT3dr4eOWO', label: 'British — Deep'         }, // Callum alt
    'Vince':  { id: 'ODq5zmih8GrVes37Dizd', label: 'British — Patrick'      }, // Patrick
    'Karey':  { id: 'z9fAnlkpzviPz146aGWa', label: 'British — Grace'        }, // Grace
    'JH':     { id: 'jsCqWAovK2LkecY7zXl4', label: 'British — Freya'        }, // Freya
    'Chris F':{ id: 'IKne3meq5aSn9XLyUdCD', label: 'Australian'             }, // Charlie
    'Jacob':  { id: 'pNInz6obpgDQGcFmaJgB', label: 'American — Hype'        }, // Adam2 hype
    'Michael':{ id: 'GBv7mTt0atIp3Br8iCZy', label: 'Deep American'          }, // Thomas
    'Jay':    { id: 'TxGEqnHWrfWFTfGW9XjX', label: 'American — Josh'        }, // Josh
    'Nate':   { id: 'yoZ06aMxZJJ28mfd3POQ', label: 'American — Sam'         }, // Sam
    'Chris P':{ id: 'Zlb1dXrM653N07WRdFW3', label: 'British — Male'         }, // James
    'Philo':  { id: 'onwK4e9ZLuTAKqWW03F9', label: 'American — Daniel'      }, // Daniel
    'Charlie':{ id: 'XrExE9yKIg1WjnnlVkGX', label: 'Liam — American'        }, // Liam
    'Eric':   { id: 'VR6AewLTigWG4xSOukaG', label: 'American — Arnold'      }, // Arnold
    'Toner':  { id: 'N2lVS1w4EtoT3dr4eOWO', label: 'British — Callum'       }, // Callum
    'Brian':  { id: 'CwhRBWXzGAHq8TQ4Fs17', label: 'American — Roger'       }, // Roger
    'Jake':   { id: 'SOYHLrjzK2X1ezoPC6cr', label: 'American — Harry'       }, // Harry
    'Jeremy': { id: 'AZnzlk1XvdvUeBnXmlld', label: 'American — Domi'        }, // Domi
    'Sal':    { id: 'MF3mGyEYCl7XYWbV9V6O', label: 'American — Elli'        }, // Elli
    'Tim':    { id: 'flq6f7yk4E4fJM5XTYuZ', label: 'American — Michael'     }, // Michael
    'Justin': { id: 'g5CIjZEefAph4nQFvHAz', label: 'American — Ethan'       }, // Ethan
    'Matt':   { id: 'TX3LPaxmHKxFdv7VOQHJ', label: 'American — Liam'        }  // Liam deep
  }
};
