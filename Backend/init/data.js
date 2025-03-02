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
      owner: "67c489dd52e6d66e04f2e4f1"
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
      owner: "67c489dd52e6d66e04f2e4f1"
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
      owner: "67c489c152e6d66e04f2e4d9"
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
      owner: "67c489c152e6d66e04f2e4d9"
  }
  ,
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
        owner: "67c489cc52e6d66e04f2e4df"
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
        owner: "67c489cc52e6d66e04f2e4df"
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
        owner: "67c489d252e6d66e04f2e4e5"
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
        owner: "67c489d252e6d66e04f2e4e5"
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
        owner: "67c489d852e6d66e04f2e4eb"
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
        owner: "67c489d852e6d66e04f2e4eb"
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
        owner: "67c48cec52e6d66e04f2e4f7"
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
        owner: "67c48cec52e6d66e04f2e4f7"
    },
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
      owner: "67c48cf552e6d66e04f2e4fd"
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
      owner: "67c48cf552e6d66e04f2e4fd"
  },
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
      owner: "67c48cfc52e6d66e04f2e503"
  },
  {
      title: "Hollywood Hills Modern Villa",
      description: "Sleek modern villa with outdoor cinema, infinity pool, and stunning LA skyline views.",
      image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
      },
      price: 7200,
      location: "Hollywood Hills",
      country: "United States",
      reviews: [],
      owner: "67c48cfc52e6d66e04f2e503"
  },
  {
    title: "Gstaad Luxury Chalet",
    description: "Exclusive ski chalet with indoor pool, spa facilities, and mountain views.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1517320964276-a002fa203177"
    },
    price: 7500,
    location: "Gstaad",
    country: "Switzerland",
    reviews: [],
    owner: "67c48d0352e6d66e04f2e509"
},
{
    title: "St. Moritz Alpine Lodge",
    description: "Premium lodge with private ski access, wellness center, and panoramic views.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb"
    },
    price: 6800,
    location: "St. Moritz",
    country: "Switzerland",
    reviews: [],
    owner: "67c48d0352e6d66e04f2e509"
},
{
    title: "Serengeti Safari Lodge",
    description: "Luxury safari lodge with private game drives and authentic African experience.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e"
    },
    price: 4500,
    location: "Serengeti",
    country: "Tanzania",
    reviews: [],
    owner: "67c48d0b52e6d66e04f2e50f"
},
{
    title: "Ngorongoro Crater Camp",
    description: "Exclusive tented camp overlooking the crater with luxury amenities.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1533760881669-80db4d7b341a"
    },
    price: 3800,
    location: "Ngorongoro",
    country: "Tanzania",
    reviews: [],
    owner: "67c48d0b52e6d66e04f2e50f"
},
{
    title: "Amsterdam Canal House",
    description: "Historic canal house with modern luxury amenities in the heart of Amsterdam.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4"
    },
    price: 3200,
    location: "Amsterdam",
    country: "Netherlands",
    reviews: [],
    owner: "67c48d1552e6d66e04f2e515"
},
{
    title: "Dutch Windmill Home",
    description: "Unique restored windmill with modern interiors and countryside views.",
    image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1558199141-391d935676f0"
    },
    price: 2800,
    location: "Zaanse Schans",
    country: "Netherlands",
    reviews: [],
    owner: "67c48d1552e6d66e04f2e515"
},
{
  title: "Fiji Private Island Villa",
  description: "Exclusive island villa with private beach, coral reef access, and full staff.",
  image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972"
  },
  price: 12000,
  location: "Mamanuca Islands",
  country: "Fiji",
  reviews: [],
  owner: "67c48d1c52e6d66e04f2e51b"
},
{
  title: "Fiji Overwater Bungalow",
  description: "Luxury overwater bungalow with glass floors and direct lagoon access.",
  image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1583037189850-1921ae7c6c22"
  },
  price: 8500,
  location: "Yasawa Islands",
  country: "Fiji",
  reviews: [],
  owner: "67c48d1c52e6d66e04f2e51b"
},
{
  title: "Maui Oceanfront Estate",
  description: "Spectacular oceanfront estate with infinity pool and private beach access.",
  image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1582719508461-905c673771fd"
  },
  price: 9500,
  location: "Maui",
  country: "United States",
  reviews: [],
  owner: "67c49031da5b950058c92d3e"
},
{
  title: "Kauai Cliff House",
  description: "Stunning cliff-side property with panoramic ocean views and tropical gardens.",
  image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d"
  },
  price: 8200,
  location: "Kauai",
  country: "United States",
  reviews: [],
  owner: "67c49031da5b950058c92d3e"
},
{
  title: "Singapore Skyline Penthouse",
  description: "Ultra-luxury penthouse with infinity pool and panoramic city views.",
  image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
  },
  price: 11000,
  location: "Marina Bay",
  country: "Singapore",
  reviews: [],
  owner: "67c49039da5b950058c92d44"
},
{
  title: "Sentosa Island Villa",
  description: "Exclusive villa with private pool and access to resort amenities.",
  image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf"
  },
  price: 9500,
  location: "Sentosa",
  country: "Singapore",
  reviews: [],
  owner: "67c49039da5b950058c92d44"
},
{
  title: "Amalfi Coast Villa",
  description: "Historic villa with terraced gardens and stunning Mediterranean views.",
  image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1455587734955-081b22074882"
  },
  price: 7500,
  location: "Amalfi",
  country: "Italy",
  reviews: [],
  owner: "67c4904ada5b950058c92d4a"
},
{
  title: "Positano Cliffside Home",
  description: "Elegant home with private pool and spectacular coastal views.",
  image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8"
  },
  price: 6800,
  location: "Positano",
  country: "Italy",
  reviews: [],
  owner: "67c4904ada5b950058c92d4a"
},
{
  title: "Santorini Cave Suite",
  description: "Luxurious cave suite with private infinity pool and caldera views.",
  image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1469796466635-455ede028aca"
  },
  price: 5500,
  location: "Oia",
  country: "Greece",
  reviews: [],
  owner: "67c49051da5b950058c92d50"
},
{
  title: "Mykonos Beachfront Villa",
  description: "Modern villa with private beach access and Aegean Sea views.",
  image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f"
  },
  price: 4800,
  location: "Mykonos",
  country: "Greece",
  reviews: [],
  owner: "67c49051da5b950058c92d50"
}
  
]

export {sampleListings};