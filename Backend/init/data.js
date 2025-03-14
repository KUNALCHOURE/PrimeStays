const sampleListings = [
    // User 1 (67c489dd52e6d66e04f2e4f1) - Malibu/Santa Monica Area
    {
      title: "Luxury Beach Villa Malibu",
      description: "Stunning beachfront villa with private access to the sand, infinity pool, and panoramic ocean views. Perfect for luxury beach living.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b"
      },
      price: 5500,
      location: "Malibu",
      country: "United States",
      reviews: [],
      owner: "67c489dd52e6d66e04f2e4f1",
      ownerInfo: {
        phone: "+1 310-555-1234",
        email: "owner.malibu@luxbeachvillas.com",
        website: "https://luxbeachvillas.com"
      }
    },
    {
      title: "Modern Santa Monica Beachhouse",
      description: "Contemporary beach house steps from Santa Monica pier, featuring rooftop terrace and designer interiors.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1527030280862-64139fba04ca"
      },
      price: 4800,
      location: "Santa Monica",
      country: "United States",
      reviews: [],
      owner: "67c489dd52e6d66e04f2e4f1",
      ownerInfo: {
        phone: "+1 310-555-5678",
        email: "owner.santamonica@luxbeachvillas.com",
        website: "https://luxbeachvillas.com"
      }
    },
  
    // User 2 (67c489c152e6d66e04f2e4d9) - Manhattan/Brooklyn Area
    {
      title: "Luxury Manhattan Penthouse",
      description: "Spectacular penthouse in the heart of Manhattan with Central Park views and private elevator access.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
      },
      price: 7500,
      location: "Manhattan",
      country: "United States",
      reviews: [],
      owner: "67c489c152e6d66e04f2e4d9",
      ownerInfo: {
        phone: "+1 212-555-7890",
        email: "owner.manhattan@nycluxuryhomes.com",
        website: "https://nycluxuryhomes.com"
      }
    },
    {
      title: "Brooklyn Heights Brownstone",
      description: "Historic brownstone with modern amenities, featuring garden terrace and skyline views.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a"
      },
      price: 4200,
      location: "Brooklyn",
      country: "United States",
      reviews: [],
      owner: "67c489c152e6d66e04f2e4d9",
      ownerInfo: {
        phone: "+1 718-555-1234",
        email: "owner.brooklyn@nycluxuryhomes.com",
        website: "https://nycluxuryhomes.com"
      }
    },
  
    // User 3 (67c489cc52e6d66e04f2e4df) - Swiss Alps Region
    {
      title: "Luxury Zermatt Ski Chalet",
      description: "Premium ski-in/ski-out chalet with Matterhorn views, featuring private spa and heated boot room.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1517320964276-a002fa203177"
      },
      price: 6500,
      location: "Zermatt",
      country: "Switzerland",
      reviews: [],
      owner: "67c489cc52e6d66e04f2e4df",
      ownerInfo: {
        phone: "+41 27 555 1234",
        email: "owner.zermatt@swissluxchalets.com",
        website: "https://swissluxchalets.com"
      }
    },
    {
      title: "Verbier Mountain Lodge",
      description: "Contemporary alpine lodge with panoramic mountain views, outdoor jacuzzi, and gourmet kitchen.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb"
      },
      price: 5800,
      location: "Verbier",
      country: "Switzerland",
      reviews: [],
      owner: "67c489cc52e6d66e04f2e4df",
      ownerInfo: {
        phone: "+41 27 555 5678",
        email: "owner.verbier@swissluxchalets.com",
        website: "https://swissluxchalets.com"
      }
    },
  
    // User 4 (67c489d252e6d66e04f2e4e5) - Tuscany Region
    {
      title: "Historic Florence Villa",
      description: "Restored 16th-century villa in the heart of Tuscany with private vineyard and original frescoes.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945"
      },
      price: 4800,
      location: "Florence",
      country: "Italy",
      reviews: [],
      owner: "67c489d252e6d66e04f2e4e5",
      ownerInfo: {
        phone: "+39 055 555 1234",
        email: "owner.florence@tuscanvillas.com",
        website: "https://tuscanvillas.com"
      }
    },
    {
      title: "Chianti Countryside Estate",
      description: "Elegant country estate surrounded by olive groves and vineyards with infinity pool and wine cellar.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1504279577054-acfeccf8fc52"
      },
      price: 4200,
      location: "Chianti",
      country: "Italy",
      reviews: [],
      owner: "67c489d252e6d66e04f2e4e5",
      ownerInfo: {
        phone: "+39 055 555 5678",
        email: "owner.chianti@tuscanvillas.com",
        website: "https://tuscanvillas.com"
      }
    },
  
    // User 5 (67c489d852e6d66e04f2e4eb) - Pacific Northwest
    {
      title: "Portland Treehouse Retreat",
      description: "Luxurious treehouse with modern amenities, nestled in a private forest setting.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4"
      },
      price: 2800,
      location: "Portland",
      country: "United States",
      reviews: [],
      owner: "67c489d852e6d66e04f2e4eb",
      ownerInfo: {
        phone: "+1 503-555-1234",
        email: "owner.portland@pnwluxstays.com",
        website: "https://pnwluxstays.com"
      }
    },
    {
      title: "Seattle Waterfront Lodge",
      description: "Contemporary lodge with Puget Sound views, private dock, and outdoor entertainment area.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
      },
      price: 3200,
      location: "Seattle",
      country: "United States",
      reviews: [],
      owner: "67c489d852e6d66e04f2e4eb",
      ownerInfo: {
        phone: "+1 206-555-5678",
        email: "owner.seattle@pnwluxstays.com",
        website: "https://pnwluxstays.com"
      }
    },
  
    // User 6 (67c48cec52e6d66e04f2e4f7) - Mexican Riviera
    {
      title: "Cancun Beachfront Paradise",
      description: "Luxury beachfront villa with infinity pool, private beach access, and stunning Caribbean views.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9"
      },
      price: 4500,
      location: "Cancun",
      country: "Mexico",
      reviews: [],
      owner: "67c48cec52e6d66e04f2e4f7",
      ownerInfo: {
        phone: "+52 998 555 1234",
        email: "owner.cancun@mexicorivierastays.com",
        website: "https://mexicorivierastays.com"
      }
    },
    {
      title: "Tulum Eco-Resort Villa",
      description: "Sustainable luxury villa with private cenote, jungle views, and access to pristine beaches.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f"
      },
      price: 3800,
      location: "Tulum",
      country: "Mexico",
      reviews: [],
      owner: "67c48cec52e6d66e04f2e4f7",
      ownerInfo: {
        phone: "+52 998 555 5678",
        email: "owner.tulum@mexicorivierastays.com",
        website: "https://mexicorivierastays.com"
      }
    },
  
    // User 7 (67c48cf552e6d66e04f2e4fd) - Lake Tahoe Area
    {
      title: "Lake Tahoe Waterfront Lodge",
      description: "Stunning lodge with private beach access, boat dock, and panoramic lake views.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
      },
      price: 4200,
      location: "Lake Tahoe",
      country: "United States",
      reviews: [],
      owner: "67c48cf552e6d66e04f2e4fd",
      ownerInfo: {
        phone: "+1 530-555-1234",
        email: "owner.tahoe@lakeluxstays.com",
        website: "https://lakeluxstays.com"
      }
    },
    {
      title: "Truckee Mountain Cabin",
      description: "Cozy mountain retreat with hot tub, ski storage, and forest views.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
      },
      price: 3800,
      location: "Truckee",
      country: "United States",
      reviews: [],
      owner: "67c48cf552e6d66e04f2e4fd",
      ownerInfo: {
        phone: "+1 530-555-5678",
        email: "owner.truckee@lakeluxstays.com",
        website: "https://lakeluxstays.com"
      }
    },
  
    // User 8 (67c48cfc52e6d66e04f2e503) - Beverly Hills/Hollywood Hills Area
    {
      title: "Beverly Hills Luxury Estate",
      description: "Opulent estate with infinity pool, tennis court, and city views.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd"
      },
      price: 8500,
      location: "Beverly Hills",
      country: "United States",
      reviews: [],
      owner: "67c48cf552e6d66e04f2e4fd",
      ownerInfo: {
        phone: "+1 530-555-5678",
        email: "owner.truckee@lakeluxstays.com",
        website: "https://lakeluxstays.com"
      }
    }
];

export {sampleListings};