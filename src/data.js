// ============================================================
//  MARKETING DASHBOARD DATA
//  This is the only file you need to edit.
//  Use dealers: { } for most tactics.
//  Use events: { } for calendar-style tactics like Tour.
//  To add a new entry: "Name": "Description",
//  To remove an entry: delete that line.
//  Always make sure each line ends with a comma.
// ============================================================

const PILLARS = [
  {
    id: "leadgen",
    name: "Lead Gen",
    color: "#0d2d4a",
    textColor: "#ffffff",
    bg: "#0d2d4a",
    tactics: [
      {
        id: "digital-marketing",
        name: "Integrated Digital Marketing & Demand Gen",
        dealers: {
          "Placeholder": "Describe what's happening here.",
        },
      },
      {
        id: "campaigns",
        name: "Campaigns (Email / Digital)",
        dealers: {
          "Placeholder": "Describe what's happening here.",
        },
      },
      {
        id: "promotions",
        name: "Promotions",
        dealers: {
          "Placeholder": "Describe what's happening here.",
        },
      },
       {
        id: "tour",
        name: "Tour",
        events: {
          "Tampa RV Show": "Jan 13 - 18",
          "DSC Expo": "Feb 6 - 8",
          "OVE SoCal": "Mar 14 - 15",
          "Moore Expo": "Apr 17 - 19",
          "Grenadier Gathering West": "Apr 30 - May 3",
          "OVE West": "May 15 - 17",
          "Backcountry Off Road Expo - Utah": "May 22 - 23",
          "OVE PNW": "Jun 26 - 28",
          "OVE Mtn West": "Aug 21 - 23",
          "Hershey RV Show": "Sept 26 - 28",
          "Grenadier Gathering East": "Oct 8 - 11",
          "OVE East": "Oct 23 - 25",
        },
      },
       {
        id: "sales-show",
        name: "Events by Vehicle",
        vehicles: {
          '144" MODEs': "DSC Expo",
          "CREW MODE": "",
          "TOUR MODE": "Tampa RV Show | OVE SoCal | RX3 | Moore Expo | OVE West",
          "GXV WILD": "OVE West | OVE PNW",
          "GXV HILT": "DSC Expo | OVE SoCal | RX3 | OVE West",
          "GXV EPIC": "OVE West",
          "Grand Bohemian": "OVE SoCal | RX3 | Moore Expo | Grenadier Gathering | Trinite Road Rally | OVE West",
        },
      },
    ],
  },
  {
    id: "dealer",
    name: "Dealer Channels",
    color: "#c0272d",
    textColor: "#ffffff",
    bg: "#c0272d",
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
        dealers: {
          "Vehicle Canvases": "Canvases in each dealer location.",
          "Literature": "Placeholder — describe what's happening here.",
          "Media Kit": "Media kits by product for use in promotional materials, socials, ads, etc.",
        },
      },
      {
        id: "geofencing",
        name: "Geo Fencing / Local / Targeted Campaigns",
        dealers: {
          "La Mesa": "January Campaign",
        },
      },
    ],
  },
  {
    id: "pr",
    name: "PR / Media",
    color: "#f07800",
    textColor: "#1a1a1a",
    bg: "#f07800",
    tactics: [
      {
        id: "print",
        name: "Print (Paid & Earned)",
        dealers: {
          "Placeholder": "Describe what's happening here.",
        },
      },
      {
        id: "influencers",
        name: "Influencers",
        dealers: {
          "Placeholder": "Describe what's happening here.",
        },
      },
      {
        id: "press",
        name: "Press & Media",
        dealers: {
          "Placeholder": "Describe what's happening here.",
        },
      },
      {
        id: "brand-moments",
        name: "Brand Moments & Product",
        dealers: {
          "Placeholder": "Describe what's happening here.",
        },
      },
    ],
  },
  {
    id: "brand",
    name: "Brand Experience",
    color: "#c17f00",
    textColor: "#1a1a1a",
    bg: "#f9b234",
    tactics: [
      {
        id: "web",
        name: "Web",
        dealers: {
          "Placeholder": "Describe what's happening here.",
        },
      },
      {
        id: "meta",
        name: "Social — Meta / Facebook",
        dealers: {
          "Placeholder": "Describe what's happening here.",
        },
      },
      {
        id: "tiktok",
        name: "Social — TikTok",
        dealers: {
          "Placeholder": "Describe what's happening here.",
        },
      },
      {
        id: "linkedin",
        name: "Social — LinkedIn",
        dealers: {
          "Placeholder": "Describe what's happening here.",
        },
      },
      {
        id: "youtube",
        name: "Social — YouTube",
        dealers: {
          "Placeholder": "Describe what's happening here.",
        },
      },
      {
        id: "search",
        name: "Search / AI",
        dealers: {
          "Placeholder": "Describe what's happening here.",
        },
      },
    ],
  },
  {
    id: "community",
    name: "Community",
    color: "#7a6e00",
    textColor: "#1a1a1a",
    bg: "#e8dfa0",
    tactics: [
      {
        id: "app",
        name: "App",
        dealers: {
          "Placeholder": "Describe what's happening here.",
        },
      },
      {
        id: "experiences",
        name: "Experiences",
        dealers: {
          "Placeholder": "Describe what's happening here.",
        },
      },
      {
        id: "activations",
        name: "Activations",
        dealers: {
          "Placeholder": "Describe what's happening here.",
        },
      },
      {
        id: "blogs",
        name: "Blogs",
        dealers: {
          "Placeholder": "Describe what's happening here.",
        },
      },
    ],
  },
];

export { PILLARS };
