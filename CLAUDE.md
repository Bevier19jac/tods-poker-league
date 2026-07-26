# Ardenlee Poker League — Claude Briefing

## Project
Website for a private poker league. Live at: https://bevier19jac.github.io/tods-poker-league/
Git root: C:\BragBev_AI\PokerLeague\Website\

## Deploying
NEVER ask for a GitHub token. Just tell the user to double-click push.bat — it handles everything.
push.bat stages game.html and index.html, commits, and pushes to GitHub Pages.
Site goes live in ~2 minutes after push.

## Key Files
- data.js — league standings, results, schedule (static, source of truth for the site)
- game.html — game night hub (timer, bust tracking, payouts)
- index.html — RSVP page and seating chart
- standings.html — reads from data.js
- results.html — reads from data.js
- firebase-config.js — Firebase config (DO NOT print or expose API keys)

## Firebase Structure
- gameNight/players — live bust tracking during game
- gameNight/timerState — blind level timer
- gameNight/payoutSettings — payout amounts and Mid-Season mode flag
- gameNight/specialAwards — high hand and Toner's Game winner
- gameNight/tonersDraws — who each player drew from the hat
- completedEvents/{YYYYMMDD} — full results written by endGame() when game ends
- gameNightStandings/{playerName} — last game stats per player

## Post-Game Update Workflow
When the user says "update standings from tonight's game":
1. Read completedEvents from Firebase — use the firebase-config.js credentials
2. Find the most recent completed event
3. Update the standings array in data.js — add points, update wins/cashes/events/avgPlace
4. Add the event to the results array in data.js
5. Tell the user to double-click push.bat — DO NOT ask for a GitHub token

## data.js Structure
standings array: { name, fullName, events, points, wins, cashes, avgPlace, avatar }
results array (inside LEAGUE object): each past event with place, name, points, itm, winnings

## Points System
- Regular league nights: calcSeasonPoints formula (300-base)
- Mid-Season Championship: lookup table, 1st=10000 down to 24th=400
- Mid-Season Championship (2026-07-25) is complete — Jeremy won, results posted in data.js

## Current Settings (as of 2026-07-25)
- Buy-in: $40, Rebuy: $40, Start stack: 6000, Early bonus: 500
- Toner's Game has been removed from the app entirely
- Next event: Event 13, August 11 2026

## Security
- ElevenLabs API key is injected via GitHub Actions secret EL_KEY — never hardcode it
- Firebase config is public (client-side) — that's fine, security rules are on Firebase side
- Never print any API keys in responses
