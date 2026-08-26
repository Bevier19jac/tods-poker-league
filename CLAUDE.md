# Ardenlee Poker League — Claude Briefing

*Last updated: after Event 14 (2026-08-25)*

## Project
Website for a private poker league.
- **Live URL:** https://bevier19jac.github.io/tods-poker-league/
- **File root:** `C:\Users\bevie\OneDrive\Desktop\Ardenlee Poker League\Website\`
- **Jacob's Gmail:** bevier19jacob@gmail.com (Jacob forwards Tod's emails here from his iCloud)

## Deploying
NEVER ask for a GitHub token. Tell the user to double-click push.bat — it handles everything.
push.bat stages all HTML/JS/data files, commits, and pushes to GitHub Pages. Site goes live in ~2 minutes.

## Key Files
- `data.js` — source of truth: standings, lastGame, schedule, nextGame, records, announcements
- `game.html` — game night hub: blind timer, player/bust tracking, payouts, seat redraw
- `index.html` — home: RSVP, countdown, seat draw, standings preview
- `standings.html` / `results.html` / `schedule.html` — read from data.js
- `firebase-config.js` — Firebase config (DO NOT print or expose API keys)
- `push.bat` — deploy script (double-click to push)

## Current State (as of 2026-08-25)
- **Last event:** Event 14, Aug 25 — Charlie Grant wins, 19 players, heads-up vs Guy
- **Next event:** Event 15, September 8, 8:00 PM at Tod's
- **Season:** 20, 15 events complete (includes Mid-Season Tournament July 25)
- **Standings leader:** Tod Ellison 60,800 pts | Guy Caldwell 56,000 | Jacob Bevier 52,750
- **High hand (season & all-time):** Tod Ellison — Quad Aces, 7 kicker (Aug 25 2026)
- **Buy-in:** $40, Rebuy: $40, Start stack: 6000, Early bonus: 500

## Post-Game Update Workflow
When Jacob says "update standings from tonight's game":
1. Search Gmail for forwarded emails from Tod (search: `from:bevier19jac@icloud.com` or `ellison newer_than:7d`)
   — Jacob forwards Tod's results/standings emails from his iCloud to his Gmail
2. Pull the results email (finishing order, points, winnings) and standings email (cumulative totals)
3. Update `data.js`: lastGame, standings array, schedule (mark completed), nextGame, announcement, records if needed
4. Tell user to double-click push.bat

## data.js Structure
```
standings[]: { name, fullName, events, points, wins, cashes, avgPlace, avatar }
lastGame: { date, label, playerCount, kitty, winner, recap, results[], cashGame, highHand }
schedule[]: { date, label, type, completed }
nextGame: { date, label, time, location, buyin, earlyBonus, startStack, rebuyStack, maxPlayers, notes }
records: { highHandAllTime, highHandSeason, mostWins, mostSeasons, mostChampionships }
announcements[]: { active, type, icon, text }
```

## Points System
- Regular nights: (players remaining when eliminated) × 300
  → 1st in 19-player field: 19 × 300 = 5700 base + bonus points for top finishers
  → Tod includes a "Bonus" column in results emails; the "Points" column is the combined total
- Mid-Season Championship (2026-07-25): lookup table, 1st=10000 down to last=400 — Jeremy won

## Season 20 Schedule (remaining)
| Event | Date | Status |
|-------|------|--------|
| Event 15 | Sep 8 2026 | upcoming |
| Event 16 | Sep 22 2026 | upcoming |
| Event 17 | Oct 6 2026 | upcoming |
| Event 18 | Oct 27 2026 | upcoming |
| Event 19 | Nov 10 2026 | upcoming |
| Event 20 | Nov 19 2026 | upcoming |
| Event 21 | Dec 1 2026 | upcoming |
| Event 22 | Dec 15 2026 | upcoming |
| Event 23 | Dec 29 2026 | upcoming |
| Season Final | Feb 7 2027 (Super Bowl weekend) | upcoming |

## Firebase
- **Rules:** `{".read": true, ".write": true}` — fully open (private league, no sensitive data)
  Previous rules had expiring timestamp that cut off all reads/writes Aug 1 — DON'T add timestamps back
- **Paths used:**
  - `rsvp_YYYY_MM_DD/` → { PlayerName: 'in'|'maybe'|'out' }
  - `seats_YYYY_MM_DD/` → [ 'Name1', ... ] (ordered array)
  - `tableCount_YYYY_MM_DD/` → number
  - `gameNight/players/` → { Name: { status: 'in'|'out'|'winner', place: N } }
  - `gameNight/timerState/` → { running, currentLevel, levelStartTime, totalPausedMs, pausedAt }
  - `gameNight/payoutSettings/` → { buyIn, players, rebuys, ... }
  - `gameNight/specialAwards/` → { highHand: { player, hand } }
  - `adminSettings/pin/` → '1234' (Tod's admin PIN — same PIN used on both pages)
  - `completedEvents/{YYYYMMDD}/` → full results written by endGame()
  - `gameNightStandings/{playerName}/` → last game stats per player

## Game Night Workflow (how it's supposed to work)
1. **index.html** — players RSVP (In/Maybe/Out) in real time via Firebase
2. **Tod opens game.html**, enters PIN → admin mode activates, admin bar appears
   - PIN is remembered for the full browser session (sessionStorage) — no re-entry on reload
3. **Sync Players** button pulls RSVP statuses into the game tracker (gamePlayers)
4. **Admin draws seats** on index.html — PIN also remembered via sessionStorage on that page
5. During play: **Mark Out** button (admin) or "I'm Out" button (player) eliminates players
   - bustPlayer() auto-syncs RSVP to 'out' so seat redraw excludes them
6. On break / table consolidation: **🔀 Redraw Seats** (admin bar in game.html)
   - Reads live gamePlayers 'in' list, shuffles, writes new seats to Firebase
   - Does NOT require re-entering PIN

## Known Fixes Applied (Aug 2026)
- **PIN persistence:** `isAdmin` (game.html) and `seatDrawUnlocked` (index.html) now stored in
  `sessionStorage` — Tod only enters PIN once per browser session, not once per page load
- **Countdown bug:** `pld()` function was dropping minutes from time strings (targeting 8:00 instead
  of 8:30). Fixed to parse both hour and minute from LEAGUE.nextGame.time
- **RSVP sync:** Firebase rules expiration fixed (was cutting off Aug 1). Now fully open.
- **Admin seat redraw:** `adminRedrawSeats()` in game.html — reads gamePlayers 'in' list, writes to
  Firebase `seats_` + `tableCount_` keys. Wired to 🔀 Redraw Seats button in admin bar.
- **bustPlayer RSVP sync:** When admin marks someone out in game.html, their RSVP status is
  automatically updated to 'out' in Firebase so seat redraw excludes them

## Security
- ElevenLabs API key injected via GitHub Actions secret EL_KEY — never hardcode it
- Firebase config is public (client-side) — fine, security is handled by Firebase rules
- Never print any API keys in responses
- firebase-config.js — DO NOT print or expose

## Other Projects
- **BraelinnPokerLeague_AppFoundation.md** saved at `C:\BragBev_AI\` — full blueprint for a second
  poker league app (hosted by Nate Woods, Season 7 starts Sep 3 2026). Start a new chat with that doc.
