# Tod's Poker League — Website

## Deploy in 5 Minutes (GitHub Pages — Free Forever)

1. Create a free account at github.com
2. Click **New Repository** → name it `poker-league` → Public → Create
3. Click **Add file → Upload files** → drag the contents of this `Website/` folder
4. Go to **Settings → Pages** → Source: `Deploy from branch` → Branch: `main` → `/root` → Save
5. Your site is live at: `https://yourusername.github.io/poker-league`

**Share that link with the group — that's it.**

---

## Update After Each Game

1. Open `admin.html` in any web browser (works offline too)
2. Password: `pokerleague2026` (change it in admin.html → search ADMIN_PASSWORD)
3. Enter results → Generate → Copy code → paste into `data.js`
4. Go to github.com → your repo → click `data.js` → pencil icon → paste → Commit
5. Site updates in ~30 seconds

---

## Add Player Avatars

From your interview video clips:
- Take a screenshot of each player's face
- Save as `assets/avatars/firstname.jpg` (lowercase, no spaces)
  - e.g. `assets/avatars/tod.jpg`, `assets/avatars/chrisfr.jpg`
- In `data.js`, add `avatar: "assets/avatars/tod.jpg"` to their standings entry
- Upload the new photos to GitHub alongside data.js

---

## File Structure

```
Website/
├── index.html          ← Main public site
├── admin.html          ← Admin dashboard (password protected)
├── data.js             ← ALL league data lives here (edit this after each game)
├── assets/
│   └── avatars/        ← Drop player photos here (jpg/png)
└── README.md           ← This file
```

---

## Scoring Formula

```
Points = (N_players - Place + 1) × 300  +  ITM Bonus

ITM Bonus:  1st = +800
            2nd = +400
            3rd = +300
            4th = +200
            5th = +100
```

The admin dashboard auto-calculates this — just enter finish order.

---

## Notes

- The `data.js` file is the single source of truth for everything
- Never edit `index.html` or `admin.html` unless you're changing the design
- The site works on mobile — players can check standings from the parking lot before a game
- Admin password is stored in plain text in admin.html (fine for a private group)
