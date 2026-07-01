/**
 * TOD'S POKER LEAGUE - Data File
 * Season 20 | Peachtree City, GA
 * Last updated: after Event 10 (2026-06-18)
 */

const LEAGUE = {
  name: "Tod's Poker League",
  season: 20,
  host: "Tod Ellison",
  location: "Peachtree City, GA",

  // ── ANNOUNCEMENTS ──
  // Set active:true to show a banner above the RSVP section
  // type options: "info" (blue) | "special" (gold) | "warning" (red)
  announcements: [
    // { active: true, type: "special", icon: "🎁", text: "Toys for Tots drive — bring a new unwrapped toy to the next game night!" },
    // { active: true, type: "info",    icon: "📅", text: "Next game confirmed: July 2nd at 8 PM at Tod's" },
    // { active: true, type: "warning", icon: "⚠",  text: "Location change for next event — contact Tod for details" },
  ],

  schedule: [
    { date: "2026-02-19", label: "Event 1",               type: "regular",    completed: true  },
    { date: "2026-03-05", label: "Event 2",               type: "regular",    completed: true  },
    { date: "2026-03-19", label: "Event 3",               type: "regular",    completed: true  },
    { date: "2026-04-02", label: "Event 4",               type: "regular",    completed: true  },
    { date: "2026-04-16", label: "Event 5",               type: "regular",    completed: true  },
    { date: "2026-04-30", label: "Event 6",               type: "regular",    completed: true  },
    { date: "2026-05-14", label: "Event 7",               type: "regular",    completed: true  },
    { date: "2026-05-19", label: "Event 8",               type: "regular",    completed: true  },
    { date: "2026-06-04", label: "Event 9",               type: "regular",    completed: true  },
    { date: "2026-06-18", label: "Event 10",              type: "regular",    completed: true  },
    { date: "2026-07-02", label: "Event 11",              type: "regular",    completed: false },
    { date: "2026-07-16", label: "Event 12",              type: "regular",    completed: false },
    { date: "2026-08-01", label: "Mid-Season Tournament", type: "tournament", completed: false },
    { date: "2026-08-11", label: "Event 13",              type: "regular",    completed: false },
    { date: "2026-08-25", label: "Event 14",              type: "regular",    completed: false },
    { date: "2026-09-08", label: "Event 15",              type: "regular",    completed: false },
    { date: "2026-09-22", label: "Season Final",          type: "final",      completed: false },
  ],

  lastGame: {
    date: "2026-06-18",
    label: "Event 10",
    playerCount: 15,
    kitty: 220,
    winner: "Karey",
    recap: "Karey and Chris F chopped the pot, with Karey winning the deciding hand to claim 1st. Sal finished a strong 3rd. 15 players, $220 kitty. Next up: July 2nd.",
    results: [
      { place: 1,  name: "Karey",   points: 5000, itm: true,  winnings: 300 },
      { place: 2,  name: "Chris F", points: 5000, itm: true,  winnings: 300 },
      { place: 3,  name: "Sal",     points: 4100, itm: true,  winnings: 100 },
      { place: 4,  name: "Chris P", points: 3700, itm: true,  winnings: 80  },
      { place: 5,  name: "Matt",    points: 3300, itm: false, winnings: 0   },
      { place: 6,  name: "Guy",     points: 3000, itm: false, winnings: 0   },
      { place: 7,  name: "Charlie", points: 2700, itm: false, winnings: 0   },
      { place: 8,  name: "Jacob",   points: 2400, itm: false, winnings: 0   },
      { place: 9,  name: "Steve",   points: 2100, itm: false, winnings: 0   },
      { place: 10, name: "Eric",    points: 1800, itm: false, winnings: 0   },
      { place: 11, name: "Tod",     points: 1500, itm: false, winnings: 0   },
      { place: 12, name: "Philo",   points: 1200, itm: false, winnings: 0   },
      { place: 13, name: "Steele",  points:  900, itm: false, winnings: 0   },
      { place: 14, name: "Nate",    points:  600, itm: false, winnings: 0   },
      { place: 15, name: "Toner",   points:  300, itm: false, winnings: 0   },
    ],
    cashGame: { winner: "", note: "" },
    highHand: { player: "", hand: "", description: "" },
  },

  // STANDINGS — sourced directly from Tod's APL Season 20 tracker after Event 10
  standings: [
    { name: "Tod",     fullName: "Tod Ellison",       events: 10, points: 41400, wins: 1, cashes: 3, avgPlace: 7.7,  avatar: "avatars/tod.png"     },
    { name: "Guy",     fullName: "Guy Caldwell",      events: 8,  points: 35800, wins: 2, cashes: 5, avgPlace: 7.4,  avatar: "avatars/guy.png"     },
    { name: "Vince",   fullName: "Vince Ottone",      events: 8,  points: 34500, wins: 0, cashes: 5, avgPlace: 8.0,  avatar: "avatars/vince.png"   },
    { name: "Karey",   fullName: "Karey Koscevic",    events: 7,  points: 33700, wins: 3, cashes: 4, avgPlace: 6.0,  avatar: "avatars/karey.png"   },
    { name: "JH",      fullName: "JH Hooper",         events: 8,  points: 31700, wins: 2, cashes: 3, avgPlace: 9.5,  avatar: "avatars/jh.png"      },
    { name: "Chris F", fullName: "Chris Frady",       events: 7,  points: 31600, wins: 0, cashes: 3, avgPlace: 7.0,  avatar: "avatars/chris_f.png" },
    { name: "Steve",   fullName: "Steve Mills",       events: 7,  points: 29700, wins: 1, cashes: 3, avgPlace: 6.7  },
    { name: "Jacob",   fullName: "Jacob Bevier",      events: 8,  points: 28400, wins: 0, cashes: 2, avgPlace: 8.8,  avatar: "avatars/jacob.png"   },
    { name: "Michael", fullName: "Michael Loridas",   events: 5,  points: 27900, wins: 0, cashes: 4, avgPlace: 9.0,  avatar: "avatars/michael.png" },
    { name: "Jay",     fullName: "Jay Rose",          events: 8,  points: 26800, wins: 1, cashes: 2, avgPlace: 11.0, avatar: "avatars/jay.png"     },
    { name: "Steele",  fullName: "Steele Persons",    events: 9,  points: 26800, wins: 0, cashes: 1, avgPlace: 11.2 },
    { name: "Nate",    fullName: "Nate Woods",        events: 8,  points: 25800, wins: 0, cashes: 1, avgPlace: 10.6, avatar: "avatars/nate.png"    },
    { name: "Chris P", fullName: "Chris Pettis",      events: 9,  points: 24800, wins: 0, cashes: 2, avgPlace: 12.1, avatar: "avatars/chris_p.png" },
    { name: "Philo",   fullName: "Philo Mitman",      events: 10, points: 23800, wins: 0, cashes: 1, avgPlace: 13.3, avatar: "avatars/philo.png"   },
    { name: "Matt",    fullName: "Matt Therriault",   events: 7,  points: 23400, wins: 0, cashes: 0, avgPlace: 10.6 },
    { name: "Tom",     fullName: "Tom Kane",          events: 7,  points: 22300, wins: 0, cashes: 1, avgPlace: 11.0, avatar: "avatars/tom.png"     },
    { name: "Charlie", fullName: "Charlie Grant",     events: 9,  points: 22250, wins: 0, cashes: 3, avgPlace: 13.0, avatar: "avatars/charlie.png" },
    { name: "Eric",    fullName: "Eric Cunningham",   events: 9,  points: 22200, wins: 0, cashes: 0, avgPlace: 12.7, avatar: "avatars/eric.png"    },
    { name: "Toner",   fullName: "Tim Toner",         events: 7,  points: 20600, wins: 0, cashes: 1, avgPlace: 11.7, avatar: "avatars/tim_t.png"   },
    { name: "Ryan",    fullName: "Ryan Zondervan",    events: 5,  points: 19550, wins: 0, cashes: 3, avgPlace: 9.4  },
    { name: "Brian",   fullName: "Brian Reilly",      events: 8,  points: 16500, wins: 0, cashes: 0, avgPlace: 15.0, avatar: "avatars/brian.png"   },
    { name: "Jake",    fullName: "Jake Westfall",     events: 5,  points: 16000, wins: 0, cashes: 2, avgPlace: 12.0, avatar: "avatars/jake_w.png"  },
    { name: "Jeremy",  fullName: "Jeremy Bollinger",  events: 6,  points: 15900, wins: 0, cashes: 0, avgPlace: 13.5, avatar: "avatars/jeremy.png"  },
    { name: "Sal",     fullName: "Chris Salaski",     events: 4,  points: 14900, wins: 0, cashes: 1, avgPlace: 8.3,  avatar: "avatars/sal.png"     },
    { name: "Jason",   fullName: "Jason Oliver",      events: 3,  points: 12300, wins: 0, cashes: 1, avgPlace: 8.0  },
    { name: "Tim",     fullName: "Tim Fuller",        events: 3,  points:  9900, wins: 0, cashes: 0, avgPlace: 12.3, avatar: "avatars/tim_f.png"   },
    { name: "Phil",    fullName: "Phil Tricky",       events: 5,  points:  9400, wins: 0, cashes: 1, avgPlace: 14.6 },
    { name: "Dom",     fullName: "Dom",               events: 2,  points:  6000, wins: 0, cashes: 0, avgPlace: 12.5 },
    { name: "Justin",  fullName: "Justin Harmond",    events: 3,  points:  3600, wins: 0, cashes: 0, avgPlace: 19.3, avatar: "avatars/justin.png"  },
    { name: "James",   fullName: "James",             events: 1,  points:  1800, wins: 0, cashes: 0, avgPlace: 18.0 },
    { name: "Darin",   fullName: "Darin Brewer",      events: 1,  points:  1500, wins: 0, cashes: 0, avgPlace: 16.0 },
    { name: "Jeff",    fullName: "Jeff Mennicke",     events: 1,  points:  1200, wins: 0, cashes: 0, avgPlace: 20.0 },
  ],

  records: {
    highHandAllTime: { player: "Tod Ellison", hand: "Quad Kings - Ace Kicker", season: 20, date: "" },
    highHandSeason:  { player: "Tod Ellison", hand: "Quad Kings - Ace Kicker", season: 20, date: "" },
    mostWins:        { player: "Tod Ellison", count: 15, note: "Career wins all-time" },
    mostSeasons:     { player: "Tod Ellison", count: 20, note: "All 20 seasons" },
  },

  champions: [
    { season: 19, year: 2025, champion: "Charlie Grant", note: "Season 19 Champion" },
    { season: 18, year: 2024, champion: "- unknown -",   note: "" },
    { season: 17, year: 2024, champion: "- unknown -",   note: "" },
  ],

  history: [],

  nextGame: {
    date: "2026-07-02",
    time: "8:00 PM",
    note: "",
    rsvp: { in: [], out: [] }
  },
};
