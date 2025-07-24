// city-data.js - All city data for FANTOWNS

const CITY_DATA = {
  liverpool: {
    meta: {
      title: "Liverpool Fan Guide - Best Hotels, Pubs & Experiences | FANTOWNS",
      description: "The ultimate Liverpool fan travel guide. Discover the best fan hotels near Anfield, legendary pubs, restaurants, and insider tips to experience Liverpool FC culture like a true Red.",
      keywords: "Liverpool FC travel, Anfield hotels, Liverpool fan pubs, Kop experience, Liverpool travel guide, football tourism, Liverpool FC bars"
    },
    theme: {
      primary: "#c8102e",
      secondary: "#e53e3e", 
      tagBg: "#fee2e2",
      tagColor: "#dc2626",
      heroBg: "linear-gradient(rgba(200, 16, 46, 0.8), rgba(200, 16, 46, 0.8)), url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 600\"><rect fill=\"%23c8102e\" width=\"1200\" height=\"600\"/><path fill=\"%23ffffff\" opacity=\"0.1\" d=\"M0,300 Q300,100 600,300 T1200,300 L1200,600 L0,600 Z\"/></svg>')"
    },
    hero: {
      title: "Liverpool 🇬🇧",
      subtitle: "Where \"You'll Never Walk Alone\" Echoes Through Every Street",
      stats: [
        { number: "6x", label: "Champions League" },
        { number: "54,000", label: "Anfield Capacity" },
        { number: "130+", label: "Years of History" }
      ]
    },
    sections: {
      hotels: {
        description: "Stay where the Reds gather, from luxury suites to budget-friendly spots that put you in the heart of Liverpool FC culture.",
        items: [
          {
            name: "The Shankly Hotel",
            type: "Luxury",
            location: "City Center",
            description: "Named after legendary manager Bill Shankly, this boutique hotel is a shrine to Liverpool FC. Every room features club memorabilia and the bar hosts pre-match gatherings.",
            tags: ["LFC Themed", "City Center", "Bar & Restaurant"],
            rating: "4.8",
            distance: "15 min to Anfield",
            icon: "🏨"
          },
          {
            name: "Hotel Anfield",
            type: "Budget-Friendly",
            location: "Anfield",
            description: "Right in the heart of Anfield, this family-run hotel is where away fans and locals mix. Basic rooms but unbeatable location and atmosphere on match days.",
            tags: ["Walking Distance", "Budget", "Local Atmosphere"],
            rating: "4.3",
            distance: "2 min walk to Anfield",
            icon: "🏨"
          },
          {
            name: "Titanic Hotel Liverpool",
            type: "Historic",
            location: "Stanley Dock",
            description: "Converted from a historic warehouse, this unique hotel offers stunning views and is popular with players' families. The rum warehouse bar is legendary.",
            tags: ["Historic", "Unique Architecture", "Riverside"],
            rating: "4.6",
            distance: "20 min to Anfield",
            icon: "🏨"
          }
        ]
      },
      pubs: {
        description: "Experience the real Liverpool FC culture in these historic pubs where fans have gathered for generations.",
        items: [
          {
            name: "The Sandon",
            type: "Historic",
            location: "Anfield",
            description: "The birthplace of Liverpool FC in 1892. This historic pub is where it all began. On match days, it's packed with singing Reds and the atmosphere is electric.",
            tags: ["Historic Birthplace", "Match Day Central", "Authentic Atmosphere"],
            rating: "4.9",
            distance: "5 min walk to Anfield",
            icon: "🍺"
          },
          {
            name: "The Arkles",
            type: "Traditional",
            location: "Anfield Road",
            description: "Named after the famous racehorse, this is where the pre-match atmosphere reaches fever pitch. Arrive 2 hours early on big match days.",
            tags: ["Pre-Match Hub", "Traditional Pub", "Local Crowd"],
            rating: "4.7",
            distance: "3 min walk to Anfield",
            icon: "🍺"
          },
          {
            name: "The Cavern Club",
            type: "Music Legend",
            location: "Mathew Street",
            description: "Where The Beatles started. While not football-specific, it's essential Liverpool culture. Many players visit, and it's where music and football passion merge.",
            tags: ["Beatles History", "Live Music", "Cultural Icon"],
            rating: "4.8",
            distance: "City Center",
            icon: "🍺"
          }
        ]
      },
      restaurants: {
        description: "From traditional scouse to modern dining, these restaurants are where players, fans, and locals come together.",
        items: [
          {
            name: "The Boot Room Sports Cafe",
            type: "Sports Dining",
            location: "Anfield",
            description: "Named after Liverpool's famous boot room, this restaurant inside Anfield serves match day meals and is decorated with club history from floor to ceiling.",
            tags: ["Inside Anfield", "Match Day Dining", "Club History"],
            rating: "4.5",
            distance: "Inside Stadium",
            icon: "🍽️"
          },
          {
            name: "Maggie May's",
            type: "Traditional Scouse",
            location: "Bold Street",
            description: "Authentic scouse (Liverpool's traditional stew) served since 1986. A local institution where fans fuel up before matches and celebrate after victories.",
            tags: ["Traditional Scouse", "Local Institution", "Affordable"],
            rating: "4.6",
            distance: "City Center",
            icon: "🍽️"
          },
          {
            name: "Panoramic 34",
            type: "Fine Dining",
            location: "West Tower",
            description: "Liverpool's premier fine dining restaurant where players celebrate big wins. 34th floor views over the city make victory dinners unforgettable.",
            tags: ["Fine Dining", "Player Favorite", "City Views"],
            rating: "4.8",
            distance: "City Center",
            icon: "🍽️"
          }
        ]
      },
      attractions: {
        description: "Experience Liverpool FC history and culture through these essential fan destinations.",
        items: [
          {
            name: "Anfield Stadium Tour",
            type: "Stadium Experience",
            location: "Anfield",
            description: "Walk through the tunnel, sit in Klopp's seat, and experience \"You'll Never Walk Alone\" in the Kop. The audio guide features club legends sharing stories.",
            tags: ["Stadium Tour", "Player Stories", "Kop Experience"],
            rating: "4.9",
            distance: "At Anfield",
            icon: "⚽"
          },
          {
            name: "LFC Story Museum",
            type: "Interactive Museum",
            location: "Anfield",
            description: "State-of-the-art museum telling 130 years of LFC history. Interactive exhibits include the famous European Cup wins and Istanbul 2005 comeback.",
            tags: ["Interactive Exhibits", "Trophy Room", "Club History"],
            rating: "4.8",
            distance: "At Anfield",
            icon: "🏆"
          },
          {
            name: "Shankly Gates",
            type: "Memorial",
            location: "Anfield Road",
            description: "The iconic gates with \"You'll Never Walk Alone\" where fans leave scarves, flowers, and tributes. An emotional pilgrimage site for every Red.",
            tags: ["Iconic Memorial", "Fan Tributes", "Photo Essential"],
            rating: "5.0",
            distance: "Outside Anfield",
            icon: "🎵"
          }
        ]
      },
      tips: {
        description: "Master these local customs and you'll be welcomed as an honorary Scouser.",
        items: [
          {
            icon: "🎵",
            title: "Learn the Songs",
            content: "Master \"You'll Never Walk Alone,\" \"Allez Allez Allez,\" and \"Fields of Anfield Road.\" The Kop won't sing along if you don't know the words. Download the LFC Songs app to practice."
          },
          {
            icon: "🕐",
            title: "Arrive Early",
            content: "Get to pubs 3 hours before kickoff for big matches. The best atmosphere builds slowly, and you'll want to soak in every moment of the pre-match ritual."
          },
          {
            icon: "🧣",
            title: "Bring a Scarf",
            content: "Always carry a Liverpool scarf. During \"You'll Never Walk Alone,\" hold it high above your head. It's not just tradition - it's sacred to the Kop faithful."
          },
          {
            icon: "🗣️",
            title: "Local Lingo",
            content: "\"Boss\" means great, \"Sound\" means good, \"La\" is how you address anyone. Say \"Alright la?\" as a greeting. Never call it \"soccer\" - it's football, always."
          },
          {
            icon: "🚇",
            title: "Transport Tips",
            content: "Take the 917 bus from city center to Anfield - it's packed with singing fans. After matches, walk to Kirkdale station (15 mins) to avoid crowds at Anfield station."
          },
          {
            icon: "🏆",
            title: "Respect the History",
            content: "Know about Hillsborough, Heysel, and the 96. Show respect at memorials. Understanding Liverpool's tragedy and triumph makes you a real supporter, not just a tourist."
          }
        ]
      }
    },
    cta: {
      title: "Ready to Experience Liverpool Like a True Red?",
      subtitle: "Book your fan experience and join the most passionate football culture in the world.",
      buttonText: "Plan Your Liverpool Journey"
    }
  },

  greenbay: {
    meta: {
      title: "Green Bay Packers Fan Guide - Lambeau Field Hotels & Tailgating | FANTOWNS",
      description: "Ultimate Green Bay Packers travel guide. Best hotels near Lambeau Field, legendary tailgating spots, cheese curds, and insider tips for the frozen tundra experience.",
      keywords: "Green Bay Packers travel, Lambeau Field hotels, tailgating guide, Wisconsin cheese, NFL travel, Packers bars, Green Bay restaurants"
    },
    theme: {
      primary: "#203731",
      secondary: "#ffb612",
      tagBg: "#fff3cd",
      tagColor: "#856404",
      heroBg: "linear-gradient(rgba(32, 55, 49, 0.8), rgba(32, 55, 49, 0.8)), url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 600\"><rect fill=\"%23203731\" width=\"1200\" height=\"600\"/><path fill=\"%23ffb612\" opacity=\"0.2\" d=\"M0,300 Q300,100 600,300 T1200,300 L1200,600 L0,600 Z\"/></svg>')"
    },
    hero: {
      title: "Green Bay 🇺🇸",
      subtitle: "The Frozen Tundra Where Legends Are Born and Cheese Is Sacred",
      stats: [
        { number: "4x", label: "Super Bowl Wins" },
        { number: "81,441", label: "Lambeau Capacity" },
        { number: "137,000", label: "Season Ticket Wait" }
      ]
    },
    sections: {
      hotels: {
        description: "Stay where Cheeseheads gather, from Titletown District luxury to classic Wisconsin hospitality near Lambeau Field.",
        items: [
          {
            name: "Lodge Kohler",
            type: "Luxury Resort",
            location: "Titletown District",
            description: "Official Packers hotel in Titletown District. Walking distance to Lambeau with exclusive packages including field tours and player meet-and-greets.",
            tags: ["Official Packers Hotel", "Titletown District", "Luxury Amenities"],
            rating: "4.8",
            distance: "Walking distance to Lambeau",
            icon: "🏨"
          },
          {
            name: "Hampton Inn & Suites Green Bay",
            type: "Fan Favorite",
            location: "Ashwaubenon",
            description: "The unofficial headquarters for visiting fans. Lobby decorated with Packers history, and the breakfast area buzzes with game day energy.",
            tags: ["Fan Central", "Complimentary Breakfast", "Packers Decor"],
            rating: "4.5",
            distance: "5 min drive to Lambeau",
            icon: "🏨"
          },
          {
            name: "Stadium View Bed & Breakfast",
            type: "Local Experience",
            location: "Ashwaubenon",
            description: "Family-run B&B where you can literally see Lambeau from your window. Hosts are season ticket holders who share insider tailgating secrets.",
            tags: ["Stadium Views", "Local Hosts", "Tailgating Tips"],
            rating: "4.7",
            distance: "2 blocks to Lambeau",
            icon: "🏨"
          }
        ]
      },
      pubs: {
        description: "Experience true Wisconsin hospitality in these legendary bars where Packers fans have celebrated victories since before the Ice Bowl.",
        items: [
          {
            name: "Kroll's West",
            type: "Historic Institution",
            location: "Green Bay West",
            description: "Home of the original \"Packer Burger\" since 1936. Where Vince Lombardi used to eat. The walls are covered with decades of Packers history and signed memorabilia.",
            tags: ["Historic", "Packer Burger", "Lombardi's Spot"],
            rating: "4.9",
            distance: "10 min to Lambeau",
            icon: "🍺"
          },
          {
            name: "Stadium View Bar",
            type: "Game Day Central",
            location: "Ashwaubenon",
            description: "You can see Lambeau Field from the windows. Pre-game headquarters where fans gather 4 hours before kickoff. Famous for their bloody marys and cheese curds.",
            tags: ["Stadium Views", "Pre-Game Hub", "Bloody Marys"],
            rating: "4.6",
            distance: "Across from Lambeau",
            icon: "🍺"
          },
          {
            name: "Curly's Pub",
            type: "Sports Bar",
            location: "Titletown District",
            description: "Modern sports bar in Titletown District with massive screens and local craft beer. Named after Curly Lambeau, it's where younger fans gather for the full experience.",
            tags: ["Modern Sports Bar", "Craft Beer", "Large Screens"],
            rating: "4.4",
            distance: "Titletown District",
            icon: "🍺"
          }
        ]
      },
      restaurants: {
        description: "From legendary cheese curds to hearty Wisconsin fare, these restaurants fuel Packers fans through the coldest games.",
        items: [
          {
            name: "Lambeau Field Concessions",
            type: "Stadium Dining",
            location: "Inside Lambeau",
            description: "Famous bratwurst, cheese curds, and local beer. The concourse restaurants offer views of the frozen tundra while you warm up with Wisconsin comfort food.",
            tags: ["Stadium Food", "Bratwurst", "Cheese Curds"],
            rating: "4.3",
            distance: "Inside Stadium",
            icon: "🍽️"
          },
          {
            name: "The Pancake Place",
            type: "Breakfast Institution",
            location: "Green Bay",
            description: "Game day breakfast tradition since 1967. Massive portions of pancakes, hash browns, and bacon to fuel your tailgating. Arrives at 5 AM on game days.",
            tags: ["Game Day Breakfast", "Huge Portions", "Local Tradition"],
            rating: "4.7",
            distance: "15 min to Lambeau",
            icon: "🍽️"
          },
          {
            name: "Al's Hamburger Shop",
            type: "Local Legend",
            location: "Green Bay",
            description: "Tiny burger joint that's been serving the community since 1934. Players often stop by, and the walls are covered with photos of Packers legends.",
            tags: ["Since 1934", "Player Hangout", "Tiny Burgers"],
            rating: "4.8",
            distance: "Downtown Green Bay",
            icon: "🍽️"
          }
        ]
      },
      attractions: {
        description: "Experience Packers history and Wisconsin culture through these essential fan destinations in Titletown.",
        items: [
          {
            name: "Lambeau Field Tour",
            type: "Stadium Experience",
            location: "Lambeau Field",
            description: "Walk through the tunnel onto the frozen tundra, visit the locker room, and see the championship trophies. The tour includes the Packers Hall of Fame.",
            tags: ["Stadium Tour", "Hall of Fame", "Championship Trophies"],
            rating: "4.9",
            distance: "At Lambeau",
            icon: "⚽"
          },
          {
            name: "Titletown District",
            type: "Entertainment Complex",
            location: "Next to Lambeau",
            description: "Year-round entertainment with ice skating in winter, tubing hill, playground, and shops. The heart of modern Packers culture and family fun.",
            tags: ["Year-Round Fun", "Ice Skating", "Family Activities"],
            rating: "4.6",
            distance: "Next to Lambeau",
            icon: "🎢"
          },
          {
            name: "Lambeau Leap Wall",
            type: "Photo Opportunity",
            location: "Lambeau Field",
            description: "Practice your Lambeau Leap at this replica wall outside the stadium. Every Packers fan needs the photo of them celebrating like their heroes.",
            tags: ["Photo Op", "Lambeau Leap", "Fan Tradition"],
            rating: "4.8",
            distance: "Outside Lambeau",
            icon: "📸"
          }
        ]
      },
      tips: {
        description: "Master these Wisconsin customs and you'll be welcomed as an honorary Cheesehead.",
        items: [
          {
            icon: "🧀",
            title: "Embrace the Cheese",
            content: "Wear a cheesehead hat with pride. Order cheese curds at every meal. Say 'Go Pack Go' to any stranger in green and gold. Cheese isn't just food here - it's identity."
          },
          {
            icon: "❄️",
            title: "Dress for the Tundra",
            content: "Layer like your life depends on it. Hand warmers, foot warmers, thermal underwear. The coldest games create the best memories, but only if you can feel your fingers."
          },
          {
            icon: "🍺",
            title: "Tailgating Mastery",
            content: "Start 4 hours early. Bring bratwurst, beer, and a portable heater. Make friends with neighboring tailgaters - they'll share food and warmth. It's a community, not competition."
          },
          {
            icon: "🏈",
            title: "Know the History",
            content: "Learn about Curly Lambeau, Vince Lombardi, Brett Favre, and Aaron Rodgers. The Ice Bowl, the Titletown era. This isn't just a team - it's 100+ years of small-town pride."
          },
          {
            icon: "🚗",
            title: "Parking Strategy",
            content: "Park in residential areas and walk. Locals rent their driveways for $20-40. It's cheaper than official lots and you'll meet amazing people. Plus, easier exit after the game."
          },
          {
            icon: "🎵",
            title: "Learn the Chants",
            content: "Master 'Go Pack Go!' and the 'Green Bay Packers' fight song. During the national anthem, cheer loudest at 'land of the free.' It's tradition, not disrespect."
          }
        ]
      }
    },
    cta: {
      title: "Ready to Experience the Frozen Tundra Like a True Cheesehead?",
      subtitle: "Join the most loyal fanbase in the NFL where every game is a frozen celebration.",
      buttonText: "Plan Your Green Bay Pilgrimage"
    }
  },

  buenosaires: {
    meta: {
      title: "Buenos Aires Football Fan Guide - Boca vs River, La Bombonera | FANTOWNS",
      description: "Ultimate Buenos Aires football fan guide. Experience El Superclásico, stay near La Bombonera, discover tango bars, and learn to survive the most passionate football city on Earth.",
      keywords: "Buenos Aires football, Boca Juniors, River Plate, La Bombonera, El Superclásico, Argentina football travel, Buenos Aires tango"
    },
    theme: {
      primary: "#003366",
      secondary: "#FFD700",
      tagBg: "#fff3cd",
      tagColor: "#856404",
      heroBg: "linear-gradient(rgba(0, 51, 102, 0.8), rgba(0, 51, 102, 0.8)), url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 600\"><rect fill=\"%23003366\" width=\"1200\" height=\"600\"/><path fill=\"%23FFD700\" opacity=\"0.3\" d=\"M0,300 Q300,100 600,300 T1200,300 L1200,600 L0,600 Z\"/></svg>')"
    },
    hero: {
      title: "Buenos Aires 🇦🇷",
      subtitle: "Where Football Is Religion and Every Match Is a War",
      stats: [
        { number: "El Superclásico", label: "Greatest Derby" },
        { number: "49,000", label: "La Bombonera" },
        { number: "365", label: "Days of Passion" }
      ]
    },
    sections: {
      hotels: {
        description: "Stay in the neighborhoods where football passion runs deepest, from La Boca's colorful streets to Palermo's trendy districts.",
        items: [
          {
            name: "Hotel Madero Buenos Aires",
            type: "Luxury",
            location: "Puerto Madero",
            description: "Ultra-modern luxury hotel where visiting players stay. River views and easy access to both La Bombonera and El Monumental. Concierge can arrange derby tickets.",
            tags: ["Player Hotel", "River Views", "Ticket Concierge"],
            rating: "4.8",
            distance: "15 min to La Boca",
            icon: "🏨"
          },
          {
            name: "La Boca Hostel",
            type: "Budget Football",
            location: "La Boca",
            description: "In the heart of Boca territory, this colorful hostel is covered in Boca Juniors memorabilia. Fellow guests are football obsessed from around the world.",
            tags: ["La Boca Location", "Football Themed", "International Fans"],
            rating: "4.4",
            distance: "5 min walk to La Bombonera",
            icon: "🏨"
          },
          {
            name: "Casa Sur Palermo",
            type: "Boutique",
            location: "Palermo",
            description: "Stylish boutique hotel in trendy Palermo. Many players and football journalists stay here. The rooftop bar overlooks the city where football dreams are born.",
            tags: ["Trendy Palermo", "Rooftop Bar", "Football Media"],
            rating: "4.6",
            distance: "20 min to stadiums",
            icon: "🏨"
          }
        ]
      },
      pubs: {
        description: "Experience the intense passion of Argentine football culture in these legendary bars where rivalries run deeper than blood.",
        items: [
          {
            name: "El Obrero",
            type: "Boca Institution",
            location: "La Boca",
            description: "Traditional parrilla where Boca legends like Maradona ate. Walls covered in Boca history. On derby days, the entire neighborhood gathers here before marching to La Bombonera.",
            tags: ["Maradona's Spot", "Parrilla", "Pre-Match Central"],
            rating: "4.9",
            distance: "2 blocks from La Bombonera",
            icon: "🍺"
          },
          {
            name: "Bar Notable El Tortoni",
            type: "Historic Cafe",
            location: "San Telmo",
            description: "Buenos Aires' most famous cafe since 1858. Where football poets and tango singers debate who's greater: Maradona or Pelé. Neutral territory for all fans.",
            tags: ["Historic Cafe", "Tango Shows", "Football Debates"],
            rating: "4.5",
            distance: "Downtown",
            icon: "🍺"
          },
          {
            name: "Refugio de Fanáticos",
            type: "Multi-Team Bar",
            location: "Palermo",
            description: "The only bar in Buenos Aires where Boca and River fans can coexist peacefully. Separate sections, neutral zone in middle. Come here to understand the rivalry.",
            tags: ["Multi-Team", "Rivalry Education", "Safe Space"],
            rating: "4.3",
            distance: "Palermo",
            icon: "🍺"
          }
        ]
      },
      restaurants: {
        description: "From world-class steakhouses to neighborhood parrillas, fuel your football passion with Argentina's legendary cuisine.",
        items: [
          {
            name: "La Brigada",
            type: "Maradona's Steakhouse",
            location: "San Telmo",
            description: "Diego Maradona's favorite steakhouse, walls covered in his memorabilia. The beef is world-class, and football legends still dine here regularly.",
            tags: ["Maradona's Favorite", "World-Class Beef", "Football Legends"],
            rating: "4.8",
            distance: "San Telmo",
            icon: "🍽️"
          },
          {
            name: "Parrilla Peña",
            type: "Neighborhood Asado",
            location: "La Boca",
            description: "No-frills neighborhood grill where dock workers and football fans eat massive steaks for $10. Authentic Buenos Aires experience with zero tourists.",
            tags: ["Authentic Local", "Massive Steaks", "No Tourists"],
            rating: "4.7",
            distance: "La Boca",
            icon: "🍽️"
          },
          {
            name: "Don Carlos",
            type: "Fine Dining",
            location: "Recoleta",
            description: "Where football executives celebrate championships. Elegant atmosphere, perfect steaks, and wine cellar with bottles signed by football legends.",
            tags: ["Executive Dining", "Wine Cellar", "Championship Celebrations"],
            rating: "4.9",
            distance: "Recoleta",
            icon: "🍽️"
          }
        ]
      },
      attractions: {
        description: "Experience the soul of Argentine football through these passionate destinations where legends were born.",
        items: [
          {
            name: "La Bombonera Stadium Tour",
            type: "Sacred Ground",
            location: "La Boca",
            description: "Tour the most intimidating stadium in world football. Feel the stands shake as guides recreate the atmosphere. Visit Maradona's museum and touch football history.",
            tags: ["Most Intimidating", "Maradona Museum", "Football History"],
            rating: "5.0",
            distance: "La Boca",
            icon: "⚽"
          },
          {
            name: "El Monumental (River Plate)",
            type: "Millionaire's Home",
            location: "Núñez",
            description: "Tour River Plate's massive stadium where legends like Alfredo Di Stéfano played. The museum showcases their international glory and eternal rivalry with Boca.",
            tags: ["Massive Stadium", "International Glory", "Rivalry History"],
            rating: "4.8",
            distance: "Núñez",
            icon: "🏟️"
          },
          {
            name: "Caminito Street",
            type: "Colorful Culture",
            location: "La Boca",
            description: "Famous colorful street where tango was born and football dreams begin. Street artists paint murals of Maradona and Messi. Essential Buenos Aires experience.",
            tags: ["Tango Birthplace", "Maradona Murals", "Colorful Street"],
            rating: "4.6",
            distance: "Next to La Bombonera",
            icon: "🎨"
          }
        ]
      },
      tips: {
        description: "Navigate the most passionate football city on Earth without starting a neighborhood war.",
        items: [
          {
            icon: "⚽",
            title: "Choose Your Colors Wisely",
            content: "NEVER wear River colors in La Boca or Boca colors in Núñez. This isn't a joke - it's genuinely dangerous. When in doubt, wear neutral colors or Argentina national team gear."
          },
          {
            icon: "🎵",
            title: "Learn the Songs",
            content: "Each team has hundreds of songs. Learn at least 'La Doce' for Boca or 'River Plate' anthem for River. Fans will test your knowledge and respect your effort to participate."
          },
          {
            icon: "🚇",
            title: "Match Day Transport",
            content: "Take official buses to El Superclásico - never drive or walk alone. The city transforms on derby day. Police escort fans, and neighborhoods become tribal territories."
          },
          {
            icon: "💰",
            title: "Ticket Reality",
            content: "El Superclásico tickets are nearly impossible for tourists. Join a football tour company or know a local. Fake tickets are common - only buy from official sources."
          },
          {
            icon: "🗣️",
            title: "Passion Protocol",
            content: "Football isn't just a sport here - it's religion, politics, and identity. Show respect for the passion even if you don't understand it. Never make jokes about the rivalry."
          },
          {
            icon: "🥩",
            title: "Asado Etiquette",
            content: "If invited to an asado before a match, bring wine not beer. Don't rush the meat - Argentines take grilling seriously. Football discussions over meat are sacred bonding time."
          }
        ]
      }
    },
    cta: {
      title: "Ready to Experience the World's Most Passionate Football City?",
      subtitle: "Enter a world where football isn't just a game - it's the very soul of a nation.",
      buttonText: "Plan Your Buenos Aires Football Journey"
    }
  }
};

// Utility function to get city data
function getCityData(cityName) {
  return CITY_DATA[cityName.toLowerCase()] || null;
}

// Export for use in other files if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CITY_DATA;
}