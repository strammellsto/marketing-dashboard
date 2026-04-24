// ============================================================
//  MARKETING DASHBOARD DATA
//  This is the only file you need to edit.
//  Find the vehicle name, update the text, save the file.
// ============================================================

const VEHICLES = [
  "144\" MODEs",
  "CREW MODE",
  "TOUR MODE",
  "GXV WILD",
  "GXV HILT",
  "GXV EPIC",
  "Grand Bohemian",
];

const PILLARS = [
  {
    id: "dealer",
    name: "Dealer Channels",
    color: "#1a56a0",
    bg: "#e8f0fb",
    tactics: [
      {
        id: "showroom",
        name: "Showroom Visual Merchandising",
        dealers: {
          "La Mesa - West Sac": "Store in Store",
          "Johnson RV": "Mural in Sandy store, Organic media & influencers",
          "Giant RV": "Backdrop Banner for Showroom",
        },
      },
      {
        id: "promo-materials",
        name: "Promotional Materials",
        vehicles: {
          "Vehicle Canvases": "Canvases in each dealer location.",
          "Literature": "Placeholder — describe what's happening for this vehicle here.",
          "Media Kit": "Media kits by product for use in promotional materials, socials, ads, etc.",
        },
      },
      {
        id: "sales-show",
        name: "Shows",
        vehicles: {
          '144" MODEs': "DSC Expo",
          "CREW MODE": " ",
          "TOUR MODE": "Tampa RV Show | OVE SoCal | RX3 | Moore Expo | OVE West ",
          "GXV WILD": "OVE West | OVE PNW",
          "GXV HILT": "DSC Expo | OVE SoCal | RX3 | OVE West",
          "GXV EPIC": "OVE West",
          "Grand Bohemian": "OVE SoCal | RX3 | Moore Expo | Grenadier Gathering | Trinite Road Rally | OVE West",
        },
      },
      {
        id: "geofencing",
        name: "Geo Fencing / Local / Targeted Campaigns",
        vehicles: {
          'La Mesa': "January Campaign",
        },
      },
    ],
  },
  {
    id: "community",
    name: "Community",
    color: "#2d7a3a",
    bg: "#e6f4e8",
    tactics: [
      {
        id: "app",
        name: "App",
        vehicles: {
          "Live Streams": "Monthly community virtual meetups hosted by MODE Owners, Rich & Cara",
          "Giveaways": "Exclusive Giveaways",
          "Daily Poll": "Daily Engagement",
          "Events": "Event Information with Storyteller exclusive camping information",
          "Chapter Groups": "Chapter Specific Activations",
        },
      },
      {
        id: "tour",
        name: "Tour",
        events: {
          "Tampa RV Show: "Jan 13 - 18",
          "DSC Expo": "Feb 6 - 8",
          "OVE SoCal": "Mar 14 - 15",
          "Moore Expo": "Apr 17 - 19",
          "Grenadier Gathering West": "Apr 30 - May 3",
          "OVE West": "May 15 - 17",
          "Backcountry Off Road Expo - Utah": "May 22 - 23",
          "OVE PNW": "Jun 26 - 28",
          "OVE Mtn West": "Aug 21 - 23",
          "Hershey RV Show": "Sept 26 - 20",
          "Grenadier Gathering East", "Oct 8 - 11"
          "OVE East":, "Oct 23 - 25",
        },
      },
      {
        id: "experiences",
        name: "Experiences",
        vehicles: {
          '144" MODEs': "Placeholder — describe what's happening for this vehicle here.",
          "CREW MODE": "Placeholder — describe what's happening for this vehicle here.",
          "TOUR MODE": "Placeholder — describe what's happening for this vehicle here.",
          "GXV WILD": "Placeholder — describe what's happening for this vehicle here.",
          "GXV HILT": "Placeholder — describe what's happening for this vehicle here.",
          "GXV EPIC": "Placeholder — describe what's happening for this vehicle here.",
          "Grand Bohemian": "Placeholder — describe what's happening for this vehicle here.",
        },
      },
      {
        id: "activations",
        name: "Activations",
        vehicles: {
          '144" MODEs': "Placeholder — describe what's happening for this vehicle here.",
          "CREW MODE": "Placeholder — describe what's happening for this vehicle here.",
          "TOUR MODE": "Placeholder — describe what's happening for this vehicle here.",
          "GXV WILD": "Placeholder — describe what's happening for this vehicle here.",
          "GXV HILT": "Placeholder — describe what's happening for this vehicle here.",
          "GXV EPIC": "Placeholder — describe what's happening for this vehicle here.",
          "Grand Bohemian": "Placeholder — describe what's happening for this vehicle here.",
        },
      },
      {
        id: "blogs",
        name: "Blogs",
        vehicles: {
          '144" MODEs': "Placeholder — describe what's happening for this vehicle here.",
          "CREW MODE": "Placeholder — describe what's happening for this vehicle here.",
          "TOUR MODE": "Placeholder — describe what's happening for this vehicle here.",
          "GXV WILD": "Placeholder — describe what's happening for this vehicle here.",
          "GXV HILT": "Placeholder — describe what's happening for this vehicle here.",
          "GXV EPIC": "Placeholder — describe what's happening for this vehicle here.",
          "Grand Bohemian": "Placeholder — describe what's happening for this vehicle here.",
        },
      },
    ],
  },
  {
    id: "sales",
    name: "Sales Support",
    color: "#7a4a0a",
    bg: "#faf0e0",
    tactics: [
      {
        id: "digital-marketing",
        name: "Integrated Digital Marketing & Demand Gen",
        vehicles: {
          '144" MODEs': "Placeholder — describe what's happening for this vehicle here.",
          "CREW MODE": "Placeholder — describe what's happening for this vehicle here.",
          "TOUR MODE": "Placeholder — describe what's happening for this vehicle here.",
          "GXV WILD": "Placeholder — describe what's happening for this vehicle here.",
          "GXV HILT": "Placeholder — describe what's happening for this vehicle here.",
          "GXV EPIC": "Placeholder — describe what's happening for this vehicle here.",
          "Grand Bohemian": "Placeholder — describe what's happening for this vehicle here.",
        },
      },
      {
        id: "campaigns",
        name: "Campaigns (Email / Digital)",
        vehicles: {
          '144" MODEs': "Placeholder — describe what's happening for this vehicle here.",
          "CREW MODE": "Placeholder — describe what's happening for this vehicle here.",
          "TOUR MODE": "Placeholder — describe what's happening for this vehicle here.",
          "GXV WILD": "Placeholder — describe what's happening for this vehicle here.",
          "GXV HILT": "Placeholder — describe what's happening for this vehicle here.",
          "GXV EPIC": "Placeholder — describe what's happening for this vehicle here.",
          "Grand Bohemian": "Placeholder — describe what's happening for this vehicle here.",
        },
      },
      {
        id: "promotions",
        name: "Promotions",
        vehicles: {
          '144" MODEs': "Placeholder — describe what's happening for this vehicle here.",
          "CREW MODE": "Placeholder — describe what's happening for this vehicle here.",
          "TOUR MODE": "Placeholder — describe what's happening for this vehicle here.",
          "GXV WILD": "Placeholder — describe what's happening for this vehicle here.",
          "GXV HILT": "Placeholder — describe what's happening for this vehicle here.",
          "GXV EPIC": "Placeholder — describe what's happening for this vehicle here.",
          "Grand Bohemian": "Placeholder — describe what's happening for this vehicle here.",
        },
      },
    ],
  },
  {
    id: "brand",
    name: "Brand Experience",
    color: "#0f6e56",
    bg: "#e0f4ee",
    tactics: [
      {
        id: "web",
        name: "Web",
        vehicles: {
          '144" MODEs': "Placeholder — describe what's happening for this vehicle here.",
          "CREW MODE": "Placeholder — describe what's happening for this vehicle here.",
          "TOUR MODE": "Placeholder — describe what's happening for this vehicle here.",
          "GXV WILD": "Placeholder — describe what's happening for this vehicle here.",
          "GXV HILT": "Placeholder — describe what's happening for this vehicle here.",
          "GXV EPIC": "Placeholder — describe what's happening for this vehicle here.",
          "Grand Bohemian": "Placeholder — describe what's happening for this vehicle here.",
        },
      },
      {
        id: "meta",
        name: "Social — Meta / Facebook",
        vehicles: {
          '144" MODEs': "Placeholder — describe what's happening for this vehicle here.",
          "CREW MODE": "Placeholder — describe what's happening for this vehicle here.",
          "TOUR MODE": "Placeholder — describe what's happening for this vehicle here.",
          "GXV WILD": "Placeholder — describe what's happening for this vehicle here.",
          "GXV HILT": "Placeholder — describe what's happening for this vehicle here.",
          "GXV EPIC": "Placeholder — describe what's happening for this vehicle here.",
          "Grand Bohemian": "Placeholder — describe what's happening for this vehicle here.",
        },
      },
      {
        id: "tiktok",
        name: "Social — TikTok",
        vehicles: {
          '144" MODEs': "Placeholder — describe what's happening for this vehicle here.",
          "CREW MODE": "Placeholder — describe what's happening for this vehicle here.",
          "TOUR MODE": "Placeholder — describe what's happening for this vehicle here.",
          "GXV WILD": "Placeholder — describe what's happening for this vehicle here.",
          "GXV HILT": "Placeholder — describe what's happening for this vehicle here.",
          "GXV EPIC": "Placeholder — describe what's happening for this vehicle here.",
          "Grand Bohemian": "Placeholder — describe what's happening for this vehicle here.",
        },
      },
      {
        id: "linkedin",
        name: "Social — LinkedIn",
        vehicles: {
          '144" MODEs': "Placeholder — describe what's happening for this vehicle here.",
          "CREW MODE": "Placeholder — describe what's happening for this vehicle here.",
          "TOUR MODE": "Placeholder — describe what's happening for this vehicle here.",
          "GXV WILD": "Placeholder — describe what's happening for this vehicle here.",
          "GXV HILT": "Placeholder — describe what's happening for this vehicle here.",
          "GXV EPIC": "Placeholder — describe what's happening for this vehicle here.",
          "Grand Bohemian": "Placeholder — describe what's happening for this vehicle here.",
        },
      },
      {
        id: "youtube",
        name: "Social — YouTube",
        vehicles: {
          '144" MODEs': "Placeholder — describe what's happening for this vehicle here.",
          "CREW MODE": "Placeholder — describe what's happening for this vehicle here.",
          "TOUR MODE": "Placeholder — describe what's happening for this vehicle here.",
          "GXV WILD": "Placeholder — describe what's happening for this vehicle here.",
          "GXV HILT": "Placeholder — describe what's happening for this vehicle here.",
          "GXV EPIC": "Placeholder — describe what's happening for this vehicle here.",
          "Grand Bohemian": "Placeholder — describe what's happening for this vehicle here.",
        },
      },
      {
        id: "search",
        name: "Search / AI",
        vehicles: {
          '144" MODEs': "Placeholder — describe what's happening for this vehicle here.",
          "CREW MODE": "Placeholder — describe what's happening for this vehicle here.",
          "TOUR MODE": "Placeholder — describe what's happening for this vehicle here.",
          "GXV WILD": "Placeholder — describe what's happening for this vehicle here.",
          "GXV HILT": "Placeholder — describe what's happening for this vehicle here.",
          "GXV EPIC": "Placeholder — describe what's happening for this vehicle here.",
          "Grand Bohemian": "Placeholder — describe what's happening for this vehicle here.",
        },
      },
    ],
  },
  {
    id: "pr",
    name: "PR / Media",
    color: "#8c2d50",
    bg: "#f9e8ef",
    tactics: [
      {
        id: "print",
        name: "Print (Paid & Earned)",
        vehicles: {
          '144" MODEs': "Placeholder — describe what's happening for this vehicle here.",
          "CREW MODE": "Placeholder — describe what's happening for this vehicle here.",
          "TOUR MODE": "Placeholder — describe what's happening for this vehicle here.",
          "GXV WILD": "Placeholder — describe what's happening for this vehicle here.",
          "GXV HILT": "Placeholder — describe what's happening for this vehicle here.",
          "GXV EPIC": "Placeholder — describe what's happening for this vehicle here.",
          "Grand Bohemian": "Placeholder — describe what's happening for this vehicle here.",
        },
      },
      {
        id: "influencers",
        name: "Influencers",
        vehicles: {
          '144" MODEs': "Placeholder — describe what's happening for this vehicle here.",
          "CREW MODE": "Placeholder — describe what's happening for this vehicle here.",
          "TOUR MODE": "Placeholder — describe what's happening for this vehicle here.",
          "GXV WILD": "Placeholder — describe what's happening for this vehicle here.",
          "GXV HILT": "Placeholder — describe what's happening for this vehicle here.",
          "GXV EPIC": "Placeholder — describe what's happening for this vehicle here.",
          "Grand Bohemian": "Placeholder — describe what's happening for this vehicle here.",
        },
      },
      {
        id: "press",
        name: "Press & Media",
        vehicles: {
          '144" MODEs': "Placeholder — describe what's happening for this vehicle here.",
          "CREW MODE": "Placeholder — describe what's happening for this vehicle here.",
          "TOUR MODE": "Placeholder — describe what's happening for this vehicle here.",
          "GXV WILD": "Placeholder — describe what's happening for this vehicle here.",
          "GXV HILT": "Placeholder — describe what's happening for this vehicle here.",
          "GXV EPIC": "Placeholder — describe what's happening for this vehicle here.",
          "Grand Bohemian": "Placeholder — describe what's happening for this vehicle here.",
        },
      },
      {
        id: "brand-moments",
        name: "Brand Moments & Product",
        vehicles: {
          '144" MODEs': "Placeholder — describe what's happening for this vehicle here.",
          "CREW MODE": "Placeholder — describe what's happening for this vehicle here.",
          "TOUR MODE": "Placeholder — describe what's happening for this vehicle here.",
          "GXV WILD": "Placeholder — describe what's happening for this vehicle here.",
          "GXV HILT": "Placeholder — describe what's happening for this vehicle here.",
          "GXV EPIC": "Placeholder — describe what's happening for this vehicle here.",
          "Grand Bohemian": "Placeholder — describe what's happening for this vehicle here.",
        },
      },
    ],
  },
];

export { VEHICLES, PILLARS };
