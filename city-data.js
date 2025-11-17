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
            description: "Step into the lobby and you're greeted by Bill Shankly's life-sized bronze statue, his famous quote carved in stone: 'Some people think football is a matter of life and death. I assure you, it's much more serious than that.' Every room is named after a Liverpool legend—sleep in The Paisley Suite or The Dalglish Room surrounded by match-worn shirts and signed photos. The Bastion Bar downstairs fills with Red supporters 3 hours before kickoff, the walls lined with Champions League medals behind glass. On European nights, former players drop by for a pint. The hotel manager, a lifelong Red, can tell you stories about every artifact. Breakfast includes scouse (Liverpool stew) alongside your full English. This isn't just accommodation—it's a pilgrimage.",
            tags: ["LFC Themed", "City Center", "Bar & Restaurant"],
            rating: "4.8",
            distance: "15 min to Anfield",
            icon: "🏨"
          },
          {
            name: "Hotel Anfield",
            type: "Budget-Friendly",
            location: "Anfield",
            description: "This unassuming brick building on Anfield Road has been hosting match-goers since 1976. The wallpaper hasn't changed much since then, and that's part of the charm. Mrs. O'Brien, who runs the place with her son, remembers when Kenny Dalglish would occasionally pop in after training. The rooms are small, the bathrooms shared, but on match day you'll have breakfast with fans from Norway, Australia, and down the street—all sharing the same nervous excitement. The windows rattle when 'You'll Never Walk Alone' echoes from the Kop just 200 meters away. Leave your bags, grab a scarf, and you're at the turnstiles in 90 seconds. Real fans, real stories, real Liverpool. Book months in advance for big matches.",
            tags: ["Walking Distance", "Budget", "Local Atmosphere"],
            rating: "4.3",
            distance: "2 min walk to Anfield",
            icon: "🏨"
          },
          {
            name: "Titanic Hotel Liverpool",
            type: "Historic",
            location: "Stanley Dock",
            description: "Built in 1854 as Liverpool's grand rum warehouse, this converted heritage building oozes Victorian industrial grandeur. Exposed brick walls three feet thick, original cast-iron columns, and views across Stanley Dock where the Titanic was registered before its fateful voyage. The Rum Warehouse bar features vaulted ceilings and over 100 rums from Liverpool's trading past. Players' families stay here for the privacy and elegance—you might spot a recognizable face at breakfast. The rooftop terrace offers sunset views of the Liverpool skyline with the Liver Building's copper birds watching over. It's a 20-minute Uber to Anfield, but the Stanley Dock Tobacco Warehouse (the world's largest brick building) next door makes it worth the journey. Liverpool's maritime history lives in every room.",
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
            description: "March 15, 1892—right here, in this very pub, John Houlding and his business associates founded Liverpool Football Club after a dispute with Everton. The original meeting room upstairs is preserved like a shrine. The pub's Victorian facade hasn't changed; the same stained glass, the same wooden bar where Shankly once drank. On match days, arrive early to claim a spot in the beer garden where the Kop choir practices their chants. The walls display original founding documents, sepia photographs, and a timeline of every trophy. Order a pint of local Cain's ale and feel the weight of 130+ years. After the match, victorious fans pour back in, songs echoing until closing. The landlord, a fourth-generation Red, knows every regular by name. This isn't just a pub—it's hallowed ground.",
            tags: ["Historic Birthplace", "Match Day Central", "Authentic Atmosphere"],
            rating: "4.9",
            distance: "5 min walk to Anfield",
            icon: "🍺"
          },
          {
            name: "The Arkles",
            type: "Traditional",
            location: "Anfield Road",
            description: "Named after the legendary 1960s racehorse, The Arkles sits directly across from Anfield's away end, so close you can see the stadium floodlights from the doorway. Two hours before kickoff, it's already standing room only—fans pressed shoulder to shoulder, scarves hanging from the ceiling like prayer flags. The chants start here: 'Allez Allez Allez,' 'Bobby Firmino,' and the spine-tingling 'Fields of Anfield Road.' Old timers nurse pints of bitter and tell stories about the Miracle of Istanbul; young lads down Jägerbombs and film TikToks. The chips are cheap, the curry sauce legendary, and the toilets a nightmare. But when everyone files out in a river of red heading to the turnstiles, singing as one organism, you understand what 'atmosphere' really means. Get there by noon for 3 PM kickoffs.",
            tags: ["Pre-Match Hub", "Traditional Pub", "Local Crowd"],
            rating: "4.7",
            distance: "3 min walk to Anfield",
            icon: "🍺"
          },
          {
            name: "The Cavern Club",
            type: "Music Legend",
            location: "Mathew Street",
            description: "Down brick steps into the cellar where The Beatles played 292 times between 1961 and 1963, where Brian Epstein first saw them and changed music forever. The arched brick tunnels sweat with humidity and history. Live bands play from noon until midnight, seven days a week—sometimes covers of 'Twist and Shout,' sometimes local indie hopefuls. The walls are covered in signatures from every musician who's performed here: Adele, Oasis, the Arctic Monkeys. Not football-related? Tell that to the Liverpool players who've been spotted here on nights out, or the fans who come here after matches to celebrate with Beatles songs and Guinness. The street outside is pedestrianized cobblestone lined with Beatles statues and buskers. This is Liverpool culture in its purest form—working-class kids from nowhere becoming legends. Football and music, indistinguishable passion.",
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
            description: "The Boot Room—where Shankly, Paisley, Fagan, and Dalglish plotted dynasty over tea and tactics—no longer exists in its original form, but this restaurant inside Anfield Stadium preserves its spirit. Walk past glass cases displaying every European Cup won, photographs of the famous 'This Is Anfield' sign touching ritual, and the names of Kop heroes etched in light. Match day lunch here includes views of the pitch as groundskeepers prepare the turf. The menu features 'Shankly's Steak Pie' and 'Dalglish Burger' with local ingredients. Between courses, study the timeline of Liverpool's evolution from Second Division club to six-time European champions. The acoustics carry the echo of pre-match buildup. Book ahead for European nights—it fills with former players doing corporate hospitality who'll happily share war stories.",
            tags: ["Inside Anfield", "Match Day Dining", "Club History"],
            rating: "4.5",
            distance: "Inside Stadium",
            icon: "🍽️"
          },
          {
            name: "Maggie May's",
            type: "Traditional Scouse",
            location: "Bold Street",
            description: "Since 1986, Maggie May's has served authentic scouse—the lamb and potato stew that defines Liverpool cuisine, born from Irish immigrant cooking and dock workers' poverty meals. The recipe hasn't changed: slow-cooked for six hours until the meat falls apart, served with pickled red cabbage and crusty bread for soaking up the gravy. The cafe is no-frills formica tables and checkered floors, photos of old Liverpool on the walls, and staff who call everyone 'love.' Match days see it packed with three generations of families—grandad teaching his grandson to eat scouse properly (bread first to soak the gravy). At £6.95, it's the best value in Liverpool. The full English breakfast could feed two. Cash only. No reservations. Queue out the door on Saturdays. This is real Liverpool, before gentrification, before tourism—just good food and honest people.",
            tags: ["Traditional Scouse", "Local Institution", "Affordable"],
            rating: "4.6",
            distance: "City Center",
            icon: "🍽️"
          },
          {
            name: "Panoramic 34",
            type: "Fine Dining",
            location: "West Tower",
            description: "On the 34th floor of Liverpool's West Tower, Panoramic offers 360-degree views from the Mersey to the Liver Building to the distant Welsh hills. This is where Liverpool players bring their families after Champions League victories, where Klopp celebrated winning the Premier League title, where you might spot club legends at the next table ordering the £85 tasting menu. Floor-to-ceiling windows frame sunset over the city as waiters in crisp whites serve Pan-Asian fusion cuisine with British influences. The wine list spans 500 bottles. Sommelier recommendations pair perfectly with Wirral lamb or Irish Sea bass. Book the window tables months ahead for post-match celebrations. Smart casual dress code strictly enforced. When Liverpool wins silverware, champagne corks pop and players' kids run between tables while photographers snap victory photos against the glittering cityscape. This is how success tastes.",
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
            content: "\"You'll Never Walk Alone\" isn't just a song—it's a spiritual experience that will give you genuine chills. Learn every word, especially the quiet part at the beginning before the crescendo. \"Allez Allez Allez\" became anthem during the 2018 Champions League run. \"Poor Scouser Tommy\" tells the story of a Liverpool fan's journey from birth to death. \"Fields of Anfield Road\" references the club's greatest moments. The Kop can spot tourists who don't know the words. Watch YouTube videos of away fans teaching the songs on coach rides. When 54,000 people sing in perfect unison, you'll understand why players call it the 12th man."
          },
          {
            icon: "🕐",
            title: "Arrive Early",
            content: "For Champions League nights or big derbies, The Sandon and The Arkles reach capacity by 11 AM for 3 PM kickoffs. No joke. By 1 PM, you're standing room only, pressed against strangers who'll become friends by the final whistle. The atmosphere doesn't just appear—it's built pint by pint, song by song, story by story. Old-timers share tales of the 2005 Istanbul miracle. Recent converts show off their tattoos. Someone always starts a chant, someone always buys a round for strangers. Miss this buildup and you miss half the experience. European nights under the lights? Get there at dawn."
          },
          {
            icon: "🧣",
            title: "Bring a Scarf",
            content: "As \"You'll Never Walk Alone\" starts, the entire Kop raises scarves overhead in perfect synchronization. From above, it looks like a sea of red waves. This isn't spontaneous—it's ritual passed down through generations. Your scarf doesn't need to be expensive; a £10 street vendor scarf carries the same weight as a vintage 1977 European Cup edition. The movement is specific: both arms extended, scarf taut, swaying side to side in rhythm. Don't film it on your phone (locals hate that)—just participate. Feel 50,000 people moving as one. When opposing players later say this moment scared them, you'll understand. The scarf ritual began in the 1960s and remains football's most powerful pre-match tradition."
          },
          {
            icon: "🗣️",
            title: "Local Lingo",
            content: "The Scouse accent is thick, musical, and utterly unique. \"Boss\" (pronounced 'bozz') means excellent: \"That goal was boss.\" \"Sound\" means good/okay: \"Yeah, sound la.\" \"La\" or \"lad\" addresses everyone regardless of age or gender—it's affection, not gender-specific. \"Made up\" means happy: \"I'm made up we won.\" \"Devoed\" means devastated. \"Bevvies\" are drinks. \"Scran\" is food. Call it 'soccer' and you'll be corrected immediately—it's football, always football. Scousers have thick skin and sharp wit; banter is affectionate insult. Learn to give it back with a smile. The accent evolved from Irish, Welsh, and Lancashire mixing in the docks. Embrace it, don't mock it."
          },
          {
            icon: "🚇",
            title: "Transport Tips",
            content: "The 917 bus from Queen Square in city center to Anfield becomes a mobile party on match days. Upper deck fills first with singing supporters draped in scarves and flags. £2.40 gets you the full experience—better than any tour bus. Post-match, Anfield station gets dangerously crowded (5,000+ people funneling through tiny barriers). Smart locals walk 15 minutes northeast to Kirkdale station or south to Lime Street via Everton Valley. The walk passes through residential streets where locals sit on stoops watching the exodus, occasionally applauding good wins. Black cabs charge £15-20 to city center post-match. Uber surge pricing is criminal. Walk, sing, decompress—it's part of the ritual."
          },
          {
            icon: "🏆",
            title: "Respect the History",
            content: "April 15, 1989. Ninety-six Liverpool fans went to a football match and never came home. The Hillsborough memorial outside Anfield lists every name, every age, every unfulfilled life. Visit it. Read the names. Understand that \"Justice for the 96\" wasn't achieved until 2016—27 years of families fighting lies and slander. The Eternal Flame burns perpetually. At the 96th minute of every match, Anfield applauds—join in silence after. Never make Hillsborough jokes; locals will physically remove you. Also acknowledge Heysel (1985, 39 Juventus fans died) where Liverpool fans share responsibility. This history isn't entertainment—it's sacred grief that shaped the club's identity. Understanding this tragedy is what separates tourists from supporters. \"You'll Never Walk Alone\" takes on profound meaning when you know the context."
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
            description: "This gleaming glass tower on the revitalized waterfront is where Barcelona, Real Madrid, and European giants stay when they face Argentine opposition in international friendlies. The concierge, Hernán, has connections that can secure El Superclásico tickets—for a price that makes your mortgage payment look reasonable. Floor-to-ceiling windows overlook the Río de la Plata where Eva Perón's ashes were once scattered. The rooftop pool becomes party central when River wins championships, champagne flowing as the sunset turns the city gold and blue. Modern luxury meets old Buenos Aires passion. The restaurant serves the best bife de chorizo in Puerto Madero. On derby days, you'll see rival fans in separate elevators, glaring through closing doors—the war starts here.",
            tags: ["Player Hotel", "River Views", "Ticket Concierge"],
            rating: "4.8",
            distance: "15 min to La Boca",
            icon: "🏨"
          },
          {
            name: "La Boca Hostel",
            type: "Budget Football",
            location: "La Boca",
            description: "Walk through the blue and yellow door into a shrine to Boca Juniors. Every wall covered in scarves, flags, signed jerseys dating back to the 1960s. The owner, Diego (yes, named after that Diego), lost his voice permanently from screaming at La Bombonera for 40 years. He'll teach you the chants, tell you which streets to avoid after River wins, and cook you choripán at 2 AM when you stumble back from victory celebrations. The beds are basic, the showers temperamental, but you'll share mate tea with Brazilian, Japanese, and German fans all united in blue and gold. On Superclásico morning, Diego leads everyone the five blocks to the stadium, flags flying, drums pounding. This isn't accommodation—it's baptism by football fire. Book months ahead.",
            tags: ["La Boca Location", "Football Themed", "International Fans"],
            rating: "4.4",
            distance: "5 min walk to La Bombonera",
            icon: "🏨"
          },
          {
            name: "Casa Sur Palermo",
            type: "Boutique",
            location: "Palermo",
            description: "This converted 1920s mansion in Palermo Soho mixes European elegance with Argentine soul. The 11 suites feature original moldings, modern art, and balconies overlooking jacaranda-lined streets. Football journalists covering El Superclásico fill the rooftop bar after matches, debating controversial calls over Malbec and fernet. The breakfast spread includes medialunas (Argentine croissants), dulce de leche, and strong coffee. Staff can arrange private asado (BBQ) experiences and tickets through their media contacts. Young Argentine players from smaller clubs sometimes celebrate here after transfer signings, cork-popping visible from the street. The neighborhood buzzes with polo-shirted porteños, vintage shops, and underground tango halls. It's Buenos Aires without the tourist traps, football without the violence.",
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
            description: "Since 1954, this tin-roofed workers' canteen has fed dock laborers, tango dancers, and football gods. Maradona's corner table remains empty by unspoken agreement—a shrine with his photo, flowers, and a lit candle. The walls are archaeological layers of Boca history: faded newspaper clippings of 1977's Copa Libertadores victory, Riquelme's jersey, autographed photos spanning seven decades. The parrillero, Carlitos, has worked the grill for 40 years. His bife de chorizo is two inches thick, charred outside, bleeding inside, served with chimichurri so garlicky you taste it for days. On Superclásico days, arrive at 10 AM or don't bother—the entire barrio packs in, singing war chants, drinking Quilmes, preparing for battle. When Boca scores at La Bombonera two blocks away, the roar reaches here before the TV broadcast. This isn't tourism. This is holy ground.",
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
  },
  
  dortmund: {
    meta: {
      title: "Dortmund Fan Guide - Borussia Dortmund, Yellow Wall & BVB Culture | FANTOWNS",
      description: "Ultimate Dortmund BVB fan travel guide. Experience the Yellow Wall at Signal Iduna Park, best hotels near the stadium, legendary beer gardens, and insider tips for Borussia Dortmund culture.",
      keywords: "Borussia Dortmund travel, BVB fan guide, Yellow Wall, Signal Iduna Park, Dortmund beer gardens, German football culture, Ruhr area travel"
    },
    theme: {
      primary: "#fde047",
      secondary: "#000000",
      tagBg: "#fef3c7",
      tagColor: "#92400e",
      heroBg: "linear-gradient(rgba(253, 224, 71, 0.9), rgba(0, 0, 0, 0.8)), url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 600\"><rect fill=\"%23fde047\" width=\"1200\" height=\"600\"/><path fill=\"%23000000\" opacity=\"0.3\" d=\"M0,300 Q300,100 600,300 T1200,300 L1200,600 L0,600 Z\"/></svg>')"
    },
    hero: {
      title: "Dortmund 🇩🇪",
      subtitle: "Where the Yellow Wall Creates the Most Intimidating Atmosphere in Football",
      stats: [
        { number: "25,000", label: "Yellow Wall Fans" },
        { number: "81,365", label: "Signal Iduna Park" },
        { number: "1909", label: "Founded" }
      ]
    },
    sections: {
      hotels: {
        description: "Stay where the BVB faithful gather, from modern hotels near Signal Iduna Park to traditional guesthouses in the heart of the Ruhr area.",
        items: [
          {
            name: "GHOTEL hotel & living Dortmund",
            type: "Modern Business",
            location: "City Center",
            description: "Sleek modern hotel popular with visiting teams and officials. Walking distance to the city center and easy transport to Signal Iduna Park. Many BVB players' families stay here.",
            tags: ["Modern Design", "Player Families", "City Center"],
            rating: "4.6",
            distance: "15 min to Signal Iduna Park",
            icon: "🏨"
          },
          {
            name: "Hotel An der Konzerthalle",
            type: "Fan Favorite",
            location: "Near Stadium",
            description: "Family-run hotel that's been hosting BVB fans for decades. The breakfast room turns into a pre-match gathering spot with yellow and black decorations everywhere.",
            tags: ["Fan Gathering", "Family Run", "BVB Decorated"],
            rating: "4.4",
            distance: "10 min to Signal Iduna Park",
            icon: "🏨"
          },
          {
            name: "Pension Dortmund",
            type: "Budget Authentic",
            location: "Westfalenhallen",
            description: "No-frills pension where hardcore ultras and traveling fans stay. Basic but clean, and the owners are lifelong BVB supporters who share match day stories.",
            tags: ["Ultra Favorite", "Budget Friendly", "Local Stories"],
            rating: "4.2",
            distance: "5 min walk to stadium",
            icon: "🏨"
          }
        ]
      },
      pubs: {
        description: "Experience the legendary German beer culture in these iconic establishments where BVB fans have sung their hearts out for generations.",
        items: [
          {
            name: "Wenkers Köln",
            type: "Historic Brewery",
            location: "Westfalendamm",
            description: "Traditional brewery that's been the unofficial BVB headquarters since the 1960s. The entire pub erupts in Yellow Wall chants before every home match. Cash only!",
            tags: ["Historic Brewery", "BVB Headquarters", "Traditional Atmosphere"],
            rating: "4.9",
            distance: "2 min walk to stadium",
            icon: "🍺"
          },
          {
            name: "Bierhaus Stade",
            type: "Beer Garden",
            location: "Strobelallee",
            description: "Massive beer garden that opens 4 hours before kickoff. Thousands of fans gather here for traditional German beer and bratwurst while building match atmosphere.",
            tags: ["Beer Garden", "Pre-Match Central", "Traditional Food"],
            rating: "4.7",
            distance: "Walking distance to stadium",
            icon: "🍺"
          },
          {
            name: "Tremonia",
            type: "Ultra Bar",
            location: "Innenstadt",
            description: "Where the hardcore ultras plan their choreography and practice their chants. Walls covered in scarves and banners. Visitors welcome but respect the passion.",
            tags: ["Ultra Culture", "Choreography Planning", "Hardcore Fans"],
            rating: "4.5",
            distance: "City Center",
            icon: "🍺"
          }
        ]
      },
      restaurants: {
        description: "From traditional German fare to modern cuisine, fuel your BVB passion with hearty Ruhr area food and international options.",
        items: [
          {
            name: "Zum Strammen Max",
            type: "Traditional German",
            location: "Hombruch",
            description: "Traditional German restaurant serving massive portions of schnitzel, bratwurst, and local specialties. BVB legends like Nobby Dickel used to eat here regularly.",
            tags: ["Traditional German", "Huge Portions", "BVB Legends"],
            rating: "4.8",
            distance: "15 min to stadium",
            icon: "🍽️"
          },
          {
            name: "Pfefferkorn",
            type: "Fine Dining",
            location: "Innenstadt",
            description: "Upscale restaurant where BVB executives and visiting dignitaries dine. Modern German cuisine with a view of the city. Perfect for celebration dinners after victories.",
            tags: ["Fine Dining", "Executive Dining", "Modern German"],
            rating: "4.7",
            distance: "City Center",
            icon: "🍽️"
          },
          {
            name: "Curry 61",
            type: "Local Institution",
            location: "Near Stadium",
            description: "Legendary currywurst stand that's been feeding hungry BVB fans since 1961. The secret curry sauce recipe is guarded like BVB's tactical playbook.",
            tags: ["Currywurst Legend", "Since 1961", "Secret Recipe"],
            rating: "4.6",
            distance: "5 min to Signal Iduna Park",
            icon: "🍽️"
          }
        ]
      },
      attractions: {
        description: "Experience BVB history and Ruhr area culture through these essential destinations that capture the soul of Dortmund football.",
        items: [
          {
            name: "Signal Iduna Park Tour",
            type: "Stadium Experience",
            location: "Signal Iduna Park",
            description: "Stand on the Yellow Wall, visit the players' tunnel, and experience the most intimidating stadium in world football. The echo of 25,000 fans will give you chills.",
            tags: ["Yellow Wall Experience", "Players' Tunnel", "Stadium Tour"],
            rating: "4.9",
            distance: "At Signal Iduna Park",
            icon: "⚽"
          },
          {
            name: "BVB Museum",
            type: "Interactive Museum",
            location: "Signal Iduna Park",
            description: "State-of-the-art museum showcasing BVB's incredible history, including the 1997 Champions League triumph and the club's role in German football culture.",
            tags: ["Interactive Exhibits", "Champions League Trophy", "Club History"],
            rating: "4.8",
            distance: "Inside Signal Iduna Park",
            icon: "🏆"
          },
          {
            name: "German Football Museum",
            type: "National Museum",
            location: "Dortmund City",
            description: "Germany's national football museum located in Dortmund. Features World Cup trophies, interactive exhibits, and the story of German football dominance.",
            tags: ["National Museum", "World Cup History", "Interactive Technology"],
            rating: "4.7",
            distance: "City Center",
            icon: "🏆"
          }
        ]
      },
      tips: {
        description: "Master these local customs and you'll be singing along with the Yellow Wall like a true BVB supporter.",
        items: [
          {
            icon: "🟡",
            title: "Yellow Wall Protocol",
            content: "The Südtribüne (Yellow Wall) is sacred. Stand for 90 minutes, learn the chants, and never sit during matches. Bring earplugs - it's genuinely the loudest stadium experience in football."
          },
          {
            icon: "🍺",
            title: "Beer Garden Etiquette",
            content: "German beer gardens have rules: order at the counter, share tables with strangers, bring exact change. 'Prost!' is the universal greeting. One liter 'Maß' is standard."
          },
          {
            icon: "🎵",
            title: "Learn the Chants",
            content: "Master 'Heja BVB,' 'Oh wie ist das schön,' and 'You'll Never Walk Alone' (yes, Dortmund sings it too). The ultras lead - follow their rhythm and energy."
          },
          {
            icon: "🚇",
            title: "Match Day Transport",
            content: "Take the U-Bahn Line U45/U49 to 'Westfalenhallen' station. It's packed with singing fans and part of the experience. Walking from city center takes 45 minutes."
          },
          {
            icon: "🧣",
            title: "Scarf Traditions",
            content: "Always hold your BVB scarf above your head during team entrances and goals. Trading scarves with visiting fans is respected tradition - especially in European matches."
          },
          {
            icon: "⚫",
            title: "Rivalry Respect",
            content: "The Schalke rivalry (Revierderby) is intense but respectful. Never wear blue in Dortmund on derby day. Bayern Munich is also a major rival - expect passionate debates."
          }
        ]
      }
    },
    cta: {
      title: "Ready to Experience the Yellow Wall Like a True BVB Fan?",
      subtitle: "Join the most intimidating and passionate stadium atmosphere in world football.",
      buttonText: "Plan Your Dortmund Pilgrimage"
    }
  },

  istanbul: {
    meta: {
      title: "Istanbul Football Fan Guide - Galatasaray, Fenerbahçe & Beşiktaş | FANTOWNS",
      description: "Ultimate Istanbul football fan travel guide. Experience the most passionate derbies, stay near iconic stadiums, discover Turkish culture, and navigate the most intense football rivalries in Europe.",
      keywords: "Istanbul football travel, Galatasaray, Fenerbahçe, Beşiktaş, Turkish football culture, Istanbul derbies, Bosphorus, Turkish cuisine, football tourism Turkey"
    },
    theme: {
      primary: "#e53e3e",
      secondary: "#ffd700",
      tagBg: "#fee2e2",
      tagColor: "#dc2626",
      heroBg: "linear-gradient(rgba(229, 62, 62, 0.8), rgba(255, 215, 0, 0.6)), url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 600\"><rect fill=\"%23e53e3e\" width=\"1200\" height=\"600\"/><path fill=\"%23ffd700\" opacity=\"0.4\" d=\"M0,300 Q300,100 600,300 T1200,300 L1200,600 L0,600 Z\"/></svg>')"
    },
    hero: {
      title: "Istanbul 🇹🇷",
      subtitle: "Where Three Giants Battle and the Entire City Stops for Football",
      stats: [
        { number: "3", label: "Legendary Clubs" },
        { number: "15M", label: "Passionate Fans" },
        { number: "2,500", label: "Years of History" }
      ]
    },
    sections: {
      hotels: {
        description: "Stay where football passion meets Ottoman grandeur, from luxury Bosphorus hotels to neighborhood pensions near the legendary stadiums.",
        items: [
          {
            name: "Four Seasons Hotel Sultanahmet",
            type: "Luxury Historic",
            location: "Sultanahmet",
            description: "Former Ottoman prison turned luxury hotel where football executives and international players stay. Walking distance to Hagia Sophia and easy access to all three stadiums.",
            tags: ["Historic Luxury", "Ottoman Architecture", "Executive Choice"],
            rating: "4.9",
            distance: "Central to all stadiums",
            icon: "🏨"
          },
          {
            name: "Hotel Galata",
            type: "Boutique Football",
            location: "Galata",
            description: "Boutique hotel in the heart of Galatasaray territory. The rooftop terrace offers stunning Bosphorus views and becomes a watch party venue during derbies.",
            tags: ["Galatasaray Area", "Bosphorus Views", "Derby Central"],
            rating: "4.6",
            distance: "10 min to Türk Telekom Stadium",
            icon: "🏨"
          },
          {
            name: "Backpacker's Den",
            type: "Fan Hostel",
            location: "Taksim",
            description: "International hostel where traveling football fans from around the world gather. Shared rooms buzz with derby discussions and stadium stories from every continent.",
            tags: ["International Fans", "Budget Friendly", "Football Stories"],
            rating: "4.3",
            distance: "Central to all clubs",
            icon: "🏨"
          }
        ]
      },
      pubs: {
        description: "Experience the most intense football passion in Europe in these legendary establishments where club loyalties run deeper than blood.",
        items: [
          {
            name: "Galata Meyhanesi",
            type: "Traditional Meyhane",
            location: "Galata",
            description: "Historic tavern where Galatasaray fans have gathered since 1923. On derby nights, the entire street closes as thousands sing club anthems. Raki flows like water.",
            tags: ["Galatasaray Historic", "Derby Central", "Traditional Raki"],
            rating: "4.8",
            distance: "Galatasaray heartland",
            icon: "🍺"
          },
          {
            name: "Çiçek Pasajı",
            type: "Historic Passage",
            location: "Beyoğlu",
            description: "Flower Passage filled with tiny bars where all three clubs' fans somehow coexist. Neutral territory where football debates rage over Turkish tea and endless mezze.",
            tags: ["Neutral Territory", "Historic Passage", "All Clubs Welcome"],
            rating: "4.5",
            distance: "Central Istanbul",
            icon: "🍺"
          },
          {
            name: "Beşiktaş Çarşısı Taverns",
            type: "Black Eagle Zone",
            location: "Beşiktaş",
            description: "Collection of taverns in Beşiktaş market where the Black Eagles gather. The atmosphere is electric, the loyalty absolute, and outsiders are watched carefully.",
            tags: ["Beşiktaş Territory", "Market Taverns", "Black Eagle Pride"],
            rating: "4.7",
            distance: "Near Vodafone Park",
            icon: "🍺"
          }
        ]
      },
      restaurants: {
        description: "From Ottoman cuisine to modern Turkish fare, fuel your football passion with incredible food that rivals the stadium atmosphere.",
        items: [
          {
            name: "Pandeli",
            type: "Ottoman Institution",
            location: "Eminönü",
            description: "Historic Ottoman restaurant since 1901 where football legends and politicians dine. The lamb dishes are legendary, and the walls hold a century of football stories.",
            tags: ["Since 1901", "Ottoman Cuisine", "Football Legends"],
            rating: "4.8",
            distance: "Historic Peninsula",
            icon: "🍽️"
          },
          {
            name: "Balık Ekmek Boats",
            type: "Street Food Icon",
            location: "Galata Bridge",
            description: "Fish sandwich boats under Galata Bridge where fans from all clubs eat side by side. The closest thing to neutral ground in Istanbul - everyone loves the fish.",
            tags: ["Street Food", "All Clubs", "Bosphorus Views"],
            rating: "4.6",
            distance: "Central location",
            icon: "🍽️"
          },
          {
            name: "Sunset Grill & Bar",
            type: "Modern Turkish",
            location: "Ulus",
            description: "Upscale restaurant with Bosphorus views where players celebrate victories. Modern Turkish cuisine with a view of the city that football built.",
            tags: ["Player Celebrations", "Bosphorus Views", "Modern Turkish"],
            rating: "4.7",
            distance: "Panoramic location",
            icon: "🍽️"
          }
        ]
      },
      attractions: {
        description: "Experience Turkish football culture and Ottoman heritage through these essential destinations in the world's most passionate football city.",
        items: [
          {
            name: "Türk Telekom Stadium Tour",
            type: "Modern Fortress",
            location: "Seyrantepe",
            description: "Tour Galatasaray's intimidating new stadium known as 'Hell.' The museum showcases their European Cup triumph and the most passionate ultras in Turkey.",
            tags: ["Galatasaray Hell", "European Cup", "Ultra Culture"],
            rating: "4.8",
            distance: "Galatasaray stadium",
            icon: "⚽"
          },
          {
            name: "Vodafone Park Experience",
            type: "Waterfront Stadium",
            location: "Beşiktaş",
            description: "The only stadium built on the Bosphorus waterfront. Tour reveals how Beşiktaş fans create the most intense 90 minutes in football. The 'Come to Beşiktaş' legend lives here.",
            tags: ["Bosphorus Stadium", "Intense Atmosphere", "Come to Beşiktaş"],
            rating: "4.7",
            distance: "Beşiktaş waterfront",
            icon: "🏟️"
          },
          {
            name: "Şükrü Saracoğlu Stadium",
            type: "Fenerbahçe Home",
            location: "Kadıköy",
            description: "Tour the home of Turkey's most successful club. The museum displays their incredible trophy collection and the story of football's most passionate Asian-side fans.",
            tags: ["Most Successful", "Trophy Collection", "Asian Side"],
            rating: "4.6",
            distance: "Kadıköy, Asian side",
            icon: "🏆"
          }
        ]
      },
      tips: {
        description: "Navigate the most intense football rivalries in Europe without starting an international incident.",
        items: [
          {
            icon: "🚫",
            title: "Color Code Survival",
            content: "NEVER wear rival colors in enemy territory. Red/yellow in Galatasaray areas, black/white in Beşiktaş, blue/yellow in Fenerbahçe zones. One mistake can ruin your entire trip."
          },
          {
            icon: "🌉",
            title: "Derby Day Protocol",
            content: "During Istanbul derbies, the city is divided. Choose your side of the Bosphorus carefully. Police escort fans, and certain neighborhoods become no-go zones for rivals."
          },
          {
            icon: "🍃",
            title: "Turkish Tea Culture",
            content: "Accept tea offers from locals - it's how football conversations start. 'Çay' (chai) is served in small glasses. Refusing is considered rude. Perfect for pre-match bonding."
          },
          {
            icon: "🕌",
            title: "Respect the Call",
            content: "When the call to prayer sounds, even football discussions pause. Show respect by lowering your voice. Many matches are scheduled around prayer times - it's part of Turkish football culture."
          },
          {
            icon: "🚢",
            title: "Ferry Strategy",
            content: "Use ferries to cross the Bosphorus - they're cheaper than bridges and offer incredible city views. During derbies, ferries become floating fan zones with chants echoing across the water."
          },
          {
            icon: "🔥",
            title: "Ultra Respect",
            content: "Turkish ultras are among the world's most passionate. Respect their choreography, learn their chants, never photograph them without permission. They welcome respectful visitors but demand loyalty."
          }
        ]
      }
    },
    cta: {
      title: "Ready to Experience the Most Passionate Football Rivalries on Earth?",
      subtitle: "Enter a city where three giants battle and every match feels like a war for the soul of Istanbul.",
      buttonText: "Plan Your Istanbul Football Journey"
    }
  },

  nashville: {
    meta: {
      title: "Nashville Music Fan Guide - Country Music Capital, Grand Ole Opry | FANTOWNS",
      description: "Ultimate Nashville music fan travel guide. Experience the Grand Ole Opry, Broadway honky-tonks, best music hotels, legendary venues, and insider tips for Music City's incredible fan culture.",
      keywords: "Nashville music travel, Grand Ole Opry, Broadway Nashville, country music, honky-tonks, Music Row, Nashville hotels, country music fans, Music City"
    },
    theme: {
      primary: "#8b5a3c",
      secondary: "#f4a261",
      tagBg: "#fef3c7",
      tagColor: "#92400e",
      heroBg: "linear-gradient(rgba(139, 90, 60, 0.8), rgba(244, 162, 97, 0.7)), url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 600\"><rect fill=\"%238b5a3c\" width=\"1200\" height=\"600\"/><path fill=\"%23f4a261\" opacity=\"0.3\" d=\"M0,300 Q300,100 600,300 T1200,300 L1200,600 L0,600 Z\"/></svg>')"
    },
    hero: {
      title: "Nashville 🇺🇸",
      subtitle: "Music City Where Every Street Corner Has a Story and Every Bar Has a Star",
      stats: [
        { number: "130+", label: "Live Music Venues" },
        { number: "4,321", label: "Grand Ole Opry Seats" },
        { number: "24/7", label: "Music Never Stops" }
      ]
    },
    sections: {
      hotels: {
        description: "Stay where music legends sleep, from iconic Music Row hotels to honky-tonk adjacent spots where the music never stops.",
        items: [
          {
            name: "The Hermitage Hotel",
            type: "Historic Luxury",
            location: "Downtown",
            description: "Nashville's grand dame hotel where country music royalty has stayed since 1910. The lobby bar hosts impromptu sessions with Grammy winners, and the walls hold a century of music history.",
            tags: ["Historic Luxury", "Music Royalty", "Impromptu Sessions"],
            rating: "4.9",
            distance: "5 min walk to Broadway",
            icon: "🏨"
          },
          {
            name: "Thompson Nashville",
            type: "Modern Music",
            location: "The Gulch",
            description: "Trendy hotel where younger artists and industry executives stay. The rooftop bar, L.A. Jackson, offers skyline views and attracts musicians looking to network and jam.",
            tags: ["Modern Design", "Industry Hub", "Rooftop Sessions"],
            rating: "4.7",
            distance: "10 min to Music Row",
            icon: "🏨"
          },
          {
            name: "Nashville Downtown Hostel",
            type: "Music Fan Central",
            location: "Broadway District",
            description: "Budget-friendly hostel where aspiring musicians and music fans from around the world gather. Common room has guitars, and impromptu jam sessions happen nightly.",
            tags: ["Budget Friendly", "Aspiring Musicians", "Jam Sessions"],
            rating: "4.4",
            distance: "Heart of Broadway",
            icon: "🏨"
          }
        ]
      },
      pubs: {
        description: "Experience authentic honky-tonk culture in these legendary venues where tomorrow's stars play today and yesterday's legends still drop by.",
        items: [
          {
            name: "Tootsies Orchid Lounge",
            type: "Honky-Tonk Legend",
            location: "Broadway",
            description: "The most famous honky-tonk in the world, where legends like Hank Williams Jr. got their start. Three floors of live music, and you never know which superstar might walk in.",
            tags: ["Most Famous", "Superstar Visits", "Three Floors"],
            rating: "4.8",
            distance: "Heart of Broadway",
            icon: "🍺"
          },
          {
            name: "The Stage on Broadway",
            type: "All-Day Music",
            location: "Broadway",
            description: "Live music from 10 AM to 3 AM every day. Three levels of different music styles, from traditional country to rock. Many famous musicians played here before making it big.",
            tags: ["10 AM - 3 AM", "Three Levels", "Future Stars"],
            rating: "4.6",
            distance: "Lower Broadway",
            icon: "🍺"
          },
          {
            name: "Bluebird Cafe",
            type: "Songwriter's Circle",
            location: "Green Hills",
            description: "Intimate venue famous for songwriter rounds where hit writers perform their compositions. Taylor Swift was discovered here. Reservations essential - this is where careers are made.",
            tags: ["Songwriter Rounds", "Career Launching", "Intimate Setting"],
            rating: "4.9",
            distance: "15 min from downtown",
            icon: "🍺"
          }
        ]
      },
      restaurants: {
        description: "From hot chicken to meat-and-threes, fuel your music city adventure with Nashville's legendary Southern comfort food.",
        items: [
          {
            name: "Hattie B's Hot Chicken",
            type: "Nashville Institution",
            location: "Multiple Locations",
            description: "Home of Nashville hot chicken, the city's signature dish. Musicians fuel up here before shows, and the walls are covered with photos of artists who've conquered the heat.",
            tags: ["Nashville Hot Chicken", "Musician Fuel", "Spice Challenge"],
            rating: "4.7",
            distance: "Multiple locations",
            icon: "🍽️"
          },
          {
            name: "Arnold's Country Kitchen",
            type: "Meat-and-Three",
            location: "Downtown",
            description: "Authentic meat-and-three restaurant where locals and touring musicians eat side by side. Cafeteria-style Southern comfort food that's been feeding Nashville since 1982.",
            tags: ["Meat-and-Three", "Local Institution", "Southern Comfort"],
            rating: "4.8",
            distance: "Downtown",
            icon: "🍽️"
          },
          {
            name: "The Catbird Seat",
            type: "Fine Dining",
            location: "Downtown",
            description: "Upscale restaurant where music industry executives celebrate big deals. Interactive dining experience with a view of the kitchen, popular with artists after award shows.",
            tags: ["Industry Dining", "Interactive Experience", "Award Celebrations"],
            rating: "4.9",
            distance: "Downtown",
            icon: "🍽️"
          }
        ]
      },
      attractions: {
        description: "Experience the heart and soul of American music through these essential Nashville destinations where legends are born.",
        items: [
          {
            name: "Grand Ole Opry",
            type: "Country Music Mecca",
            location: "Opryland",
            description: "The most famous stage in country music. Standing in the sacred circle where legends performed is a pilgrimage every music fan must make. Book backstage tours for the full experience.",
            tags: ["Sacred Circle", "Country Music Mecca", "Backstage Tours"],
            rating: "5.0",
            distance: "Opryland",
            icon: "🎵"
          },
          {
            name: "Country Music Hall of Fame",
            type: "Music Museum",
            location: "Downtown",
            description: "The Smithsonian of country music with artifacts from every era. Interactive exhibits let you experience the evolution of American music and its biggest stars.",
            tags: ["Music Smithsonian", "Interactive Exhibits", "Music Evolution"],
            rating: "4.8",
            distance: "Downtown",
            icon: "🏆"
          },
          {
            name: "Ryman Auditorium",
            type: "Mother Church",
            location: "Downtown",
            description: "The 'Mother Church of Country Music' where the Grand Ole Opry originated. The acoustics are legendary, and every seat has witnessed music history being made.",
            tags: ["Mother Church", "Legendary Acoustics", "Music History"],
            rating: "4.9",
            distance: "Downtown",
            icon: "⛪"
          }
        ]
      },
      tips: {
        description: "Navigate Music City like a local and experience authentic Nashville music culture beyond the tourist traps.",
        items: [
          {
            icon: "🎸",
            title: "Tip the Musicians",
            content: "Always tip street performers and honky-tonk musicians - many are pursuing their dreams. A few dollars can mean the difference between eating and not eating for aspiring artists."
          },
          {
            icon: "🕐",
            title: "Show Timing Strategy",
            content: "Broadway bars have live music all day, but prime time is 8-11 PM. Arrive early for good spots at famous venues. Many shows are first-come, first-served with no cover charge."
          },
          {
            icon: "👢",
            title: "Dress the Part",
            content: "While you don't need cowboy boots, Nashville appreciates effort. Business casual works everywhere, but boots and hats are welcomed. Avoid wearing other cities' sports teams."
          },
          {
            icon: "🎤",
            title: "Request Etiquette",
            content: "Don't request 'Freebird' or non-country songs at traditional venues. Musicians appreciate requests from their genre. Learn some classic country song titles to fit in."
          },
          {
            icon: "🚗",
            title: "Transportation Tips",
            content: "Downtown is walkable, but you'll need rides to the Opry, Music Row, and neighborhoods like Green Hills. Uber/Lyft drivers often have great music stories to share."
          },
          {
            icon: "📱",
            title: "Social Media Smart",
            content: "Tag locations and use #MusicCity hashtags - artists and venues often repost fan content. You might catch the attention of musicians looking to connect with fans."
          }
        ]
      }
    },
    cta: {
      title: "Ready to Experience Music City Like a True Country Music Fan?",
      subtitle: "Join the most authentic music culture in America where every night brings new discoveries.",
      buttonText: "Plan Your Nashville Music Journey"
    }
  },

  barcelona: {
    meta: {
      title: "Barcelona Fan Guide - FC Barcelona, Camp Nou & Catalan Culture | FANTOWNS",
      description: "Ultimate Barcelona FC fan travel guide. Experience Camp Nou, Las Ramblas, best tapas bars, Catalan culture, and insider tips for the most beautiful football in the world.",
      keywords: "FC Barcelona travel, Camp Nou, Barcelona fan guide, Catalan culture, tapas bars, La Liga, Barcelona hotels, Spanish football, Messi, Barcelona attractions"
    },
    theme: {
      primary: "#004d98",
      secondary: "#a50044",
      tagBg: "#dbeafe",
      tagColor: "#1e40af",
      heroBg: "linear-gradient(rgba(0, 77, 152, 0.8), rgba(165, 0, 68, 0.6)), url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 600\"><rect fill=\"%23004d98\" width=\"1200\" height=\"600\"/><path fill=\"%23a50044\" opacity=\"0.3\" d=\"M0,300 Q300,100 600,300 T1200,300 L1200,600 L0,600 Z\"/></svg>')"
    },
    hero: {
      title: "Barcelona 🇪🇸",
      subtitle: "Més que un club - Where Beautiful Football Meets Catalan Pride",
      stats: [
        { number: "5x", label: "Champions League" },
        { number: "99,354", label: "Camp Nou Capacity" },
        { number: "1899", label: "Founded" }
      ]
    },
    sections: {
      hotels: {
        description: "Stay where culés gather, from luxury hotels near Camp Nou to boutique stays in the Gothic Quarter where football and culture collide.",
        items: [
          {
            name: "Majestic Hotel & Spa",
            type: "Luxury Classic",
            location: "Passeig de Gràcia",
            description: "Historic luxury hotel where visiting teams and football dignitaries stay. Walking distance to Casa Batlló, and the concierge can arrange Camp Nou VIP experiences.",
            tags: ["Luxury Historic", "Team Hotel", "VIP Access"],
            rating: "4.8",
            distance: "20 min to Camp Nou",
            icon: "🏨"
          },
          {
            name: "Hotel Barcelona Center",
            type: "Fan Favorite",
            location: "Eixample",
            description: "Modern hotel in the heart of Barcelona where international Barça fans gather. The lobby bar becomes a pre-match meeting point with jerseys from around the world.",
            tags: ["Fan Central", "International Supporters", "Pre-Match Hub"],
            rating: "4.5",
            distance: "15 min to Camp Nou",
            icon: "🏨"
          },
          {
            name: "Barcelona Urbany Hostel",
            type: "Youth Football",
            location: "Gothic Quarter",
            description: "Hip hostel where young football fans from around the world stay. Rooftop terrace hosts viewing parties, and the common room has foosball tables and football debates.",
            tags: ["Youth Central", "Viewing Parties", "Gothic Quarter"],
            rating: "4.4",
            distance: "25 min to Camp Nou",
            icon: "🏨"
          }
        ]
      },
      pubs: {
        description: "Experience Catalan football culture in these legendary bars where beautiful football philosophy meets incredible tapas and cava.",
        items: [
          {
            name: "Café Zurich",
            type: "Historic Meeting Point",
            location: "Plaça Catalunya",
            description: "Historic café where Barça fans have met before matches since 1920. The outdoor terrace fills with blue and red scarves on match days, creating a sea of Catalan pride.",
            tags: ["Since 1920", "Fan Meeting Point", "Historic Terrace"],
            rating: "4.7",
            distance: "Central Barcelona",
            icon: "🍺"
          },
          {
            name: "Bar Tomás",
            type: "Neighborhood Institution",
            location: "Sarrià",
            description: "Famous for the best patatas bravas in Barcelona and a local Barça stronghold. Players' families eat here, and the walls are covered with signed photos from club legends.",
            tags: ["Best Patatas Bravas", "Player Families", "Club Legends"],
            rating: "4.8",
            distance: "5 min to Camp Nou",
            icon: "🍺"
          },
          {
            name: "Xampanyet",
            type: "Tapas Temple",
            location: "Born District",
            description: "Tiny tapas bar serving cava and anchovies since 1929. Standing room only, locals and tourists squeeze together to debate Barça tactics over glasses of sparkling wine.",
            tags: ["Since 1929", "Cava & Anchovies", "Tactics Debates"],
            rating: "4.6",
            distance: "Gothic Quarter",
            icon: "🍺"
          }
        ]
      },
      restaurants: {
        description: "From traditional Catalan cuisine to innovative tapas, fuel your Barça passion with Barcelona's incredible culinary scene.",
        items: [
          {
            name: "Can Culleretes",
            type: "Historic Catalan",
            location: "Gothic Quarter",
            description: "Barcelona's oldest restaurant (1786) where Barça legends have dined for generations. Traditional Catalan cuisine in a setting that's witnessed the club's entire history.",
            tags: ["Oldest Restaurant", "Barça Legends", "Traditional Catalan"],
            rating: "4.7",
            distance: "Gothic Quarter",
            icon: "🍽️"
          },
          {
            name: "Disfrutar",
            type: "Michelin Innovation",
            location: "Eixample",
            description: "Michelin-starred restaurant where Barça players celebrate big wins. Creative Mediterranean cuisine that mirrors the club's innovative style of play.",
            tags: ["Michelin Star", "Player Celebrations", "Creative Cuisine"],
            rating: "4.9",
            distance: "Central Barcelona",
            icon: "🍽️"
          },
          {
            name: "La Boquería Market",
            type: "Market Experience",
            location: "Las Ramblas",
            description: "Historic market where locals and fans grab jamón ibérico and fresh juice before matches. The energy mirrors Camp Nou's atmosphere with passionate vendors and endless variety.",
            tags: ["Historic Market", "Pre-Match Fuel", "Local Energy"],
            rating: "4.5",
            distance: "Las Ramblas",
            icon: "🍽️"
          }
        ]
      },
      attractions: {
        description: "Experience Barcelona's football heritage and Catalan culture through these essential destinations in the beautiful city.",
        items: [
          {
            name: "Camp Nou Experience",
            type: "Football Cathedral",
            location: "Les Corts",
            description: "Tour the largest stadium in Europe, walk through the tunnel where Messi walked, and visit the museum showcasing the club's incredible trophy collection and history.",
            tags: ["Largest Stadium", "Messi's Tunnel", "Trophy Collection"],
            rating: "4.9",
            distance: "Camp Nou",
            icon: "⚽"
          },
          {
            name: "Park Güell",
            type: "Gaudí Masterpiece",
            location: "Gràcia",
            description: "Gaudí's colorful park offering stunning city views. Many Barça fans visit here to see the city their club represents, and the mosaic benches often feature impromptu football discussions.",
            tags: ["Gaudí Architecture", "City Views", "Football Discussions"],
            rating: "4.6",
            distance: "Northern Barcelona",
            icon: "🎨"
          },
          {
            name: "Sagrada Família",
            type: "Architectural Wonder",
            location: "Eixample",
            description: "Gaudí's unfinished masterpiece and symbol of Barcelona. Like the club's pursuit of perfection, this cathedral represents the eternal quest for beauty and excellence.",
            tags: ["Gaudí Masterpiece", "Symbol of Barcelona", "Eternal Quest"],
            rating: "4.8",
            distance: "Central Barcelona",
            icon: "⛪"
          }
        ]
      },
      tips: {
        description: "Master Catalan culture and Barça traditions to experience Barcelona like a true culé (Barça fan).",
        items: [
          {
            icon: "🔵",
            title: "Learn 'Més que un club'",
            content: "'More than a club' isn't just a slogan - it represents Catalan identity and resistance. Understanding this history helps you appreciate why Barça means everything to Catalans."
          },
          {
            icon: "🎵",
            title: "Master the Hymn",
            content: "Learn the Barça anthem 'El Cant del Barça.' Camp Nou erupts when 99,000 fans sing together. Download the lyrics and practice - you'll want to join the emotion."
          },
          {
            icon: "🥘",
            title: "Tapas Timing",
            content: "Eat tapas late (9-11 PM) like locals. Pre-match meals should be light - patatas bravas, jamón, and cava. Save heavy meals for post-match celebrations."
          },
          {
            icon: "🚇",
            title: "Metro to Camp Nou",
            content: "Take Line 3 (green) to Les Corts or Line 5 (blue) to Collblanc. Trains fill with singing fans before matches. The walk from station builds anticipation perfectly."
          },
          {
            icon: "🗣️",
            title: "Basic Catalan",
            content: "Learn 'Visca el Barça!' (Long live Barça!) and 'Força Barça!' (Come on Barça!). Speaking Catalan shows respect for local culture and instantly connects you with fans."
          },
          {
            icon: "👏",
            title: "Applause Traditions",
            content: "Camp Nou has unique applause traditions - clap for beautiful play even by opponents, show respect during opponent injuries, and never leave before the final whistle."
          }
        ]
      }
    },
    cta: {
      title: "Ready to Experience the Most Beautiful Football in the World?",
      subtitle: "Join the Catalan passion where football is art and every match is a masterpiece.",
      buttonText: "Plan Your Barcelona Journey"
    }
  },

  manchester: {
    meta: {
      title: "Manchester Fan Guide - United vs City, Old Trafford & Etihad | FANTOWNS",
      description: "Ultimate Manchester football fan travel guide. Experience the Manchester Derby, Old Trafford Theatre of Dreams, Etihad Stadium, best pubs, and navigate the most intense city rivalry in football.",
      keywords: "Manchester United, Manchester City, Old Trafford, Etihad Stadium, Manchester Derby, football tourism, Manchester pubs, English football, Premier League"
    },
    theme: {
      primary: "#da020e",
      secondary: "#6cabdd",
      tagBg: "#fee2e2",
      tagColor: "#dc2626",
      heroBg: "linear-gradient(rgba(218, 2, 14, 0.8), rgba(108, 171, 221, 0.6)), url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 600\"><rect fill=\"%23da020e\" width=\"1200\" height=\"600\"/><path fill=\"%236cabdd\" opacity=\"0.4\" d=\"M0,300 Q300,100 600,300 T1200,300 L1200,600 L0,600 Z\"/></svg>')"
    },
    hero: {
      title: "Manchester 🏴󠁧󠁢󠁥󠁮󠁧󠁿",
      subtitle: "Red vs Blue - Where the World's Most Intense City Rivalry Divides Families",
      stats: [
        { number: "2", label: "Global Giants" },
        { number: "150,000", label: "Combined Capacity" },
        { number: "Manchester Derby", label: "Ultimate Rivalry" }
      ]
    },
    sections: {
      hotels: {
        description: "Stay in the birthplace of modern football, from luxury hotels near both stadiums to historic pubs with rooms where football legends have slept.",
        items: [
          {
            name: "The Lowry Hotel",
            type: "Five-Star Luxury",
            location: "Salford Quays",
            description: "Where both United and City players have stayed over the years. Five-star luxury overlooking the River Irwell with easy access to both Old Trafford and the Etihad.",
            tags: ["Player Hotel", "Five-Star", "Both Stadiums"],
            rating: "4.8",
            distance: "15 min to both stadiums",
            icon: "🏨"
          },
          {
            name: "Hotel Football",
            type: "United Paradise",
            location: "Old Trafford",
            description: "Owned by former United legends Gary Neville and Ryan Giggs. Directly opposite Old Trafford with stadium views from rooms. A pilgrimage site for United fans worldwide.",
            tags: ["Legend Owned", "Stadium Views", "United Shrine"],
            rating: "4.7",
            distance: "Opposite Old Trafford",
            icon: "🏨"
          },
          {
            name: "Travelodge Manchester Central",
            type: "Budget Central",
            location: "City Center",
            description: "Budget-friendly hotel where traveling fans stay. The lobby becomes a neutral zone where both Red and Blue fans coexist before Derby days - carefully.",
            tags: ["Budget Friendly", "Neutral Zone", "Derby Central"],
            rating: "4.2",
            distance: "20 min to both stadiums",
            icon: "🏨"
          }
        ]
      },
      pubs: {
        description: "Experience the heart of English football culture in these legendary pubs where the Manchester rivalry runs deeper than blood.",
        items: [
          {
            name: "The Bishops Blaize",
            type: "United Stronghold",
            location: "Old Trafford",
            description: "The most famous United pub, steps from Old Trafford. On match days, thousands of Reds gather here, and the atmosphere is electric. Sir Alex Ferguson used to drink here.",
            tags: ["United Stronghold", "Sir Alex's Pub", "Match Day Central"],
            rating: "4.8",
            distance: "2 min walk to Old Trafford",
            icon: "🍺"
          },
          {
            name: "The Townley",
            type: "City Territory",
            location: "Eastlands",
            description: "Traditional City pub near the Etihad where Blues have gathered for decades. The walls tell the story of City's journey from underdogs to champions, and everyone has an opinion.",
            tags: ["City Territory", "Underdog Story", "Blue Heritage"],
            rating: "4.6",
            distance: "5 min walk to Etihad",
            icon: "🍺"
          },
          {
            name: "Peveril of the Peak",
            type: "Neutral Historic",
            location: "City Center",
            description: "Victorian pub that's managed to stay neutral in the Manchester divide. Both sets of fans drink here peacefully - it's the closest thing to sacred ground in Manchester.",
            tags: ["Neutral Territory", "Victorian Historic", "Sacred Ground"],
            rating: "4.5",
            distance: "City Center",
            icon: "🍺"
          }
        ]
      },
      restaurants: {
        description: "From traditional British fare to modern cuisine, fuel your Manchester football passion with the best food the city has to offer.",
        items: [
          {
            name: "Sam's Chop House",
            type: "Manchester Institution",
            location: "City Center",
            description: "Victorian chophouse serving traditional British food since 1872. Football legends from both clubs have dined here, and the private dining rooms host transfer negotiations.",
            tags: ["Since 1872", "Transfer Negotiations", "Both Clubs"],
            rating: "4.7",
            distance: "City Center",
            icon: "🍽️"
          },
          {
            name: "Red's True Barbecue",
            type: "United Themed",
            location: "Old Trafford",
            description: "American BBQ restaurant with United memorabilia covering every wall. Popular with fans before matches, and the portions are as big as United's ambitions.",
            tags: ["United Themed", "American BBQ", "Huge Portions"],
            rating: "4.4",
            distance: "Near Old Trafford",
            icon: "🍽️"
          },
          {
            name: "The French",
            type: "Fine Dining",
            location: "City Center",
            description: "Michelin-starred restaurant where football executives from both clubs celebrate big signings. Modern British cuisine that rivals anything in London.",
            tags: ["Michelin Star", "Executive Dining", "Big Signings"],
            rating: "4.9",
            distance: "City Center",
            icon: "🍽️"
          }
        ]
      },
      attractions: {
        description: "Experience the history and passion of Manchester football through these essential destinations in the world's football capital.",
        items: [
          {
            name: "Old Trafford Tour",
            type: "Theatre of Dreams",
            location: "Old Trafford",
            description: "Tour the most famous stadium in world football. Walk in the footsteps of Best, Charlton, and Ronaldo. The museum showcases United's incredible trophy collection.",
            tags: ["Theatre of Dreams", "Football Legends", "Trophy Collection"],
            rating: "4.9",
            distance: "Old Trafford",
            icon: "⚽"
          },
          {
            name: "Etihad Stadium Tour",
            type: "City of Manchester Stadium",
            location: "Eastlands",
            description: "Experience City's modern home and their transformation from underdogs to champions. The tunnel walk gives you goosebumps, and the trophy room tells an incredible story.",
            tags: ["Modern Marvel", "Underdog Story", "Champion's Journey"],
            rating: "4.7",
            distance: "Etihad Campus",
            icon: "🏟️"
          },
          {
            name: "National Football Museum",
            type: "Football Heritage",
            location: "City Center",
            description: "Neutral ground celebrating the beautiful game. Features exhibits on both Manchester clubs and English football history. The penalty shootout simulator is legendary.",
            tags: ["Neutral Ground", "English Football", "Interactive Exhibits"],
            rating: "4.6",
            distance: "City Center",
            icon: "🏆"
          }
        ]
      },
      tips: {
        description: "Navigate the Manchester football divide without starting a war, and experience both sides of the world's most intense city rivalry.",
        items: [
          {
            icon: "⚔️",
            title: "Choose Your Colors",
            content: "NEVER wear City blue in United areas or United red in City areas. This isn't a joke - Manchester takes its football seriously. When in doubt, wear neutral colors on Derby day."
          },
          {
            icon: "🚇",
            title: "Stadium Transport",
            content: "Take the tram to Old Trafford (Trafford Bar stop) or Etihad (Etihad Campus stop). Trams fill with singing fans and are part of the matchday experience. Arrive early for atmosphere."
          },
          {
            icon: "🗣️",
            title: "Rivalry Respect",
            content: "The Manchester Derby divides families, not just the city. Show respect for the passion even if you support the other team. Banter is welcomed, but keep it clever, not cruel."
          },
          {
            icon: "☔",
            title: "Weather Wisdom",
            content: "It rains in Manchester - a lot. Bring waterproofs and embrace it. Some of the best football moments happen in the rain, and real fans never let weather stop them."
          },
          {
            icon: "🍺",
            title: "Pub Protocol",
            content: "Each pub has its allegiance. Look for scarves and colors before entering. Neutral pubs exist but are rare. When in doubt, ask locals - they'll point you in the right direction."
          },
          {
            icon: "🎵",
            title: "Learn the Songs",
            content: "Both clubs have passionate songs. United's 'Glory Glory Man United' and City's 'Blue Moon' are essential. YouTube has tutorials - arriving with knowledge earns instant respect."
          }
        ]
      }
    },
    cta: {
      title: "Ready to Experience the World's Greatest Football Rivalry?",
      subtitle: "Choose your side in the city where football passion runs deepest and every match feels like war.",
      buttonText: "Plan Your Manchester Football Pilgrimage"
    }
  },

  glasgow: {
    meta: {
      title: "Glasgow Fan Guide - Celtic vs Rangers, Old Firm Derby | FANTOWNS",
      description: "Ultimate Glasgow football fan travel guide. Experience the Old Firm Derby, Celtic Park atmosphere, Ibrox Stadium, best Scottish pubs, and navigate the world's most historic football rivalry.",
      keywords: "Celtic FC, Rangers FC, Old Firm Derby, Glasgow football, Celtic Park, Ibrox Stadium, Scottish football, Glasgow pubs, Scotland travel, football rivalry"
    },
    theme: {
      primary: "#00a650",
      secondary: "#0040a6",
      tagBg: "#dcfce7",
      tagColor: "#166534",
      heroBg: "linear-gradient(rgba(0, 166, 80, 0.8), rgba(0, 64, 166, 0.6)), url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 600\"><rect fill=\"%2300a650\" width=\"1200\" height=\"600\"/><path fill=\"%230040a6\" opacity=\"0.4\" d=\"M0,300 Q300,100 600,300 T1200,300 L1200,600 L0,600 Z\"/></svg>')"
    },
    hero: {
      title: "Glasgow 🏴󠁧󠁢󠁳󠁣󠁴󠁿",
      subtitle: "Green vs Blue - Where the Old Firm Derby Defines a City's Soul",
      stats: [
        { number: "130+", label: "Years of Rivalry" },
        { number: "100,000", label: "Combined Capacity" },
        { number: "Old Firm", label: "Most Historic Derby" }
      ]
    },
    sections: {
      hotels: {
        description: "Stay in Scotland's football capital, from luxury hotels in the city center to local guesthouses where the Old Firm passion runs through every conversation.",
        items: [
          {
            name: "Hotel du Vin Glasgow",
            type: "Boutique Luxury",
            location: "City Center",
            description: "Elegant boutique hotel in a Victorian building where both Celtic and Rangers officials have stayed. The whisky bar hosts heated but respectful Old Firm debates over single malts.",
            tags: ["Victorian Elegance", "Whisky Bar", "Neutral Territory"],
            rating: "4.7",
            distance: "15 min to both stadiums",
            icon: "🏨"
          },
          {
            name: "Citizen M Glasgow",
            type: "Modern Design",
            location: "City Center",
            description: "Hip modern hotel popular with international football fans. The lobby's communal areas buzz with Old Firm discussions, and the rooftop bar offers city views including both stadiums.",
            tags: ["Modern Hip", "International Fans", "Stadium Views"],
            rating: "4.6",
            distance: "City center location",
            icon: "🏨"
          },
          {
            name: "Glasgow SYHA Hostel",
            type: "Budget Football",
            location: "City Center",
            description: "Budget hostel where young football fans from around the world learn about the Old Firm rivalry. Common room debates can last until dawn, fueled by Scottish passion.",
            tags: ["Budget Friendly", "Young Fans", "Passionate Debates"],
            rating: "4.3",
            distance: "Central Glasgow",
            icon: "🏨"
          }
        ]
      },
      pubs: {
        description: "Experience Scottish football culture in these legendary pubs where the Old Firm rivalry has been passionately debated for over a century.",
        items: [
          {
            name: "The Hoops Bar",
            type: "Celtic Stronghold",
            location: "Gallowgate",
            description: "The most famous Celtic pub, walking distance from Celtic Park. Walls covered in green and white memorabilia, and the atmosphere on Old Firm days is absolutely electric.",
            tags: ["Celtic Stronghold", "Green & White", "Electric Atmosphere"],
            rating: "4.8",
            distance: "5 min walk to Celtic Park",
            icon: "🍺"
          },
          {
            name: "The Louden Tavern",
            type: "Rangers Territory",
            location: "Copland Road",
            description: "Historic Rangers pub near Ibrox where Blues have gathered since the 1920s. The walls tell the story of Rangers' history, and loyalty runs deeper than the Clyde River.",
            tags: ["Rangers Historic", "Since 1920s", "Deep Loyalty"],
            rating: "4.7",
            distance: "2 min walk to Ibrox",
            icon: "🍺"
          },
          {
            name: "The Pot Still",
            type: "Whisky Sanctuary",
            location: "City Center",
            description: "Neutral whisky bar with over 700 single malts where both sets of fans can drink peacefully. The only place in Glasgow where Old Firm rivals share a dram without argument.",
            tags: ["700 Whiskies", "Neutral Ground", "Peaceful Coexistence"],
            rating: "4.9",
            distance: "City Center",
            icon: "🍺"
          }
        ]
      },
      restaurants: {
        description: "From traditional Scottish fare to modern cuisine, fuel your Old Firm passion with Glasgow's incredible food scene and warm hospitality.",
        items: [
          {
            name: "The Gannet",
            type: "Modern Scottish",
            location: "City Center",
            description: "Modern Scottish restaurant celebrating local ingredients. Both Celtic and Rangers players have been spotted here, and the haggis is legendary among football fans.",
            tags: ["Modern Scottish", "Player Spotting", "Legendary Haggis"],
            rating: "4.8",
            distance: "City Center",
            icon: "🍽️"
          },
          {
            name: "Singl-end",
            type: "Coffee Culture",
            location: "Merchant City",
            description: "Specialty coffee roaster where football fans fuel up before matches. The flat whites are as strong as Old Firm opinions, and the atmosphere is always buzzing.",
            tags: ["Specialty Coffee", "Pre-Match Fuel", "Buzzing Atmosphere"],
            rating: "4.6",
            distance: "Merchant City",
            icon: "🍽️"
          },
          {
            name: "Ox and Finch",
            type: "Contemporary Dining",
            location: "City Center",
            description: "Award-winning restaurant where football executives celebrate big signings. Contemporary Scottish cuisine that's earned national recognition and player approval.",
            tags: ["Award-Winning", "Executive Dining", "National Recognition"],
            rating: "4.9",
            distance: "City Center",
            icon: "🍽️"
          }
        ]
      },
      attractions: {
        description: "Experience the history and passion of Scottish football through these essential Glasgow destinations where legends were born.",
        items: [
          {
            name: "Celtic Park Tour",
            type: "Paradise Experience",
            location: "Parkhead",
            description: "Tour 'Paradise' where Celtic have played since 1892. Walk through the tunnel where legends like Kenny Dalglish emerged, and experience the atmosphere that created football history.",
            tags: ["Paradise Stadium", "Since 1892", "Football Legends"],
            rating: "4.9",
            distance: "Celtic Park",
            icon: "⚽"
          },
          {
            name: "Ibrox Stadium Tour",
            type: "Rangers Heritage",
            location: "Ibrox",
            description: "Experience the home of Rangers FC and their incredible trophy collection. The marble staircase and Blue Room showcase the club's proud tradition and European heritage.",
            tags: ["Trophy Collection", "Marble Staircase", "European Heritage"],
            rating: "4.8",
            distance: "Ibrox Stadium",
            icon: "🏟️"
          },
          {
            name: "Glasgow Cathedral",
            type: "Historic Scotland",
            location: "Cathedral Square",
            description: "Medieval cathedral that's witnessed Glasgow's entire football history. Many fans visit here for perspective - some things are bigger than even the Old Firm derby.",
            tags: ["Medieval History", "Glasgow Heritage", "Bigger Picture"],
            rating: "4.7",
            distance: "City Center",
            icon: "⛪"
          }
        ]
      },
      tips: {
        description: "Navigate the Old Firm divide with respect and experience Scottish football culture like a true Glaswegian.",
        items: [
          {
            icon: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
            title: "Understand the History",
            content: "The Old Firm rivalry is about more than football - it's religion, politics, and identity. Learn the history respectfully. This isn't just sport, it's the soul of Glasgow."
          },
          {
            icon: "🟢",
            title: "Color Code Respect",
            content: "Green for Celtic areas, Blue for Rangers areas. NEVER mix colors on Old Firm day. The rivalry is intense but respectful - showing the wrong colors in wrong areas is genuinely dangerous."
          },
          {
            icon: "🎵",
            title: "Learn the Anthems",
            content: "Celtic's 'You'll Never Walk Alone' and Rangers' 'Follow Follow' are sacred. YouTube has tutorials, but hearing 60,000 voices sing together will give you goosebumps."
          },
          {
            icon: "🚇",
            title: "Subway Strategy",
            content: "Take the Glasgow Subway (locals call it 'Clockwork Orange'). Bridgeton for Celtic Park, Ibrox for Rangers. Trains fill with singing fans - it's part of the matchday magic."
          },
          {
            icon: "🥃",
            title: "Whisky Wisdom",
            content: "Scottish whisky brings people together. A dram shared is respect earned. Even Old Firm rivals can bond over good single malt - it's the Scottish way."
          },
          {
            icon: "☔",
            title: "Scottish Weather",
            content: "Glasgow weather changes every 10 minutes. Bring layers and waterproofs. Real Glaswegians never let rain stop them from football, and neither should you."
          }
        ]
      }
    },
    cta: {
      title: "Ready to Experience the World's Most Historic Football Rivalry?",
      subtitle: "Join the passion of the Old Firm where 130 years of history lives in every match.",
      buttonText: "Plan Your Glasgow Football Journey"
    }
  },

  saopaulo: {
    meta: {
      title: "São Paulo Fan Guide - Corinthians, Palmeiras, São Paulo FC | FANTOWNS",
      description: "Ultimate São Paulo football fan travel guide. Experience the most passionate fans on Earth, legendary stadiums, incredible Brazilian football culture, and survive the most intense derbies in South America.",
      keywords: "São Paulo football, Corinthians, Palmeiras, São Paulo FC, Brazilian football, Arena Corinthians, Allianz Parque, Morumbi, Brazilian culture, football passion Brazil"
    },
    theme: {
      primary: "#000000",
      secondary: "#00b04f",
      tagBg: "#f3f4f6",
      tagColor: "#374151",
      heroBg: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 176, 79, 0.6)), url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 600\"><rect fill=\"%23000000\" width=\"1200\" height=\"600\"/><path fill=\"%2300b04f\" opacity=\"0.3\" d=\"M0,300 Q300,100 600,300 T1200,300 L1200,600 L0,600 Z\"/></svg>')"
    },
    hero: {
      title: "São Paulo 🇧🇷",
      subtitle: "Where 30 Million People Live and Breathe Football Like Nowhere Else on Earth",
      stats: [
        { number: "4", label: "Major Clubs" },
        { number: "30M", label: "Metropolitan Area" },
        { number: "365", label: "Days of Pure Passion" }
      ]
    },
    sections: {
      hotels: {
        description: "Stay in the world's largest city outside Asia where football fanaticism reaches levels that defy comprehension.",
        items: [
          {
            name: "Hotel Unique",
            type: "Architectural Wonder",
            location: "Jardins",
            description: "Iconic copper-colored hotel shaped like a watermelon slice where international football stars stay. The rooftop bar overlooks the city where 4 massive clubs battle for supremacy.",
            tags: ["Architectural Icon", "Football Stars", "City Views"],
            rating: "4.8",
            distance: "Central to all stadiums",
            icon: "🏨"
          },
          {
            name: "Pousada Corinthians",
            type: "Fan Paradise",
            location: "Itaquera",
            description: "Corinthians-themed guesthouse near Arena Corinthians where the most fanatic supporters on Earth gather. Every room is a shrine, and match days feel like religious festivals.",
            tags: ["Corinthians Shrine", "Fanatic Supporters", "Religious Experience"],
            rating: "4.6",
            distance: "Walking to Arena Corinthians",
            icon: "🏨"
          },
          {
            name: "Hostel Futebol Arte",
            type: "Football Art",
            location: "Vila Madalena",
            description: "Hostel celebrating Brazilian football artistry where backpackers learn that São Paulo takes football more seriously than anywhere else. Walls covered in 4 clubs' history.",
            tags: ["Football Art", "Cultural Education", "Four Clubs"],
            rating: "4.4",
            distance: "Central São Paulo",
            icon: "🏨"
          }
        ]
      },
      pubs: {
        description: "Experience the most passionate football culture on the planet in bars where club loyalty is literally a matter of life and death.",
        items: [
          {
            name: "Bar do Cornélio",
            type: "Corinthians Cathedral",
            location: "Tatuapé",
            description: "The most famous Corinthians bar where the 'Fiel Torcida' (Faithful Fans) gather. On match days, 5,000 people pack the streets outside. The passion is genuinely frightening and beautiful.",
            tags: ["Fiel Torcida Central", "5,000 People", "Frightening Passion"],
            rating: "4.9",
            distance: "Corinthians heartland",
            icon: "🍺"
          },
          {
            name: "Boteco São Paulo FC",
            type: "Tricolor Temple",
            location: "Morumbi",
            description: "São Paulo FC stronghold where three-time World Club champions gather. The walls showcase their international glory, and fans debate whether they're Brazil's greatest club.",
            tags: ["World Champions", "International Glory", "Greatest Debate"],
            rating: "4.7",
            distance: "Near Morumbi Stadium",
            icon: "🍺"
          },
          {
            name: "Academia da Cerveja",
            type: "Neutral Ground",
            location: "Vila Madalena",
            description: "The ONLY bar in São Paulo where all four clubs' fans can drink together without violence. It's like a UN peacekeeping mission, but with Brazilian beer and football arguments.",
            tags: ["Miraculous Neutrality", "Four Clubs Coexist", "Peacekeeping Mission"],
            rating: "4.5",
            distance: "Vila Madalena",
            icon: "🍺"
          }
        ]
      },
      restaurants: {
        description: "Fuel your football passion with incredible Brazilian cuisine that matches the intensity of São Paulo's football culture.",
        items: [
          {
            name: "D.O.M.",
            type: "World-Class Brazilian",
            location: "Jardins",
            description: "Two-Michelin-star restaurant where football executives celebrate major signings. Chef Alex Atala creates Brazilian cuisine that rivals the artistry of São Paulo's football.",
            tags: ["Two Michelin Stars", "Executive Celebrations", "Brazilian Artistry"],
            rating: "4.9",
            distance: "Jardins district",
            icon: "🍽️"
          },
          {
            name: "Pastel do Gol",
            type: "Stadium Legend",
            location: "Multiple Stadiums",
            description: "Legendary pastel stands outside every São Paulo stadium. The fried pastries fuel fans before matches, and vendors have been feeding football passion for generations.",
            tags: ["Stadium Legend", "Generational Tradition", "Pre-Match Fuel"],
            rating: "4.6",
            distance: "All stadiums",
            icon: "🍽️"
          },
          {
            name: "Churrascaria Fogo de Chão",
            type: "Brazilian Steakhouse",
            location: "Multiple Locations",
            description: "All-you-can-eat Brazilian BBQ where players celebrate victories. The meat keeps coming like goals in a São Paulo derby - endless and incredible.",
            tags: ["All-You-Can-Eat", "Player Celebrations", "Endless Incredible"],
            rating: "4.7",
            distance: "Multiple locations",
            icon: "🍽️"
          }
        ]
      },
      attractions: {
        description: "Experience Brazilian football culture through these incredible destinations in the world's most football-obsessed city.",
        items: [
          {
            name: "Arena Corinthians",
            type: "2014 World Cup Stadium",
            location: "Itaquera",
            description: "Built for the 2014 World Cup, this is where Brazil's dreams died against Germany. But for Corinthians fans, it's paradise where 49,000 of the most passionate fans on Earth gather.",
            tags: ["World Cup Venue", "49,000 Fanatics", "Brazilian Paradise"],
            rating: "4.8",
            distance: "Itaquera",
            icon: "⚽"
          },
          {
            name: "Football Museum",
            type: "Brazilian Football Temple",
            location: "Pacaembu",
            description: "Inside the historic Pacaembu Stadium, this museum tells the story of Brazilian football genius. Interactive exhibits show why Brazil produces more football magic than anywhere else.",
            tags: ["Brazilian Genius", "Interactive Magic", "Historic Pacaembu"],
            rating: "4.7",
            distance: "Pacaembu",
            icon: "🏆"
          },
          {
            name: "Allianz Parque",
            type: "Palmeiras Fortress",
            location: "Água Branca",
            description: "Palmeiras' modern stadium where their passionate fans create an atmosphere that rivals anything in world football. The 'Mancha Verde' ultras are legendary throughout South America.",
            tags: ["Modern Fortress", "Mancha Verde Ultras", "Legendary Atmosphere"],
            rating: "4.8",
            distance: "Água Branca",
            icon: "🏟️"
          }
        ]
      },
      tips: {
        description: "Survive and thrive in the world's most passionate football city where the beautiful game reaches artistic and emotional peaks.",
        items: [
          {
            icon: "⚫",
            title: "Choose Your Colors Carefully",
            content: "São Paulo has 4 major clubs - Corinthians (black/white), Palmeiras (green), São Paulo FC (red/white), Santos (white/black). NEVER mix colors. Getting it wrong in the wrong neighborhood is genuinely dangerous."
          },
          {
            icon: "🎭",
            title: "Respect the Theater",
            content: "Brazilian fans turn football into performance art. Choreographed displays, massive flags, synchronized chanting. Don't just watch - participate. It's theater, religion, and war combined."
          },
          {
            icon: "🚇",
            title: "Metro Madness",
            content: "São Paulo's metro fills with singing fans before matches. Lines 3 (red) to Corinthians, Line 2 (green) to Palmeiras. The journey is part of the experience - embrace the chaos."
          },
          {
            icon: "🏠",
            title: "Neighborhood Loyalty",
            content: "Each neighborhood belongs to a club. Learn the geography: Tatuapé (Corinthians), Barra Funda (Palmeiras), Morumbi (São Paulo FC). Wearing wrong colors is like declaring war."
          },
          {
            icon: "🎵",
            title: "Learn Portuguese Chants",
            content: "English won't work here. Learn basic Portuguese chants: 'Vai Corinthians!' (Go Corinthians!), 'Avanti Palestra!' (Forward Palmeiras!). Effort is respected, ignorance isn't."
          },
          {
            icon: "🇧🇷",
            title: "Brazilian Time",
            content: "Everything starts late in São Paulo, but football is sacred. Matches start on time, and arriving late means missing the pre-game spectacle that's often better than the match itself."
          }
        ]
      }
    },
    cta: {
      title: "Ready to Experience the Most Passionate Football City on Earth?",
      subtitle: "Enter a world where 30 million people live football with an intensity that defies belief.",
      buttonText: "Plan Your São Paulo Football Journey"
    }
  },

  tokyo: {
    meta: {
      title: "Tokyo Anime Fan Guide - Comiket, Akihabara & Otaku Culture | FANTOWNS",
      description: "Ultimate Tokyo anime fan travel guide. Experience Comiket chaos, otaku pilgrimages, anime cafes, figure hunting, and survive the most intense fan convention mayhem on Earth.",
      keywords: "Comiket Tokyo, anime convention, otaku culture, Akihabara, anime pilgrimage, figure collecting, anime cafes, manga culture, Tokyo anime tours, otaku travel"
    },
    theme: {
      primary: "#ff1493",
      secondary: "#00ffff",
      tagBg: "#fef3c7",
      tagColor: "#f59e0b",
      heroBg: "linear-gradient(rgba(255, 20, 147, 0.8), rgba(0, 255, 255, 0.6)), url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 600\"><rect fill=\"%23ff1493\" width=\"1200\" height=\"600\"/><path fill=\"%2300ffff\" opacity=\"0.4\" d=\"M0,300 Q300,100 600,300 T1200,300 L1200,600 L0,600 Z\"/><circle fill=\"%23ffff00\" cx=\"200\" cy=\"150\" r=\"30\" opacity=\"0.6\"/><circle fill=\"%23ff69b4\" cx=\"1000\" cy=\"450\" r=\"40\" opacity=\"0.5\"/></svg>')"
    },
    hero: {
      title: "Tokyo 🇯🇵",
      subtitle: "Anime Convention Capital Where 750,000 Otaku Create Beautiful Chaos",
      stats: [
        { number: "750,000", label: "Comiket Attendees" },
        { number: "4", label: "Days of Mayhem" },
        { number: "∞", label: "Anime Obsession" }
      ]
    },
    sections: {
      hotels: {
        description: "Stay where the world's most dedicated anime fans gather for the ultimate otaku pilgrimage and convention chaos.",
        items: [
          {
            name: "Hotel Gracery Shinjuku",
            type: "Godzilla Theme",
            location: "Shinjuku",
            description: "Hotel with a giant Godzilla head attached to the building where anime fans stay during Comiket. Lobby filled with cosplayers planning their convention strategies and trading rare merchandise.",
            tags: ["Giant Godzilla", "Cosplayer Central", "Trading Hub"],
            rating: "4.7",
            distance: "Central to all anime districts",
            icon: "🏨"
          },
          {
            name: "Capsule Hotel Akihabara",
            type: "Otaku Pod Life",
            location: "Akihabara",
            description: "Futuristic capsule hotel in the heart of Electric Town. Each pod has built-in screens for anime watching, and the common area buzzes with convention planning and figure unboxing.",
            tags: ["Futuristic Pods", "Built-in Screens", "Figure Unboxing"],
            rating: "4.5",
            distance: "Heart of Akihabara",
            icon: "🏨"
          },
          {
            name: "Manga Art Hotel",
            type: "Anime Paradise",
            location: "Shibuya",
            description: "Each room themed after different anime series. During Comiket weeks, it becomes a 24/7 anime convention with hallways full of cosplayers and impromptu manga reading sessions.",
            tags: ["Anime Themed Rooms", "24/7 Convention", "Manga Sessions"],
            rating: "4.6",
            distance: "Shibuya anime culture",
            icon: "🏨"
          }
        ]
      },
      pubs: {
        description: "Experience otaku culture in these legendary venues where anime obsession reaches levels that defy human comprehension.",
        items: [
          {
            name: "Maid Cafe Wonderland",
            type: "Kawaii Overload",
            location: "Akihabara",
            description: "The most famous maid cafe where costumed servers treat customers like masters. During Comiket, lines stretch for hours as exhausted convention-goers seek kawaii energy restoration.",
            tags: ["Famous Maid Cafe", "Hour-Long Lines", "Kawaii Energy"],
            rating: "4.8",
            distance: "Akihabara Electric Town",
            icon: "🍺"
          },
          {
            name: "Gundam Cafe",
            type: "Mecha Madness",
            location: "Odaiba",
            description: "Official Gundam-themed cafe next to the life-size Gundam statue. Menu items named after mobile suits, and during convention season, mecha fans plan their next kit purchases over themed cocktails.",
            tags: ["Life-Size Gundam", "Mobile Suit Menu", "Kit Purchases"],
            rating: "4.6",
            distance: "Odaiba Gundam Base",
            icon: "🍺"
          },
          {
            name: "Vampire Cafe",
            type: "Gothic Anime",
            location: "Ginza",
            description: "Horror-themed restaurant where gothic anime fans gather in complete darkness served by vampire waitresses. The atmosphere is so intense that normal humans flee within minutes.",
            tags: ["Complete Darkness", "Vampire Waitresses", "Normal Humans Flee"],
            rating: "4.4",
            distance: "Ginza underground",
            icon: "🍺"
          }
        ]
      },
      restaurants: {
        description: "Fuel your anime convention madness with themed restaurants that blur the line between food and fan experience.",
        items: [
          {
            name: "Monster Cafe Harajuku",
            type: "Sensory Assault",
            location: "Harajuku",
            description: "Restaurant designed like an anime nightmare where costumed performers dance on tables while you eat. So overwhelming that anime fans consider it 'light training' for Comiket chaos.",
            tags: ["Anime Nightmare", "Table Dancing", "Comiket Training"],
            rating: "4.5",
            distance: "Harajuku kawaii culture",
            icon: "🍽️"
          },
          {
            name: "Ramen Jiro Akihabara",
            type: "Otaku Fuel Station",
            location: "Akihabara",
            description: "Legendary ramen shop where anime fans carb-load before convention marathons. Portions so massive that finishing one bowl is considered preparation for surviving 4 days of Comiket.",
            tags: ["Carb-Loading", "Massive Portions", "Comiket Preparation"],
            rating: "4.7",
            distance: "Akihabara Electric Town",
            icon: "🍽️"
          },
          {
            name: "Kawaii Monster Cafe",
            type: "Rainbow Explosion",
            location: "Harajuku",
            description: "Restaurant that looks like an anime threw up rainbows. So aggressively cute that it causes actual sensory overload. Anime fans use it to build tolerance for convention overstimulation.",
            tags: ["Rainbow Explosion", "Sensory Overload", "Overstimulation Training"],
            rating: "4.3",
            distance: "Harajuku center",
            icon: "🍽️"
          }
        ]
      },
      attractions: {
        description: "Experience the epicenter of global anime culture through these pilgrimage sites where otaku dreams become reality.",
        items: [
          {
            name: "Comiket at Tokyo Big Sight",
            type: "Otaku Armageddon",
            location: "Odaiba",
            description: "The world's largest anime convention where 750,000 fans create 4 days of beautiful chaos. Lines stretch for miles, cosplayers perform street theater, and rare doujinshi change hands for fortunes.",
            tags: ["750,000 Fans", "4 Days Chaos", "Street Theater"],
            rating: "5.0",
            distance: "Odaiba convention center",
            icon: "🎪"
          },
          {
            name: "Akihabara Electric Town",
            type: "Anime Mecca",
            location: "Akihabara",
            description: "8-story buildings dedicated to single anime series, maid cafes on every corner, and figure shops that resemble religious shrines. Peak otaku pilgrimage destination on Earth.",
            tags: ["8-Story Shrines", "Religious Figures", "Peak Pilgrimage"],
            rating: "4.9",
            distance: "Central Tokyo",
            icon: "🏢"
          },
          {
            name: "Mandarake Complex Shibuya",
            type: "Manga Cathedral",
            location: "Shibuya",
            description: "8 floors of rare manga, vintage anime goods, and collectibles that make grown otaku weep. Spending 12 hours here and emerging broke is considered a rite of passage.",
            tags: ["8 Floors Rare", "Grown Otaku Weep", "Rite of Passage"],
            rating: "4.8",
            distance: "Shibuya center",
            icon: "📚"
          }
        ]
      },
      tips: {
        description: "Survive the most intense anime convention chaos on Earth and emerge as a true otaku warrior.",
        items: [
          {
            icon: "⏰",
            title: "Comiket Strategy",
            content: "Arrive at 4 AM for 10 AM opening or face 6-hour lines. Bring survival kit: water, snacks, portable charger, cash (¥100,000+), and mental preparation for humanity at its most concentrated."
          },
          {
            icon: "👘",
            title: "Cosplay Respect",
            content: "Ask before photographing cosplayers, learn proper poses, and never touch without permission. Cosplayers are artists, not entertainment. Breaking etiquette gets you blacklisted from the community."
          },
          {
            icon: "💴",
            title: "Cash is King",
            content: "Bring ¥200,000+ in cash for Comiket. Rare doujinshi and figures sell instantly. Credit cards are useless. ATMs empty during conventions. Running out of cash means missing once-in-a-lifetime finds."
          },
          {
            icon: "🎒",
            title: "Survival Gear",
            content: "Large backpack, portable phone charger, cooling towels, energy drinks, and comfortable shoes. You'll walk 20+ miles over 4 days while carrying increasingly heavy bags of purchases."
          },
          {
            icon: "🇯🇵",
            title: "Basic Otaku Japanese",
            content: "Essential phrases: 'Ikura desu ka?' (How much?), 'Arigato gozaimasu!' (Thank you!), 'Kawaii!' (Cute!), 'Sugoi!' (Amazing!). Speaking anime Japanese gets you treated like family."
          },
          {
            icon: "📱",
            title: "Digital Preparation",
            content: "Download translation apps, maps of Comiket, and anime merchandise price guides. Follow @comiketofficial. Join otaku Discord servers. Information is survival in convention chaos."
          }
        ]
      }
    },
    cta: {
      title: "Ready to Survive the World's Most Intense Anime Convention Chaos?",
      subtitle: "Join 750,000 otaku in the ultimate test of anime fan dedication and endurance.",
      buttonText: "Plan Your Otaku Pilgrimage"
    }
  },

  seattle: {
    meta: {
      title: "Seattle Seahawks 12th Man Fan Guide - Hotels, Bars & Experience | FANTOWNS",
      description: "Ultimate Seattle Seahawks fan travel guide. Experience the 12th Man at Lumen Field, discover fan hotels, legendary bars, and insider tips for the loudest stadium in sports.",
      keywords: "Seattle Seahawks travel, Lumen Field, 12th Man, Seattle fan bars, Beast Quake, NFL tourism, Seahawks experience"
    },
    theme: {
      primary: "#002244",
      secondary: "#69BE28",
      tagBg: "#e6f4ea",
      tagColor: "#1e7e34",
      heroBg: "linear-gradient(rgba(0, 34, 68, 0.9), rgba(0, 34, 68, 0.9)), url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 600\"><rect fill=\"%23002244\" width=\"1200\" height=\"600\"/></svg>')"
    },
    hero: {
      title: "Seattle 🇺🇸",
      subtitle: "Where the 12th Man Causes Earthquakes",
      stats: [
        { number: "137.6 dB", label: "Record Noise" },
        { number: "69,000", label: "Lumen Capacity" },
        { number: "2011", label: "Beast Quake" }
      ]
    },
    sections: {
      hotels: {
        description: "Stay near Lumen Field where the 12th Man energy pulses through Seattle's SoDo district.",
        items: [
          {
            name: "Hotel Interurban",
            type: "Modern Boutique",
            location: "SoDo District",
            description: "Opened 2021, this Hilton Tapestry hotel sits one block from Lumen Field. Rooftop bar overlooks the stadium. Filled with Seahawks fans pre-game. Modern Pacific Northwest design with local craft beers on tap.",
            tags: ["Walking Distance", "Rooftop Bar", "Modern"],
            rating: "4.6",
            distance: "2 min walk to Lumen",
            icon: "🏨"
          },
          {
            name: "Silver Cloud Hotel Stadium",
            type: "Fan Favorite",
            location: "Stadium District",
            description: "The unofficial Seahawks fan headquarters. Parking lot tailgates start 6 hours before kickoff. Complimentary shuttle to stadium. Rooms book out months ahead for big games. This is where visiting fans stay to experience real 12th Man culture.",
            tags: ["Fan Central", "Tailgate Parking", "Shuttle"],
            rating: "4.4",
            distance: "5 min to Lumen",
            icon: "🏨"
          },
          {
            name: "The Edgewater Hotel",
            type: "Luxury Waterfront",
            location: "Downtown Seattle",
            description: "Pike Place Market hotel where The Beatles stayed in 1964. Rooms over Elliott Bay with views of ferries and mountains. Seahawks players' families stay here. Premium dining and Seattle sophistication 15 minutes from stadium chaos.",
            tags: ["Historic", "Waterfront", "Luxury"],
            rating: "4.7",
            distance: "15 min to Lumen",
            icon: "🏨"
          }
        ]
      },
      pubs: {
        description: "Experience Seattle's football culture in bars where the 12th Man was born.",
        items: [
          {
            name: "Pyramid Alehouse",
            type: "Brewery",
            location: "SoDo",
            description: "Two blocks from Lumen Field, this massive brewery becomes Seahawks central on game days. The beer garden holds 1,000+ fans in navy and green, chanting and drinking local IPAs. The pale ale flows, wings disappear, and by kickoff the march to the stadium is a roaring river of 12s.",
            tags: ["Brewery", "Beer Garden", "Pre-Game Hub"],
            rating: "4.5",
            distance: "2 blocks from Lumen",
            icon: "🍺"
          },
          {
            name: "Fuel Sports Eats & Beats",
            type: "Sports Bar",
            location: "SoDo",
            description: "The official 12th Man pre-game bar. Opened specifically to serve Seahawks fans. DJs, dancers, 100+ TVs, and energy that builds to fever pitch by kickoff. This is where the noise starts before it moves to the stadium.",
            tags: ["Official Spot", "DJ & Dancing", "High Energy"],
            rating: "4.6",
            distance: "3 blocks from Lumen",
            icon: "🍺"
          },
          {
            name: "Flatstick Pub Pioneer Square",
            type: "Unique Bar",
            location: "Pioneer Square",
            description: "Mini-golf bar that transforms into Seahawks headquarters on game days. Indoor mini-golf + craft beer + football creates uniquely Seattle experience. Players occasionally visit off-season. The PNW in bar form.",
            tags: ["Mini Golf", "Craft Beer", "Unique"],
            rating: "4.7",
            distance: "Downtown",
            icon: "🍺"
          }
        ]
      },
      restaurants: {
        description: "From seafood to craft coffee, fuel your 12th Man experience with Seattle's legendary food scene.",
        items: [
          {
            name: "Ivar's Acres of Clams",
            type: "Seattle Institution",
            location: "Waterfront",
            description: "Since 1938, this waterfront institution serves the city's best clam chowder and fish & chips. Seahawks players post-victory photos here. The bread bowl chowder is Washington State comfort in edible form. Order at the window, eat by the water, watch ferries, discuss the game.",
            tags: ["Seafood", "Historic", "Waterfront"],
            rating: "4.5",
            distance: "Downtown",
            icon: "🍽️"
          },
          {
            name: "Elysian Brewing",
            type: "Brewery Restaurant",
            location: "Capitol Hill",
            description: "Seattle's beloved craft brewery serves exceptional beer and elevated pub food. Their seasonal Seahawks IPA sells out in hours. The pumpkin ale is fall tradition. Capitol Hill location fills with younger fans, Capitol Hill becomes a party after victories.",
            tags: ["Craft Beer", "Burgers", "Local Favorite"],
            rating: "4.6",
            distance: "Capitol Hill",
            icon: "🍽️"
          },
          {
            name: "Pike Place Chowder",
            type: "Award-Winning",
            location: "Pike Place Market",
            description: "Voted America's best clam chowder multiple times. The New England and Seafood chowders are rich, creamy perfection. Lines wrap around the Market, but move fast. This is required eating before afternoon games. Pure Seattle in a sourdough bowl.",
            tags: ["Award-Winning", "Pike Place", "Chowder"],
            rating: "4.8",
            distance: "Downtown",
            icon: "🍽️"
          }
        ]
      },
      attractions: {
        description: "Experience Seattle's 12th Man culture and Pacific Northwest beauty beyond the stadium.",
        items: [
          {
            name: "Lumen Field Tour",
            type: "Stadium Experience",
            description: "Walk the sidelines where Beast Quake happened. Touch the 12th Man flag. See the visiting locker room that intimidates opponents. Stand where Russell Wilson led the Legion of Boom. The tour guides are die-hard 12s with incredible stories.",
            tags: ["Stadium Tour", "Must-Do", "12th Man History"],
            rating: "4.9",
            icon: "🏟️"
          },
          {
            name: "Museum of Pop Culture (MoPOP)",
            type: "Seattle Culture",
            description: "Frank Gehry-designed museum celebrating Pacific Northwest music and culture. Nirvana, Jimi Hendrix, Pearl Jam exhibits. Also features sci-fi and horror displays. This is Seattle's creative spirit on display. Next to Space Needle.",
            tags: ["Music History", "Architecture", "Culture"],
            rating: "4.6",
            icon: "🎸"
          },
          {
            name: "Pike Place Market",
            type: "Historic Market",
            description: "Since 1907, this waterfront market pulses with fish-throwers, flower vendors, and the original Starbucks. On game days, the market empties as everyone heads to Lumen. But morning before kickoff, grab coffee and flowers, soak in old Seattle before new Seattle screams.",
            tags: ["Historic", "Food", "Coffee"],
            rating: "4.7",
            icon: "🌸"
          }
        ]
      },
      tips: {
        description: "Master these Seattle fan customs and you'll earn respect from the loudest fans in football.",
        items: [
          {
            icon: "🔊",
            title: "Bring Earplugs (Seriously)",
            content: "Lumen Field hit 137.6 decibels—louder than a jet engine. The stadium was designed to trap and amplify noise. Your ears will ring for days without protection. But don't use them—the 12th Man noise is the point."
          },
          {
            icon: "💚",
            title: "Wear Navy or Action Green",
            content: "Navy blue is traditional. Action green (neon) is modern 12s. Wolf grey is acceptable. White is rare. Never red (49ers) or green-and-gold (Packers). Violations get beer thrown at you. Probably."
          },
          {
            icon: "🌧️",
            title: "Embrace the Rain",
            content: "Seattle rain is constant but gentle. Locals don't use umbrellas—that's tourist behavior. Wear a jacket, embrace the wetness, and never complain. The 12th Man doesn't let weather determine attitude."
          },
          {
            icon: "🚆",
            title: "Link Light Rail to Stadium",
            content: "Take the Light Rail to Stadium Station—exits right at Lumen Field. Driving and parking is nightmare fuel. The train fills with singing fans, becoming mobile party. $3.25 beats $40 parking and traffic hell."
          },
          {
            icon: "☕",
            title: "Coffee is Religion",
            content: "Seattle coffee culture is serious. Order a pour-over at Stumptown or Espresso Vivace. Saying 'Starbucks is fine' marks you as outsider. The city runs on caffeine and football. Usually in that order."
          },
          {
            icon: "🏔️",
            title: "Respect the Pacific Northwest",
            content: "Seahawks fans are also hikers, kayakers, and outdoor enthusiasts. Post-game conversations cover Mount Rainier conditions as much as game stats. This is football in the most beautiful place on Earth."
          }
        ]
      }
    },
    cta: {
      title: "Ready to Join the 12th Man and Cause an Earthquake?",
      subtitle: "Experience the loudest stadium in sports and Pacific Northwest football passion.",
      buttonText: "Plan Your Seattle Journey"
    }
  },

  munich: {
    meta: {
      title: "Munich Bayern Fan Guide - Allianz Arena, Beer Gardens & Bavarian Football | FANTOWNS",
      description: "Ultimate Bayern Munich fan travel guide. Experience the Allianz Arena, discover beer gardens, authentic Bavarian culture, and insider tips for Germany's football powerhouse.",
      keywords: "Bayern Munich travel, Allianz Arena, beer gardens, Munich fan culture, Oktoberfest, Bundesliga tourism, FCB experience"
    },
    theme: {
      primary: "#DC052D",
      secondary: "#0066B2",
      tagBg: "#fee",
      tagColor: "#c00",
      heroBg: "linear-gradient(rgba(220, 5, 45, 0.9), rgba(220, 5, 45, 0.9)), url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 600\"><rect fill=\"%23DC052D\" width=\"1200\" height=\"600\"/></svg>')"
    },
    hero: {
      title: "Munich 🇩🇪",
      subtitle: "Where Football Meets Bavarian Tradition",
      stats: [
        { number: "32", label: "Bundesliga Titles" },
        { number: "75,000", label: "Allianz Capacity" },
        { number: "1900", label: "Founded" }
      ]
    },
    sections: {
      hotels: {
        description: "Stay near the Allianz Arena or in Munich's historic center where Bavarian hospitality meets football excellence.",
        items: [
          {
            name: "Hotel Residenz München",
            type: "Luxury Boutique",
            location: "Schwabing-Freimann",
            description: "Five minutes from Allianz Arena, this elegant hotel caters to Bayern fans with stadium-view suites. The breakfast buffet features traditional Bavarian Weisswurst and pretzels. Staff speak fluent 'football'—they'll reserve your beer garden table and arrange match tickets. Post-game, the bar fills with celebrating fans.",
            tags: ["Near Stadium", "Bavarian Breakfast", "Football Focus"],
            rating: "4.7",
            distance: "5 min to Allianz",
            icon: "🏨"
          },
          {
            name: "Mercure München Altstadt",
            type: "Central Location",
            location: "Old Town",
            description: "In Munich's historic heart, walking distance to Marienplatz and Hofbräuhaus. Take the U6 directly to Fröttmaning station for matches. Perfect base for combining Bayern pilgrimage with Munich exploration. Rooms overlook copper rooftops and church spires—this is Bavaria beyond football.",
            tags: ["Historic Center", "U-Bahn Access", "Classic Munich"],
            rating: "4.5",
            distance: "25 min U-Bahn to stadium",
            icon: "🏨"
          },
          {
            name: "Holiday Inn Munich - Unterhaching",
            type: "Training Ground Hotel",
            location: "Unterhaching",
            description: "Where Bayern's training ground meets fan accommodation. Players occasionally spotted at breakfast during training camp. Affordable, modern, and filled with fans making the pilgrimage. The reception desk has seen more Bayern jerseys than a laundromat.",
            tags: ["Budget-Friendly", "Training Ground", "Fan Favorite"],
            rating: "4.3",
            distance: "20 min to Allianz",
            icon: "🏨"
          }
        ]
      },
      pubs: {
        description: "Experience Munich's legendary beer culture where football and foam collide in perfect Bavarian harmony.",
        items: [
          {
            name: "Hofbräuhaus München",
            type: "Beer Hall Institution",
            location: "Old Town",
            description: "Since 1589, this cathedral of beer serves liters in dimpled glass mugs to oompah bands and roaring football songs. On match days, the hall transforms—1,000+ Bayern fans singing 'Stern des Südens' (Star of the South) while bratwurst and pretzels fly. This isn't just a bar. This is Bavaria.",
            tags: ["Historic", "Beer Hall", "Essential Experience"],
            rating: "4.6",
            distance: "Old Town",
            icon: "🍺"
          },
          {
            name: "Paulaner am Nockherberg",
            type: "Brewery & Beer Garden",
            location: "Au-Haidhausen",
            description: "Where Munich's football elite drink. Paulaner's historic brewery with vast beer garden hosts Bayern players, coaches, and die-hard fans. The märzen flows direct from copper tanks. After victories, the garden erupts in song. This is where championships taste like liquid bread.",
            tags: ["Brewery", "Beer Garden", "Players' Spot"],
            rating: "4.7",
            distance: "South Munich",
            icon: "🍺"
          },
          {
            name: "Kennedy's Bar & Restaurant",
            type: "Sports Bar",
            location: "Sendlinger Tor",
            description: "Munich's premier sports bar shows every Bayern match on massive screens with Irish hospitality and Bavarian beer. Expat fans gather here—English commentary available. The Guinness-and-weissbier combo shouldn't work but does. International football meets local passion.",
            tags: ["Sports Bar", "International Crowd", "Big Screens"],
            rating: "4.5",
            distance: "City Center",
            icon: "🍺"
          }
        ]
      },
      restaurants: {
        description: "From traditional Bavarian cuisine to modern Munich gastronomy—fuel your football pilgrimage properly.",
        items: [
          {
            name: "Augustiner-Bräu",
            type: "Traditional Bavarian",
            location: "Old Town",
            description: "Munich's oldest independent brewery (1328) serves the city's best beer and most authentic Bavarian food. Schweinebraten (roast pork) with potato dumplings and dark beer gravy is transcendent. Bayern legends eat here. Wooden tables, copper brewing tanks, zero pretension. This is Munich's soul on a plate.",
            tags: ["Historic Brewery", "Authentic", "Beer & Food"],
            rating: "4.7",
            distance: "City Center",
            icon: "🍽️"
          },
          {
            name: "Viktualienmarkt",
            type: "Food Market",
            location: "Marienplatz",
            description: "Since 1807, Munich's food market pulses with cheese vendors, butchers, and beer gardens. Grab Leberkäse (Bavarian meatloaf), potato salad, and Augustiner from the market beer garden. Eat standing among locals. On match days, fans flood here pre-game for authentic fuel.",
            tags: ["Market", "Street Food", "Local Experience"],
            rating: "4.8",
            distance: "City Center",
            icon: "🍽️"
          },
          {
            name: "Schneider Bräuhaus",
            type: "Wheat Beer Specialist",
            location: "Old Town",
            description: "The original Weissbier (wheat beer) brewery serves traditional Bavarian dishes perfected over 150 years. Their Schneider Weisse TAP 7 pairs with schnitzel larger than your head. Vaulted ceilings echo with football discussions. This is where beer became art and food became religion.",
            tags: ["Wheat Beer", "Schnitzel", "Bavarian Classic"],
            rating: "4.6",
            distance: "Marienplatz",
            icon: "🍽️"
          }
        ]
      },
      attractions: {
        description: "Experience Bayern's dominance and Munich's beauty beyond the Allianz Arena's glowing facade.",
        items: [
          {
            name: "Allianz Arena Tour",
            type: "Stadium Experience",
            description: "Walk through the tunnel where Lewandowski, Müller, and Neuer emerged. See the trophy room—32 Bundesliga shields gleaming. Touch the pitch where Bayern won the Champions League. The arena's illuminated facade changes color—red for Bayern, white for Germany. This spaceship landed in Munich and brought glory.",
            tags: ["Stadium Tour", "Trophy Room", "Must-Do"],
            rating: "4.9",
            icon: "🏟️"
          },
          {
            name: "FC Bayern Museum",
            type: "Football History",
            description: "Six Champions League trophies. Every Bundesliga title. Beckenbauer's legacy. Interactive exhibits let you take virtual penalties against legendary keepers. The 2013 Treble season room gives chills. This museum proves Bayern isn't just a club—it's German football royalty.",
            tags: ["Museum", "Trophies", "Interactive"],
            rating: "4.8",
            icon: "🏆"
          },
          {
            name: "Marienplatz & Glockenspiel",
            type: "Munich Icon",
            description: "Munich's central square where the Glockenspiel performs daily at 11am and noon. After Bayern victories, thousands gather here celebrating—beer, flags, songs echoing off Gothic architecture. This is where medieval Munich meets modern football glory. The city's beating heart.",
            tags: ["Historic", "City Center", "Photo Spot"],
            rating: "4.7",
            icon: "🏛️"
          }
        ]
      },
      tips: {
        description: "Master Bavarian football culture and you'll drink beer with locals like you've lived here forever.",
        items: [
          {
            icon: "🍺",
            title: "Order Beer Correctly",
            content: "Say 'Eine Mass, bitte' (a liter, please) at beer gardens. Never order 'ein Bier'—that's tourist talk. A Mass (1 liter) is standard. Drink it. Germans will judge your commitment. Half-liters mark you as weak."
          },
          {
            icon: "🥨",
            title: "Respect the Weisswurst Time",
            content: "Traditional rule: eat Weisswurst (white sausage) only before noon. Served with sweet mustard and pretzels. Remove the skin before eating or locals will mock you. This is breakfast, Munich-style, before match-day beer begins."
          },
          {
            icon: "🎵",
            title: "Learn 'Stern des Südens'",
            content: "Bayern's anthem 'Stern des Südens' (Star of the South) is mandatory. Learn the chorus. Sing it in beer halls. Locals will buy you beer. Not knowing the words marks you as outsider. YouTube it before arrival."
          },
          {
            icon: "🚇",
            title: "U-Bahn to Fröttmaning",
            content: "Take U6 subway to Fröttmaning station for Allianz Arena. Exits directly at the stadium. Trains packed with singing fans create mobile beer hall atmosphere. Far superior to driving. Match tickets often include public transport."
          },
          {
            icon: "👔",
            title: "Dress Code: Lederhosen Optional",
            content: "Wear Bayern red. Lederhosen acceptable during Oktoberfest but not required for matches. Locals appreciate effort but not costume. Authentic jerseys earn respect. Wearing Dortmund yellow results in beer 'accidents.'"
          },
          {
            icon: "⚽",
            title: "Respect the Dortmund Rivalry",
            content: "Der Klassiker (Bayern vs Dortmund) is Germany's biggest match. Never praise Dortmund in Munich. This rivalry runs deeper than beer. Joking about it requires local status you don't have. Stay neutral or bleed Bayern red."
          }
        ]
      }
    },
    cta: {
      title: "Ready to Experience Bavarian Football Royalty?",
      subtitle: "Join the champions at the Allianz Arena and discover where tradition meets dominance.",
      buttonText: "Plan Your Munich Journey"
    }
  },

  cairo: {
    meta: {
      title: "Cairo Al Ahly Fan Guide - Egyptian Football Passion & Ultras Culture | FANTOWNS",
      description: "Ultimate Cairo football fan guide. Experience Al Ahly's Ultras Ahlawy, discover the passion of Egyptian football, and insider tips for Africa's most decorated club.",
      keywords: "Al Ahly Cairo, Ultras Ahlawy, Egyptian football, Cairo Stadium, African football culture, Egypt soccer travel"
    },
    theme: {
      primary: "#DC0714",
      secondary: "#FFD700",
      tagBg: "#ffeeee",
      tagColor: "#c00",
      heroBg: "linear-gradient(rgba(220, 7, 20, 0.9), rgba(220, 7, 20, 0.9)), url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 600\"><rect fill=\"%23DC0714\" width=\"1200\" height=\"600\"/></svg>')"
    },
    hero: {
      title: "Cairo 🇪🇬",
      subtitle: "Where Football Ignites Revolution",
      stats: [
        { number: "42", label: "African Titles" },
        { number: "75,000", label: "Stadium Capacity" },
        { number: "1907", label: "Founded" }
      ]
    },
    sections: {
      hotels: {
        description: "Stay in Cairo where ancient pyramids meet modern football passion and the Nile flows eternal.",
        items: [
          {
            name: "Fairmont Nile City",
            type: "Luxury Riverfront",
            location: "Nile Corniche",
            description: "Glass towers overlooking the Nile with views of Cairo's chaos and beauty. Al Ahly's wealthiest supporters stay here before big matches. The pool deck at night—Nile lit up, city roaring, call to prayer echoing—captures Egypt's contrasts. Modern luxury in ancient land.",
            tags: ["Nile Views", "Luxury", "Rooftop Pool"],
            rating: "4.6",
            distance: "30 min to Cairo Stadium",
            icon: "🏨"
          },
          {
            name: "Steigenberger El Tahrir",
            type: "Central Cairo",
            location: "Tahrir Square",
            description: "In the heart of revolutionary Tahrir Square where Egypt's future was decided. Walking distance to Egyptian Museum. Al Ahly fans gather in the lobby before matches, red jerseys and drums. This hotel witnessed history and football passion intersecting. Egypt condensed into one building.",
            tags: ["Tahrir Square", "Historic Location", "Fan Meeting Point"],
            rating: "4.4",
            distance: "20 min to stadium",
            icon: "🏨"
          },
          {
            name: "Pyramids View Inn",
            type: "Budget Heritage",
            location: "Giza Pyramids",
            description: "Wake up to pyramids outside your window. Budget accommodation with million-dollar views. Al Ahly fans on pilgrimage stay here—ancient wonders by day, modern football by night. The rooftop café serves mint tea and football philosophy. Egypt's past and present collision.",
            tags: ["Pyramid Views", "Budget", "Authentic"],
            rating: "4.2",
            distance: "45 min to stadium",
            icon: "🏨"
          }
        ]
      },
      pubs: {
        description: "Experience Cairo's ahwas (coffee houses) and modern bars where football passion flows stronger than Nile currents.",
        items: [
          {
            name: "El-Fishawy Café",
            type: "Historic Ahwa",
            location: "Khan el-Khalili",
            description: "Since 1773, this legendary café has served mint tea, shisha, and endless football debate. Mirrors and antiques cover every surface. On match days, the TV comes on and 200 years of tradition pauses for Al Ahly. Naguib Mahfouz wrote here. Ultras Ahlawy plan here. History happens here.",
            tags: ["Historic Café", "Shisha", "Cultural Icon"],
            rating: "4.5",
            distance: "Islamic Cairo",
            icon: "☕"
          },
          {
            name: "Pub 28",
            type: "Sports Bar",
            location: "Zamalek",
            description: "Cairo's premier sports bar in upscale Zamalek island. Multiple screens show African Champions League matches. Egyptian expats and visitors mix, united by Al Ahly red. The only place in Cairo serving proper pints during matches. Western bar meets Egyptian passion.",
            tags: ["Sports Bar", "International", "Alcohol Served"],
            rating: "4.3",
            distance: "Zamalek Island",
            icon: "🍺"
          },
          {
            name: "Ahwa Downtown",
            type: "Modern Ahwa",
            location: "Downtown Cairo",
            description: "Traditional ahwa reimagined for young Cairo. Mint tea, Turkish coffee, and Al Ahly scarves on every wall. The WiFi password changes to player names after big signings. This is where young Ultras Ahlawy gather, plotting choreographies and discussing tactics until sunrise.",
            tags: ["Modern Traditional", "Young Crowd", "Football Hub"],
            rating: "4.4",
            distance: "Downtown",
            icon: "☕"
          }
        ]
      },
      restaurants: {
        description: "From street koshari to Nile-side feasts—fuel your Egyptian football pilgrimage with legendary cuisine.",
        items: [
          {
            name: "Abou Tarek",
            type: "Koshari Institution",
            location: "Downtown Cairo",
            description: "Since 1950, Cairo's most famous koshari restaurant serves Egypt's national dish—lentils, rice, pasta, chickpeas, fried onions, spicy tomato sauce. Al Ahly fans eat here before matches. LE 20 fills you for 8 hours. Three floors, always packed, zero English. Perfect.",
            tags: ["Egyptian Classic", "Street Food", "Legendary"],
            rating: "4.7",
            distance: "Downtown",
            icon: "🍽️"
          },
          {
            name: "Sequoia",
            type: "Nile Dining",
            location: "Zamalek",
            description: "Upscale Nile-side restaurant where Cairo's elite watch matches on big screens over grilled meats and mezze. The terrace overlooks the river and city lights. After Al Ahly victories, champagne flows and fireworks reflect in the Nile. Modern Egypt celebrating.",
            tags: ["Upscale", "Nile Views", "Celebration Spot"],
            rating: "4.5",
            distance: "Zamalek",
            icon: "🍽️"
          },
          {
            name: "Felfela",
            type: "Traditional Egyptian",
            location: "Downtown Cairo",
            description: "Since 1959, this family restaurant serves authentic Egyptian cuisine—molokhia (green soup), stuffed pigeon, grilled kofta. Walls covered in folk art and Al Ahly photos. Tourists and locals mix. The mango juice is religion. This is Egypt's kitchen.",
            tags: ["Traditional", "Family-Run", "Authentic"],
            rating: "4.6",
            distance: "Downtown",
            icon: "🍽️"
          }
        ]
      },
      attractions: {
        description: "Experience Egyptian football culture and 5,000 years of history colliding in glorious chaos.",
        items: [
          {
            name: "Al Ahly Club Complex",
            type: "Football Institution",
            description: "Africa's most successful club's headquarters in Zamalek. The museum displays 42 African titles—more than any club on Earth. Training grounds where Salah developed. The red fortress of Egyptian football. Visit outside match days for photos and reverence.",
            tags: ["Club Museum", "Historic Grounds", "Trophy Display"],
            rating: "4.7",
            icon: "🏟️"
          },
          {
            name: "Pyramids of Giza",
            type: "Ancient Wonder",
            description: "4,500 years old, visible from space, utterly surreal in person. After watching Al Ahly, visit Khufu, Khafre, and Menkaure—pharaohs who would've been Ultras Ahlawy. Sunset over pyramids puts football in perspective. Some things transcend sport. This is one.",
            tags: ["World Wonder", "Ancient History", "Essential Visit"],
            rating: "4.9",
            icon: "🏛️"
          },
          {
            name: "Egyptian Museum",
            type: "Archaeological Treasure",
            description: "120,000 artifacts including Tutankhamun's golden mask in Tahrir Square. The building is chaotic, dusty, perfect—like Cairo itself. On match days, museum empties as everyone heads to the stadium. But visit—Ultras Ahlawy's passion has historical precedent. Egyptians invented devotion.",
            tags: ["Museum", "Tutankhamun", "History"],
            rating: "4.6",
            icon: "🏺"
          }
        ]
      },
      tips: {
        description: "Navigate Cairo's beautiful chaos and earn respect from the most passionate football supporters on Earth.",
        items: [
          {
            icon: "🔴",
            title: "Understand Ultras Ahlawy",
            content: "Egypt's most organized fan group, born in 2007. They helped topple Mubarak in 2011. 72 members died in Port Said Stadium massacre 2012. This isn't fandom—it's identity, resistance, brotherhood. Respect their history. Their chants carry revolution."
          },
          {
            icon: "🎫",
            title: "Tickets and Security",
            content: "Egyptian stadium security is intense post-2012 tragedy. Bring ID, arrive early, expect thorough searches. Tickets often sold same-day only. Women's sections exist. Follow local fans' lead. Security isn't inconvenience—it's protection of sacred space."
          },
          {
            icon: "💷",
            title: "Cash is King",
            content: "Bring Egyptian pounds cash. Cards rarely work outside luxury hotels. ATMs exist but unreliable. Koshari costs LE 20. Stadium tickets LE 50-200. Tipping (baksheesh) expected everywhere. Budget LE 500/day for food, transport, tips."
          },
          {
            icon: "🕌",
            title: "Respect Prayer Times",
            content: "When the call to prayer sounds five times daily, some shops close briefly. Al Ahly fans pray before matches. Respect the pause. Egypt's rhythm follows faith and football equally. Both are sacred."
          },
          {
            icon: "🚗",
            title: "Traffic is Performance Art",
            content: "Cairo traffic has no rules—only suggestions. Crossing streets is Frogger IRL. Use Uber or Careem apps. Agree on taxi prices before riding. The chaos has rhythm. Match days make it worse. Plan 90 minutes for any journey."
          },
          {
            icon: "🤝",
            title: "Learn Basic Arabic",
            content: "'Ahlan' (hello), 'Shukran' (thank you), 'Yalla Ahly!' (Let's go Ahly!) opens doors. Egyptians appreciate effort. Smiling transcends language. Football is universal. Wearing Al Ahly red makes you family."
          }
        ]
      }
    },
    cta: {
      title: "Ready to Experience African Football's Greatest Power?",
      subtitle: "Join Ultras Ahlawy and discover where passion ignites revolution.",
      buttonText: "Plan Your Cairo Journey"
    }
  },

  madrid: {
    meta: {
      title: "Madrid Real Madrid Fan Guide - Bernabéu, Tapas & Galáctico Glory | FANTOWNS",
      description: "Ultimate Real Madrid fan travel guide. Experience the legendary Bernabéu, discover Madrid's tapas culture, and insider tips for the world's most successful club.",
      keywords: "Real Madrid travel, Santiago Bernabéu, Madrid tapas bars, Galácticos, La Liga tourism, Champions League experience"
    },
    theme: {
      primary: "#FFFFFF",
      secondary: "#00529F",
      tagBg: "#f0f0f0",
      tagColor: "#00529F",
      heroBg: "linear-gradient(rgba(0, 82, 159, 0.9), rgba(0, 82, 159, 0.9)), url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 600\"><rect fill=\"%2300529F\" width=\"1200\" height=\"600\"/></svg>')"
    },
    hero: {
      title: "Madrid 🇪🇸",
      subtitle: "Where Galácticos Become Legends",
      stats: [
        { number: "14", label: "Champions League" },
        { number: "81,000", label: "Bernabéu Capacity" },
        { number: "1902", label: "Founded" }
      ]
    },
    sections: {
      hotels: {
        description: "Stay in Madrid's elegant neighborhoods where football royalty and Spanish grandeur collide.",
        items: [
          {
            name: "Hotel Fénix Gran Meliá",
            type: "Luxury Icon",
            location: "Colón",
            description: "Where Real Madrid celebrates championships at Cibeles fountain steps away. Post-victory, players parade here in open-top buses. Art Deco elegance meets football history. Balcony rooms overlook the celebration epicenter. When Madrid wins, you're in the middle of it all.",
            tags: ["Championship Spot", "Luxury", "Prime Location"],
            rating: "4.7",
            distance: "15 min walk to Bernabéu",
            icon: "🏨"
          },
          {
            name: "Hotel Princesa Plaza Madrid",
            type: "Stadium District",
            location: "Chamartín",
            description: "Modern hotel 500 meters from Bernabéu. Rooftop pool with stadium views. Breakfast buffed filled with excited fans on match days. Staff arrange tickets and reserve tapas bars. This is base camp for your Galáctico pilgrimage.",
            tags: ["Near Stadium", "Modern", "Fan Friendly"],
            rating: "4.5",
            distance: "5 min walk to Bernabéu",
            icon: "🏨"
          },
          {
            name: "Room007 Chueca Hostel",
            type: "Budget Hip",
            location: "Chueca",
            description: "Young traveling fans fill this stylish hostel in Madrid's trendiest neighborhood. Rooftop terrace for pre-game drinks. Walking distance to Gran Vía nightlife. Metro to stadium takes 10 minutes. Budget accommodation with championship atmosphere.",
            tags: ["Budget", "Social", "Central Location"],
            rating: "4.3",
            distance: "10 min metro to Bernabéu",
            icon: "🏨"
          }
        ]
      },
      pubs: {
        description: "Experience Madrid's tapas culture and football passion in bars where legends drink.",
        items: [
          {
            name: "Puerta 57",
            type: "Stadium Bar",
            location: "Bernabéu District",
            description: "Directly across from the Bernabéu, this official Real Madrid bar pulses with white jerseys and champagne after victories. Massive screens show classic matches. Trophy replicas line the walls. Former players occasionally appear. This is Real Madrid distilled into a bar.",
            tags: ["Official Bar", "Stadium Location", "Essential"],
            rating: "4.6",
            distance: "Across from Bernabéu",
            icon: "🍺"
          },
          {
            name: "Casa Labra",
            type: "Historic Tapas",
            location: "Sol",
            description: "Since 1860, this tiny bar serves the best bacalao (cod) croquettes in Madrid. Stand-only, loud, authentic. Madridistas gather here before heading to matches. The vermouth flows, the croquetas disappear, and football philosophy echoes off marble counters.",
            tags: ["Historic", "Tapas", "Authentic"],
            rating: "4.7",
            distance: "City Center",
            icon: "🍺"
          },
          {
            name: "Museo Chicote",
            type: "Cocktail Legend",
            location: "Gran Vía",
            description: "Since 1931, Madrid's most famous cocktail bar hosted Hemingway, Ava Gardner, and now Real Madrid's glitterati. Art Deco glamour and martinis. After Champions League victories, players and celebrities celebrate here. This is where Galácticos become legends over cocktails.",
            tags: ["Cocktail Bar", "Historic", "Celebrity Spot"],
            rating: "4.5",
            distance: "Gran Vía",
            icon: "🍸"
          }
        ]
      },
      restaurants: {
        description: "From traditional cocido to Michelin stars—fuel your Madrid football journey with legendary cuisine.",
        items: [
          {
            name: "Mercado de San Miguel",
            type: "Gourmet Market",
            location: "Plaza Mayor",
            description: "Glass-and-iron market from 1916 transformed into tapas paradise. Sample jamón ibérico, oysters, croquetas, vermouth—all under one roof. On match days, it's packed with fans grazing before heading to Bernabéu. Madrid's flavors in elegant chaos.",
            tags: ["Market", "Tapas", "Essential Experience"],
            rating: "4.6",
            distance: "City Center",
            icon: "🍽️"
          },
          {
            name: "Sobrino de Botín",
            type: "World's Oldest Restaurant",
            location: "La Latina",
            description: "Guinness Record: world's oldest restaurant (1725). Hemingway mentioned it in 'The Sun Also Rises.' Wood-fired oven cooking cochinillo (roast suckling pig) since before Real Madrid existed. After matches, celebrate like Madridistas have for centuries. History you can eat.",
            tags: ["Historic", "Traditional", "Iconic"],
            rating: "4.7",
            distance: "Old Madrid",
            icon: "🍽️"
          },
          {
            name: "StreetXO",
            type: "Michelin Innovation",
            location: "Serrano",
            description: "Chef Dabiz Muñoz's rebellious Michelin-star street food. Asian-Spanish fusion that breaks rules like Cristiano breaks records. The clubsteak bao and Peking duck are legendary. Young Madridistas celebrate victories here. Traditional Madrid meets global swagger.",
            tags: ["Michelin Star", "Innovative", "Trendy"],
            rating: "4.8",
            distance: "Salamanca District",
            icon: "🍽️"
          }
        ]
      },
      attractions: {
        description: "Experience Real Madrid's glory and the art, culture, and beauty that make the capital legendary.",
        items: [
          {
            name: "Bernabéu Stadium Tour",
            type: "Football Cathedral",
            description: "Walk the tunnel where Ronaldo, Zidane, and Di Stéfano emerged. Touch the pitch. See the presidential box. The trophy room displays 14 European Cups—more than any club in history. The panoramic view from the top tier is breathtaking. This is football heaven.",
            tags: ["Stadium Tour", "Trophy Room", "Must-Do"],
            rating: "4.9",
            icon: "🏟️"
          },
          {
            name: "Cibeles Fountain",
            type: "Championship Monument",
            description: "Where Real Madrid celebrates every title. Players drape white flags over the goddess Cibeles. Thousands gather, singing, champagne spraying. Even without victory, this fountain in Plaza de Cibeles represents Madrid's beating heart. The city's most beautiful roundabout.",
            tags: ["Historic", "Photo Spot", "Celebration Site"],
            rating: "4.8",
            icon: "⛲"
          },
          {
            name: "Prado Museum",
            type: "Art Masterpiece",
            description: "One of the world's finest art museums. Velázquez, Goya, Bosch masterpieces. After football passion, experience Spain's artistic soul. The museum empties on match days—visit then for solitude with genius. Madrid is more than football. This is proof.",
            tags: ["Museum", "World-Class Art", "Culture"],
            rating: "4.9",
            icon: "🖼️"
          }
        ]
      },
      tips: {
        description: "Master Madrid's culture and you'll celebrate like a local when Los Blancos lift another trophy.",
        items: [
          {
            icon: "🥘",
            title: "Master Tapas Timing",
            content: "Lunch 2-4pm, dinner after 9pm. Spaniards eat late. Tapas bars serve small plates to share—don't order individual meals. Say 'una caña' for small beer, 'jamón ibérico' for the best ham on Earth. Standing at the bar is authentic."
          },
          {
            icon: "⚪",
            title: "Hala Madrid Y Nada Más",
            content: "Real Madrid's battle cry means 'Go Madrid and nothing else.' Learn it. Shout it. The Bernabéu roars it before kickoff. Not knowing this phrase marks you as outsider. Pronounce it: 'AH-la mah-DREED ee NAH-dah MAHS.'"
          },
          {
            icon: "🚇",
            title: "Metro to Santiago Bernabéu",
            content: "Take Line 10 to Santiago Bernabéu station—exits directly at the stadium. Madrid metro is fast, clean, efficient. Far better than driving. Match tickets often include transport. The metro fills with white jerseys like a mobile celebration."
          },
          {
            icon: "💃",
            title: "Siesta is Real",
            content: "Many shops close 2-5pm for siesta. Plan around it. Madridistas nap before night matches. The city runs late—nightlife starts after midnight. Embrace the schedule or fight it miserably. When in Madrid, sleep like Madrileños."
          },
          {
            icon: "🔵🔴",
            title: "The Barça Rivalry is Sacred",
            content: "El Clásico (Madrid vs Barcelona) transcends sport. Never praise Barcelona in Madrid. This isn't banter—it's identity. Catalonia vs Castilla, Franco's legacy, centuries of competition. Respect the depth. Stay neutral or bleed white."
          },
          {
            icon: "👔",
            title: "Dress Well, Always",
            content: "Madrileños dress elegantly. Even casual is polished. Match days see stylish white jerseys, not sloppy tourism. Dinner requires real pants and shoes. Madrid is sophisticated. Your appearance shows respect for the city and club."
          }
        ]
      }
    },
    cta: {
      title: "Ready to Join the Kings of Europe?",
      subtitle: "Experience the Bernabéu and discover why Real Madrid is football royalty.",
      buttonText: "Plan Your Madrid Journey"
    }
  },

  marseille: {
    meta: {
      title: "Marseille OM Fan Guide - Vélodrome, Mediterranean Passion & Ultras Culture | FANTOWNS",
      description: "Ultimate Marseille OM fan travel guide. Experience the Vélodrome, discover Mediterranean culture, and insider tips for France's most passionate football city.",
      keywords: "Marseille OM travel, Stade Vélodrome, Ultras culture, French football, Provence tourism, Ligue 1 experience"
    },
    theme: {
      primary: "#2FAEE0",
      secondary: "#FFFFFF",
      tagBg: "#e6f7ff",
      tagColor: "#0080c0",
      heroBg: "linear-gradient(rgba(47, 174, 224, 0.9), rgba(47, 174, 224, 0.9)), url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 600\"><rect fill=\"%232FAEE0\" width=\"1200\" height=\"600\"/></svg>')"
    },
    hero: {
      title: "Marseille 🇫🇷",
      subtitle: "Where Mediterranean Fire Meets Football Fury",
      stats: [
        { number: "10", label: "Ligue 1 Titles" },
        { number: "67,000", label: "Vélodrome Capacity" },
        { number: "1899", label: "Founded" }
      ]
    },
    sections: {
      hotels: {
        description: "Stay in Marseille where the Mediterranean meets football passion and Provençal culture pulses.",
        items: [
          {
            name: "InterContinental Marseille - Hotel Dieu",
            type: "Luxury Historic",
            location: "Vieux-Port",
            description: "18th-century hospital transformed into five-star luxury overlooking the Old Port. Rooftop pool with cathedral views. OM's wealthiest supporters stay here before derbies. The spa is perfect for post-match recovery. Marseille's elegance meets Mediterranean beauty.",
            tags: ["Luxury", "Historic Building", "Port Views"],
            rating: "4.7",
            distance: "4km to Vélodrome",
            icon: "🏨"
          },
          {
            name: "AC Hotel Marseille Prado Vélodrome",
            type: "Stadium Hotel",
            location: "Prado",
            description: "Modern hotel 5 minutes walk from Vélodrome. Rooms fill with blue-and-white jerseys on match days. Rooftop terrace serves pastis overlooking the stadium. Staff know every bar and restaurant for pre-game rituals. This is OM fan headquarters.",
            tags: ["Near Stadium", "Modern", "Fan Central"],
            rating: "4.5",
            distance: "5 min walk to Vélodrome",
            icon: "🏨"
          },
          {
            name: "Vertigo Vieux-Port",
            type: "Budget Hostel",
            location: "Vieux-Port",
            description: "Stylish hostel in Marseille's beating heart. Rooftop terrace overlooks the harbor and Notre-Dame de la Garde. Young OM fans gather here before matches. Metro to stadium takes 10 minutes. Budget beds with million-euro views.",
            tags: ["Budget", "Harbor Views", "Social"],
            rating: "4.3",
            distance: "10 min metro to Vélodrome",
            icon: "🏨"
          }
        ]
      },
      pubs: {
        description: "Experience Marseille's bars where pastis flows, bouillabaisse simmers, and OM passion ignites.",
        items: [
          {
            name: "Le Virage",
            type: "OM Temple",
            location: "Vélodrome District",
            description: "The official OM supporters' bar steps from the stadium. Blue-and-white scarves cover every surface. Pastis and beer flow. Ultras gather here before matches, drums echoing. Former players occasionally visit. This isn't a bar—it's a pilgrimage site.",
            tags: ["Official Bar", "Ultras Spot", "Essential"],
            rating: "4.7",
            distance: "Next to Vélodrome",
            icon: "🍺"
          },
          {
            name: "Bar de la Marine",
            type: "Vieux-Port Icon",
            location: "Vieux-Port",
            description: "Featured in films, beloved by locals, packed with OM fans. This harborfront bar serves pastis, rosé, and endless football debate. Watch boats bob while discussing tactics. On match days, fans gather here before marching to the stadium.",
            tags: ["Harbor Views", "Film Location", "Authentic"],
            rating: "4.6",
            distance: "Vieux-Port",
            icon: "🍺"
          },
          {
            name: "La Caravelle",
            type: "Historic Brasserie",
            location: "Vieux-Port",
            description: "Art Deco brasserie since 1943 on the Old Port. Models of ships hang from ceilings. Fresh seafood and cold beer. After OM victories, the terrace erupts in celebration. Marseille's maritime heritage meets modern football passion.",
            tags: ["Brasserie", "Seafood", "Historic"],
            rating: "4.5",
            distance: "Vieux-Port",
            icon: "🍺"
          }
        ]
      },
      restaurants: {
        description: "From bouillabaisse to North African flavors—Marseille's cuisine is Mediterranean fusion perfected.",
        items: [
          {
            name: "Chez Fonfon",
            type: "Bouillabaisse Legend",
            location: "Vallon des Auffes",
            description: "Since 1952, this waterfront restaurant serves Marseille's most famous bouillabaisse—fish stew that defines the city. OM legends eat here. The tiny fishing port Vallon des Auffes is postcard Marseille. Reserve ahead or weep with regret.",
            tags: ["Bouillabaisse", "Waterfront", "Legendary"],
            rating: "4.8",
            distance: "Vallon des Auffes",
            icon: "🍽️"
          },
          {
            name: "Le Panier",
            type: "North African",
            location: "Le Panier District",
            description: "Marseille's oldest neighborhood pulses with Algerian, Moroccan, and Tunisian restaurants. Couscous, tagines, mint tea. This is France's most multicultural city—and the food proves it. After matches, OM fans of all backgrounds gather here.",
            tags: ["North African", "Historic District", "Couscous"],
            rating: "4.6",
            distance: "Le Panier",
            icon: "🍽️"
          },
          {
            name: "Péron",
            type: "Mediterranean Seafood",
            location: "Corniche",
            description: "Clifftop restaurant overlooking the Mediterranean. Fresh fish grilled to perfection, rosé flowing, sunset over the sea. After big OM victories, this is where players and wealthy fans celebrate. Expensive, worth it, unforgettable.",
            tags: ["Seafood", "Sea Views", "Upscale"],
            rating: "4.7",
            distance: "Corniche",
            icon: "🍽️"
          }
        ]
      },
      attractions: {
        description: "Experience OM's passion and Marseille's gritty beauty beyond the Vélodrome's roar.",
        items: [
          {
            name: "Stade Vélodrome Tour",
            type: "Stadium Experience",
            description: "France's second-largest stadium, renovated for Euro 2016. Walk the tunnel where Payet and Mandanda emerged. See the Virage Sud—home of the Ultras. The trophy room displays the 1993 Champions League—France's only winner. Feel the Mediterranean passion.",
            tags: ["Stadium Tour", "Ultras Culture", "Must-Do"],
            rating: "4.8",
            icon: "🏟️"
          },
          {
            name: "Notre-Dame de la Garde",
            type: "Marseille Icon",
            description: "Basilica on Marseille's highest point with 360° views of city, port, and sea. The golden Madonna watches over the city and OM. After victories, fans gather here celebrating. Climb the hill or take the tourist train. The views are divine.",
            tags: ["Basilica", "Panoramic Views", "Photo Spot"],
            rating: "4.9",
            icon: "⛪"
          },
          {
            name: "Vieux-Port",
            type: "Historic Harbor",
            description: "Marseille's 2,600-year-old port is the city's heart. Fish market mornings, boats bobbing, street performers, and endless cafés. On match days, OM fans gather here before marching to the Vélodrome. This is where Marseille lives.",
            tags: ["Harbor", "Historic", "City Center"],
            rating: "4.7",
            icon: "⚓"
          }
        ]
      },
      tips: {
        description: "Navigate Marseille's edge and passion, and you'll understand France's most unique city.",
        items: [
          {
            icon: "🔵⚪",
            title: "Droit au But",
            content: "'Droit au But' (Straight to the Goal) is OM's anthem. Learn it. Sing it. The Vélodrome roars it before kickoff. It's Marseille's soul in song. YouTube it before arrival. Not knowing it marks you as tourist."
          },
          {
            icon: "🥃",
            title: "Pastis is Religion",
            content: "Order pastis (anise liqueur) before matches. Mix 1 part pastis, 5 parts water—it turns cloudy yellow. This is Marseille's drink. Refusing it insults local culture. Drink it slowly. Locals judge your commitment to the city."
          },
          {
            icon: "🚇",
            title: "Metro to Rond-Point du Prado",
            content: "Take Metro Line 2 to Rond-Point du Prado station for Vélodrome. Exits 10 minutes walk from stadium. Trains packed with blue-and-white create mobile celebration. Driving is nightmare. Match tickets include transport."
          },
          {
            icon: "⚠️",
            title: "Marseille Has Edge",
            content: "France's grittiest city. Not dangerous if you're smart—avoid empty streets late, watch belongings in crowds. The edge is part of the charm. OM fans are passionate, not violent. Respect the city's roughness."
          },
          {
            icon: "🇩🇿",
            title: "Embrace Multiculturalism",
            content: "Marseille is France's most diverse city—North African culture everywhere. This diversity defines OM's fanbase. Arabic mixed with French. Couscous alongside bouillabaisse. This fusion is Marseille's strength and beauty."
          },
          {
            icon: "🟢",
            title: "The PSG Rivalry Burns",
            content: "OM vs PSG is France's Classique—working-class Marseille vs wealthy Paris. This rivalry is class warfare. Never praise PSG in Marseille. The hatred is real, deep, generational. Stay neutral or bleed blue-and-white."
          }
        ]
      }
    },
    cta: {
      title: "Ready to Experience France's Most Passionate Football City?",
      subtitle: "Join the Ultras at the Vélodrome and discover Mediterranean fire.",
      buttonText: "Plan Your Marseille Journey"
    }
  },

  mexicocity: {
    meta: {
      title: "Mexico City Football Fan Guide - Azteca Stadium, Altitude & Mariachi Passion | FANTOWNS",
      description: "Ultimate Mexico City football fan travel guide. Experience the legendary Azteca Stadium, discover altitude football, and insider tips for Latin America's most passionate sports city.",
      keywords: "Mexico City football, Estadio Azteca, Club América, Pumas UNAM, altitude football, Liga MX travel"
    },
    theme: {
      primary: "#FFD700",
      secondary: "#003DA5",
      tagBg: "#fff8e1",
      tagColor: "#c68400",
      heroBg: "linear-gradient(rgba(0, 61, 165, 0.9), rgba(0, 61, 165, 0.9)), url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 600\"><rect fill=\"%23003DA5\" width=\"1200\" height=\"600\"/></svg>')"
    },
    hero: {
      title: "Mexico City 🇲🇽",
      subtitle: "Where Altitude Meets Attitude",
      stats: [
        { number: "7,200 ft", label: "Altitude" },
        { number: "87,000", label: "Azteca Capacity" },
        { number: "1966", label: "Azteca Opened" }
      ]
    },
    sections: {
      hotels: {
        description: "Stay in CDMX where ancient Aztec heritage meets modern football passion at dizzying altitude.",
        items: [
          {
            name: "Four Seasons México DF",
            type: "Luxury Colonial",
            location: "Paseo de la Reforma",
            description: "Elegant hotel in a Spanish colonial mansion with inner courtyard. Club América's elite supporters stay here before Clásicos. The spa helps with altitude adjustment. Located on Reforma avenue—CDMX's Champs-Élysées. Mexican luxury meets football passion.",
            tags: ["Luxury", "Historic Building", "Central Location"],
            rating: "4.8",
            distance: "30 min to Azteca",
            icon: "🏨"
          },
          {
            name: "Fiesta Americana Viaducto Aeropuerto",
            type: "Stadium Area",
            location: "Near Azteca",
            description: "Modern hotel 10 minutes from Azteca Stadium. Rooms fill with América, Cruz Azul, and Pumas fans on match days. The restaurant serves chilaquiles and tacos for proper pre-game fuel. Staff help arrange tickets and warn about altitude effects.",
            tags: ["Near Stadium", "Modern", "Fan Friendly"],
            rating: "4.5",
            distance: "10 min to Azteca",
            icon: "🏨"
          },
          {
            name: "Hostel Mundo Joven Catedral",
            type: "Budget Centro",
            location: "Historic Center",
            description: "Colorful hostel in the Zócalo area where young fans gather. Rooftop bar with cathedral views. Walking distance to Bellas Artes and Templo Mayor. Metro to Azteca takes 40 minutes. Budget beds in CDMX's beating heart.",
            tags: ["Budget", "Social", "Historic Center"],
            rating: "4.4",
            distance: "40 min metro to Azteca",
            icon: "🏨"
          }
        ]
      },
      pubs: {
        description: "Experience CDMX's cantinas and pulquerías where tequila flows and football passion burns at altitude.",
        items: [
          {
            name: "Estadio Azteca Sports Bar",
            type: "Stadium Bar",
            location: "Azteca Complex",
            description: "Inside the Azteca complex, this massive sports bar fills with 1,000+ fans before matches. Corona and Modelo flow. Mariachi bands play between games. Tacos al pastor disappear by the hundreds. This is Mexican football culture concentrated.",
            tags: ["Stadium Location", "Huge", "Pre-Game Hub"],
            rating: "4.6",
            distance: "Inside Azteca",
            icon: "🍺"
          },
          {
            name: "La Mascota",
            type: "Historic Cantina",
            location: "Coyoacán",
            description: "Since 1940, this traditional cantina serves pulque, tequila, and Mexican folklore. Frida Kahlo drank here. Football fans gather on match days. The micheladas (beer with lime and spices) are legendary. This is Mexico City's soul in liquid form.",
            tags: ["Historic", "Traditional", "Micheladas"],
            rating: "4.7",
            distance: "Coyoacán",
            icon: "🍺"
          },
          {
            name: "Pata Negra",
            type: "Modern Sports Bar",
            location: "Polanco",
            description: "Upscale sports bar in wealthy Polanco with 50+ screens showing Liga MX, Champions League, and Premier League. Young CDMX professionals watch matches over craft beer and gourmet tacos. Modern Mexico celebrating global football.",
            tags: ["Upscale", "Multiple Screens", "Polanco"],
            rating: "4.5",
            distance: "Polanco",
            icon: "🍺"
          }
        ]
      },
      restaurants: {
        description: "From street tacos to mole masterpieces—CDMX's cuisine is 500 years of fusion perfected.",
        items: [
          {
            name: "Pujol",
            type: "Michelin-Level Mexican",
            location: "Polanco",
            description: "Chef Enrique Olvera's world-famous restaurant (Top 50 in the world). Modern Mexican cuisine built on ancient techniques. The mole madre aged 1,000+ days is transcendent. After big victories, CDMX's elite celebrate here. Expensive, worth it, unforgettable.",
            tags: ["World-Class", "Modern Mexican", "Reservation Required"],
            rating: "4.9",
            distance: "Polanco",
            icon: "🍽️"
          },
          {
            name: "El Cardenal",
            type: "Traditional Mexican",
            location: "Historic Center",
            description: "Since 1969, this institution serves traditional Mexican breakfast and lunch. Hot chocolate made from scratch. Tamales, enchiladas, mole poblano. Before afternoon matches, fans fuel up here. This is Mexican grandmothers' cooking elevated to art.",
            tags: ["Traditional", "Breakfast", "Historic"],
            rating: "4.7",
            distance: "Centro Histórico",
            icon: "🍽️"
          },
          {
            name: "Tacos El Güero",
            type: "Street Tacos",
            location: "Everywhere",
            description: "CDMX has 10,000+ taco stands. Al pastor (spit-roasted pork) is king. Order '4 al pastor con todo' (with everything). Add salsa, cilantro, onion, lime. Cost: 10 pesos each. This is Mexico's fast food—and it's glorious. Eat standing. No tourists, only locals.",
            tags: ["Street Food", "Tacos", "Authentic"],
            rating: "5.0",
            distance: "Every street corner",
            icon: "🌮"
          }
        ]
      },
      attractions: {
        description: "Experience Mexican football glory and the ancient-meets-modern chaos that is CDMX.",
        items: [
          {
            name: "Estadio Azteca Tour",
            type: "Historic Stadium",
            description: "Where Pelé and Maradona won World Cups. Where the 'Hand of God' happened. Two World Cup finals in the same stadium. Walk the tunnel, see the pitch, touch history. The Azteca is football sacred ground. Altitude makes you breathless—history makes you speechless.",
            tags: ["Stadium Tour", "World Cup History", "Must-Do"],
            rating: "4.9",
            icon: "🏟️"
          },
          {
            name: "Templo Mayor & Zócalo",
            type: "Aztec Ruins",
            description: "Aztec temple ruins in the heart of modern CDMX. The cathedral and palace surround the Zócalo—world's third-largest plaza. This is where ancient Tenochtitlán meets colonial Mexico meets modern chaos. On national team match days, 100,000 gather here celebrating.",
            tags: ["Ancient Ruins", "Historic Plaza", "Cultural Heart"],
            rating: "4.8",
            icon: "🏛️"
          },
          {
            name: "Teotihuacán Pyramids",
            type: "Ancient Wonder",
            description: "Massive pyramids built 2,000 years ago, 30 miles from CDMX. Climb the Pyramid of the Sun—bigger than Egypt's. The altitude kills. The views thrill. After watching modern football, experience ancient Mexican glory. Some empires built pyramids. Others build stadiums.",
            tags: ["Ancient Pyramids", "Day Trip", "Iconic"],
            rating: "4.9",
            icon: "🗿"
          }
        ]
      },
      tips: {
        description: "Master CDMX's altitude and culture, and you'll chant 'Olé Olé Olé' like a true chilango.",
        items: [
          {
            icon: "🏔️",
            title: "Respect the Altitude",
            content: "CDMX sits at 7,200 feet. You'll tire faster, breathe harder, get drunk quicker. Hydrate constantly. Arrive 1-2 days before matches to adjust. The altitude is why Mexican teams dominate at home. It's real. It's brutal."
          },
          {
            icon: "🌮",
            title: "Taco Protocol is Sacred",
            content: "Order tacos in multiples of 3-4. Use fingers, never forks. Add salsa to taste—'roja' (red) or 'verde' (green). Cilantro and onion are mandatory. Lime squeezes over everything. Eat standing at street stands. This is the way."
          },
          {
            icon: "🚇",
            title: "Metro to Tasqueña",
            content: "Take Metro Line 2 to Tasqueña, then transfer to Tren Ligero (light rail) to Estadio Azteca. Total journey 40+ minutes from Centro. Trains packed with singing fans create mobile fiesta. Tickets cost 5 pesos. Cheapest football pilgrimage ever."
          },
          {
            icon: "💰",
            title: "Cash Culture Dominates",
            content: "Bring pesos cash. Many places don't accept cards. Tacos cost 10-20 pesos. Beer 30-50 pesos. Stadium tickets 200-1,000 pesos. Budget 500-1,000 pesos/day. ATMs exist but charge fees. Come prepared."
          },
          {
            icon: "⚽",
            title: "Learn the Clásico Rivalries",
            content: "América vs Guadalajara (Chivas) is Mexico's biggest rivalry. Rich vs working class. CDMX vs Guadalajara. Also: América vs Cruz Azul. Pumas vs América. These aren't games—they're battles. Choose sides carefully or stay neutral."
          },
          {
            icon: "🎺",
            title: "Embrace Mariachi and Luchadores",
            content: "Mariachi bands play at matches. Lucha libre (wrestling) masks appear in crowds. This is Mexican football culture—music, masks, and passion. Don't question it. Join it. This beautiful chaos is what makes CDMX special."
          }
        ]
      }
    },
    cta: {
      title: "Ready to Experience Football at Altitude?",
      subtitle: "Discover the Azteca and the passion that makes Mexico City legendary.",
      buttonText: "Plan Your CDMX Journey"
    }
  },

  neworleans: {
    meta: {
      title: "New Orleans Saints Fan Guide - Superdome, Who Dat Nation & NOLA Spirit | FANTOWNS",
      description: "Ultimate New Orleans Saints fan travel guide. Experience the Superdome, discover Who Dat culture, and insider tips for America's most resilient football city.",
      keywords: "New Orleans Saints travel, Superdome, Who Dat Nation, NOLA football culture, French Quarter, NFL tourism"
    },
    theme: {
      primary: "#D3BC8D",
      secondary: "#101820",
      tagBg: "#f5f0e6",
      tagColor: "#8b7355",
      heroBg: "linear-gradient(rgba(16, 24, 32, 0.9), rgba(16, 24, 32, 0.9)), url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 600\"><rect fill=\"%23101820\" width=\"1200\" height=\"600\"/></svg>')"
    },
    hero: {
      title: "New Orleans 🇺🇸",
      subtitle: "Where Who Dat Nation Rises from the Storm",
      stats: [
        { number: "2010", label: "Super Bowl Win" },
        { number: "73,000", label: "Superdome Capacity" },
        { number: "1967", label: "Founded" }
      ]
    },
    sections: {
      hotels: {
        description: "Stay in NOLA where jazz, gumbo, and Saints passion create the most unique football culture in America.",
        items: [
          {
            name: "The Roosevelt New Orleans",
            type: "Historic Luxury",
            location: "CBD",
            description: "Waldorf Astoria elegance in the Central Business District. The Sazerac Bar invented the Sazerac cocktail—sip it before Saints games. Walking distance to Superdome. Drew Brees and Saints legends spotted here. NOLA sophistication meets football royalty.",
            tags: ["Luxury", "Historic", "Walking to Superdome"],
            rating: "4.7",
            distance: "10 min walk to Superdome",
            icon: "🏨"
          },
          {
            name: "Hyatt Regency New Orleans",
            type: "Superdome Adjacent",
            location: "CBD",
            description: "Connected to Superdome via sky bridge. Literally walk from your room to kickoff. Lobby fills with black-and-gold jerseys on game days. The ultimate Saints fan convenience. Post-game, you're in bed while others fight traffic.",
            tags: ["Connected to Stadium", "Convenient", "Modern"],
            rating: "4.5",
            distance: "Connected to Superdome",
            icon: "🏨"
          },
          {
            name: "Auld Sweet Olive Bed & Breakfast",
            type: "French Quarter B&B",
            location: "Faubourg Marigny",
            description: "Charming Creole cottage in the Marigny neighborhood. Jazz clubs walking distance. Streetcar to Superdome. The breakfast includes beignets and chicory coffee. This is NOLA living—not tourist hotels. Stay here, experience real New Orleans.",
            tags: ["B&B", "Authentic", "French Quarter Adjacent"],
            rating: "4.6",
            distance: "15 min streetcar to Superdome",
            icon: "🏨"
          }
        ]
      },
      pubs: {
        description: "Experience NOLA's bars where hurricanes flow, second lines parade, and Who Dat chants echo.",
        items: [
          {
            name: "Walk-On's Sports Bistreaux",
            type: "Saints Central",
            location: "Multiple Locations",
            description: "Founded by LSU players, now Louisiana's official sports bar chain. Every Saints game shown on massive screens with sound. Cajun food—gumbo, jambalaya, po'boys—and beer. After victories, the entire bar erupts in Who Dat chants. This is Saints nation headquarters.",
            tags: ["Sports Bar", "Cajun Food", "Who Dat Central"],
            rating: "4.6",
            distance: "Multiple locations",
            icon: "🍺"
          },
          {
            name: "Pat O'Brien's",
            type: "French Quarter Icon",
            location: "French Quarter",
            description: "Since 1933, home of the Hurricane cocktail. Dueling pianos, flaming fountain courtyard, endless party. On Saints Sundays, the patio fills with black-and-gold. The Hurricanes are strong—pace yourself. This is NOLA in a bar.",
            tags: ["Hurricane Drinks", "Piano Bar", "Tourist Classic"],
            rating: "4.5",
            distance: "French Quarter",
            icon: "🍺"
          },
          {
            name: "The Bulldog Mid-City",
            type: "Craft Beer",
            location: "Mid-City",
            description: "100+ beers on tap in converted gas station with massive patio. Local and craft beers flow. Saints fans gather here before games. Dog-friendly (hence the name). Casual, chill, quintessentially NOLA. This is where locals drink.",
            tags: ["Craft Beer", "Dog-Friendly", "Local Favorite"],
            rating: "4.7",
            distance: "Mid-City",
            icon: "🍺"
          }
        ]
      },
      restaurants: {
        description: "From beignets to gumbo—NOLA's cuisine is French, African, and Creole magic on a plate.",
        items: [
          {
            name: "Commander's Palace",
            type: "Creole Institution",
            location: "Garden District",
            description: "Since 1893, this turquoise Victorian mansion serves the finest Creole cuisine. 25-cent martinis at lunch (seriously). Turtle soup, pecan-crusted Gulf fish, bread pudding soufflé. After Saints victories, wealthy fans celebrate here. This is New Orleans royalty.",
            tags: ["Creole Fine Dining", "Historic", "Dress Code"],
            rating: "4.8",
            distance: "Garden District",
            icon: "🍽️"
          },
          {
            name: "Café du Monde",
            type: "Beignet Heaven",
            location: "French Quarter",
            description: "Since 1862, this 24/7 café serves beignets (fried dough with powdered sugar) and chicory coffee. That's it. Nothing else needed. After night games, fans flood here at 2am. Powdered sugar covers everything. This is NOLA tradition.",
            tags: ["Beignets", "24/7", "Essential NOLA"],
            rating: "4.6",
            distance: "French Quarter",
            icon: "🍽️"
          },
          {
            name: "Dooky Chase's",
            type: "Soul Food Legend",
            location: "Tremé",
            description: "Leah Chase's legendary restaurant served presidents, musicians, and civil rights leaders. The gumbo is religion. Fried chicken transcendent. This is African-American New Orleans cooking at its finest. Saints fans know—come here for real NOLA soul.",
            tags: ["Soul Food", "Historic", "Legendary"],
            rating: "4.7",
            distance: "Tremé",
            icon: "🍽️"
          }
        ]
      },
      attractions: {
        description: "Experience Saints resilience and the music, culture, and spirit that make New Orleans eternal.",
        items: [
          {
            name: "Superdome Tour",
            type: "Stadium Experience",
            description: "The dome that sheltered Katrina survivors. Where the Saints won the Super Bowl in 2010, healing a broken city. Walk the tunnel where Drew Brees emerged. See the locker room. Understand—this isn't just football. This is resurrection. This is Who Dat.",
            tags: ["Stadium Tour", "Katrina History", "Must-Do"],
            rating: "4.8",
            icon: "🏟️"
          },
          {
            name: "Preservation Hall",
            type: "Jazz Temple",
            description: "Since 1961, this tiny venue preserves traditional New Orleans jazz. No drinks, no food, just pure music. Shows at 8pm and 10pm. Saints and jazz—both are NOLA's soul. After football, experience the other art form that defines this city.",
            tags: ["Jazz Music", "Historic Venue", "Intimate"],
            rating: "4.9",
            icon: "🎺"
          },
          {
            name: "French Quarter & Bourbon Street",
            type: "Historic District",
            description: "300-year-old neighborhood of wrought-iron balconies, jazz clubs, and endless parties. Bourbon Street gets wild. Frenchmen Street has better music. Royal Street for art galleries. On Saints Sundays, the Quarter drapes in black-and-gold. This is NOLA's beating heart.",
            tags: ["Historic District", "Nightlife", "Essential NOLA"],
            rating: "4.7",
            icon: "🎭"
          }
        ]
      },
      tips: {
        description: "Master NOLA's rhythm and you'll chant Who Dat like you survived Katrina with them.",
        items: [
          {
            icon: "⚜️",
            title: "Who Dat Means Everything",
            content: "'Who Dat? Who Dat? Who Dat say dey gonna beat dem Saints?' is NOLA's chant. Born in the 1980s, it became the city's heartbeat. Learn it. Shout it. The Superdome roars it. Not knowing marks you as outsider."
          },
          {
            icon: "🎺",
            title: "Second Lines are Sacred",
            content: "Brass band parades through neighborhoods—that's a second line. Join them. Dance behind. Handkerchiefs wave. This tradition predates the Saints but now celebrates them too. Football and jazz are NOLA's twin souls."
          },
          {
            icon: "🚃",
            title: "Streetcar to the Dome",
            content: "Take the St. Charles streetcar from the Garden District or Rampart/Canal from French Quarter. Historic, charming, cheap ($1.25). Driving in NOLA is nightmare—parking worse. Streetcars filled with fans create mobile celebrations."
          },
          {
            icon: "🌀",
            title: "Understand Katrina's Shadow",
            content: "The 2005 hurricane devastated NOLA. The Superdome sheltered thousands. The 2010 Super Bowl win healed the city. Saints football carries that weight. This isn't just sports—it's survival, resilience, rebirth. Respect that history."
          },
          {
            icon: "🍹",
            title: "Drink Responsibly (Good Luck)",
            content: "Open container laws don't exist in French Quarter. Hurricanes, Hand Grenades, Sazeracs flow freely. Pace yourself—NOLA is marathon, not sprint. Hydrate. Eat beignets. The party never stops but you can."
          },
          {
            icon: "🏈",
            title: "The Falcons Rivalry is Personal",
            content: "Saints vs Falcons transcends football. Post-Katrina, Falcons fans mocked NOLA's pain. New Orleans remembers. Never praise Atlanta in NOLA. This hatred is real, earned, eternal. Who Dat forever."
          }
        ]
      }
    },
    cta: {
      title: "Ready to Join Who Dat Nation?",
      subtitle: "Experience the Superdome and discover the resilience that makes NOLA eternal.",
      buttonText: "Plan Your New Orleans Journey"
    }
  },

  portland: {
    meta: {
      title: "Portland Timbers Fan Guide - Timbers Army, Timber Joey & Craft Beer Culture | FANTOWNS",
      description: "Ultimate Portland Timbers fan travel guide. Experience the Timbers Army, discover craft beer culture, and insider tips for America's greenest football city.",
      keywords: "Portland Timbers travel, Timbers Army, Providence Park, MLS tourism, Portland craft beer, Pacific Northwest soccer"
    },
    theme: {
      primary: "#00482B",
      secondary: "#D69A2D",
      tagBg: "#e8f5e9",
      tagColor: "#2e7d32",
      heroBg: "linear-gradient(rgba(0, 72, 43, 0.9), rgba(0, 72, 43, 0.9)), url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 600\"><rect fill=\"%2300482B\" width=\"1200\" height=\"600\"/></svg>')"
    },
    hero: {
      title: "Portland 🇺🇸",
      subtitle: "Where Timber Joey's Chainsaw Roars",
      stats: [
        { number: "2015", label: "MLS Cup Win" },
        { number: "25,000", label: "Providence Capacity" },
        { number: "1975", label: "Founded (NASL)" }
      ]
    },
    sections: {
      hotels: {
        description: "Stay in Portland where craft beer, sustainability, and Timbers passion create soccer's greenest culture.",
        items: [
          {
            name: "The Nines Hotel",
            type: "Downtown Luxury",
            location: "Downtown Portland",
            description: "Luxury hotel in Macy's building with rooftop terrace overlooking downtown. Walking distance to Providence Park. The bar serves Oregon craft beers—proper pre-match fuel. Timbers Army members stay here when splurging. Portland sophistication meets soccer passion.",
            tags: ["Luxury", "Downtown", "Walking Distance"],
            rating: "4.6",
            distance: "15 min walk to Providence Park",
            icon: "🏨"
          },
          {
            name: "Hotel Eastlund",
            type: "Eastside Modern",
            location: "Lloyd District",
            description: "Modern hotel near Moda Center with rooftop bar. Complimentary bikes to ride to matches—very Portland. The restaurant focuses on local, sustainable ingredients. Close to MAX light rail. This is Portland values in hotel form.",
            tags: ["Modern", "Bikes Included", "Sustainable"],
            rating: "4.5",
            distance: "10 min MAX to Providence Park",
            icon: "🏨"
          },
          {
            name: "Northwest Portland Hostel",
            type: "Budget Hip",
            location: "Pearl District",
            description: "Eco-friendly hostel in trendy Pearl District. Young Timbers Army members gather here before matches. Communal kitchen, bike storage, sustainability focus. Walking distance to Powell's Books and breweries. Budget beds with Portland values.",
            tags: ["Budget", "Eco-Friendly", "Social"],
            rating: "4.4",
            distance: "20 min walk to Providence Park",
            icon: "🏨"
          }
        ]
      },
      pubs: {
        description: "Experience Portland's legendary craft beer scene where hops and soccer passion flow in perfect harmony.",
        items: [
          {
            name: "The Fields Bar & Grill",
            type: "Soccer Central",
            location: "Pearl District",
            description: "Portland's premier soccer bar showing every MLS, Premier League, and Champions League match. Timbers scarves cover the walls. 20+ Oregon craft beers on tap. The scotch eggs are legendary. This is where Timbers Army gathers year-round.",
            tags: ["Soccer Bar", "Craft Beer", "Timbers HQ"],
            rating: "4.7",
            distance: "Pearl District",
            icon: "🍺"
          },
          {
            name: "Deschutes Brewery Portland",
            type: "Brewery Institution",
            location: "Pearl District",
            description: "Bend's legendary brewery's Portland outpost. Fresh Squeezed IPA, Mirror Pond Pale, and seasonal releases flow from 20+ taps. The pub food is elevated comfort. On match days, green-and-gold jerseys pack the bar. Oregon craft beer royalty.",
            tags: ["Brewery", "Oregon Beer", "Food"],
            rating: "4.6",
            distance: "Pearl District",
            icon: "🍺"
          },
          {
            name: "Prost Marketplace",
            type: "German Beer Garden",
            location: "Mississippi District",
            description: "Authentic German beer hall with Portland twist. Liters of German beer, pretzels, sausages, and communal tables. After Timbers wins, the hall erupts in song. The weird German-Portland fusion works perfectly. Only in Portland.",
            tags: ["German Beer", "Beer Garden", "Unique"],
            rating: "4.5",
            distance: "North Portland",
            icon: "🍺"
          }
        ]
      },
      restaurants: {
        description: "From food carts to farm-to-table—Portland's obsessively local cuisine fuels sustainable soccer passion.",
        items: [
          {
            name: "Pok Pok",
            type: "Thai Street Food",
            location: "Division Street",
            description: "Andy Ricker's James Beard-winning Thai restaurant. The fish sauce wings are legendary—people fly to Portland for them. Drinking vinegars, craft cocktails, authentic flavors. After matches, Timbers fans feast here. Portland's most famous restaurant.",
            tags: ["Thai Food", "James Beard", "Wings"],
            rating: "4.7",
            distance: "SE Portland",
            icon: "🍽️"
          },
          {
            name: "Portland Food Cart Pods",
            type: "Street Food",
            location: "Everywhere",
            description: "600+ food carts serving everything—Korean tacos, Ethiopian stews, vegan donuts, lobster rolls. Alder Street pod is largest. Grab lunch from carts before afternoon matches. $5-10 gets incredible food. This is Portland's democratic dining.",
            tags: ["Food Carts", "Diverse", "Budget-Friendly"],
            rating: "4.8",
            distance: "Downtown pods",
            icon: "🍽️"
          },
          {
            name: "Le Pigeon",
            type: "Adventurous Fine Dining",
            location: "East Burnside",
            description: "Chef Gabriel Rucker's adventurous restaurant. Foie gras profiteroles, beef cheek bourguignon, experimental seasonal dishes. After big Timbers victories, players and wealthy fans celebrate here. Expensive, creative, quintessentially Portland.",
            tags: ["Fine Dining", "Creative", "Reservation Required"],
            rating: "4.7",
            distance: "East Burnside",
            icon: "🍽️"
          }
        ]
      },
      attractions: {
        description: "Experience Timbers Army culture and the green, weird, wonderful city that makes Portland unique.",
        items: [
          {
            name: "Providence Park Match Experience",
            type: "Stadium Culture",
            description: "Intimate 25,000-seat stadium in downtown Portland. The North End houses Timbers Army—2,000 standing supporters singing 90 minutes. Timber Joey chainsaws a slab after every goal. The atmosphere is MLS's loudest. This is American soccer culture at its finest.",
            tags: ["Stadium Experience", "Timbers Army", "Must-Do"],
            rating: "4.9",
            icon: "🏟️"
          },
          {
            name: "Powell's City of Books",
            type: "Bookstore Icon",
            description: "World's largest independent bookstore occupying entire city block. New and used books in color-coded rooms. You'll get lost. You'll love it. On match days, browse before kickoff. Very Portland—reading and soccer both matter here.",
            tags: ["Bookstore", "Icon", "Downtown"],
            rating: "4.8",
            icon: "📚"
          },
          {
            name: "Washington Park & Japanese Garden",
            type: "Nature & Culture",
            description: "Forest park overlooking downtown with rose gardens, Japanese garden, and trails. Portland's green soul on display. After intense Timbers matches, decompress in nature. The juxtaposition of urban soccer and forest tranquility is peak Portland.",
            tags: ["Park", "Japanese Garden", "Views"],
            rating: "4.9",
            icon: "🌲"
          }
        ]
      },
      tips: {
        description: "Master Portland's quirks and you'll chant 'PTFC!' like you've been riding bikes here forever.",
        items: [
          {
            icon: "🪵",
            title: "Timber Joey is Religion",
            content: "After every Timbers goal, Timber Joey chainsaws a slab from a log and presents it to a player. This tradition is sacred. The chainsaw roar signals ecstasy. The slab smells like fresh-cut pine. Only in Portland."
          },
          {
            icon: "🚴",
            title: "Bike Everywhere",
            content: "Portland has 350+ miles of bike lanes. Locals bike to matches—bike parking at Providence Park is huge. Rent a Biketown bike-share. Don't drive. Biking is faster, cheaper, more Portland. Embrace it or fight traffic miserably."
          },
          {
            icon: "🚈",
            title: "MAX Light Rail to Matches",
            content: "Take MAX light rail Blue or Red lines to Providence Park station—exits right at the stadium. Trains fill with Timbers Army creating mobile celebrations. TriMet day pass is $5. Driving is nightmare. Public transit is the way."
          },
          {
            icon: "☕",
            title: "Coffee is Serious Business",
            content: "Portland coffee rivals Seattle. Stumptown, Coava, Heart roasters are world-class. Order single-origin pour-over. Never say 'Starbucks is fine.' Coffee culture here is sophisticated, obsessive, delicious. Respect it."
          },
          {
            icon: "♻️",
            title: "Sustainability Isn't Optional",
            content: "Portland recycles/composts everything. Bring reusable cup/bag. Timbers are the greenest team in MLS. The stadium composts 85% of waste. This isn't virtue signaling—it's culture. Participate or expect judgment."
          },
          {
            icon: "⚽",
            title: "The Sounders Rivalry is War",
            content: "Portland vs Seattle is Cascadia's fiercest rivalry. Geography, culture, history collide. Sounders fans mock Portland's weirdness. Timbers fans mock Seattle's tech bro-ness. Never praise Seattle in Portland. This hatred is real, fun, eternal."
          }
        ]
      }
    },
    cta: {
      title: "Ready to Join the Timbers Army?",
      subtitle: "Experience Providence Park and discover where green means passion.",
      buttonText: "Plan Your Portland Journey"
    }
  },

  melbourne: {
    meta: {
      title: "Melbourne AFL Fan Guide - MCG, Footy Culture & 9 Teams | FANTOWNS",
      description: "Ultimate Melbourne AFL fan travel guide. Experience the MCG, discover Australian Rules Football culture, and insider tips for the world's most sports-obsessed city.",
      keywords: "Melbourne AFL travel, MCG, Australian Rules Football, Melbourne footy culture, Collingwood, Richmond, sports capital"
    },
    theme: {
      primary: "#000000",
      secondary: "#FFFFFF",
      tagBg: "#f5f5f5",
      tagColor: "#333",
      heroBg: "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 600\"><rect fill=\"%23000000\" width=\"1200\" height=\"600\"/></svg>')"
    },
    hero: {
      title: "Melbourne 🇦🇺",
      subtitle: "Where 9 Teams Battle for Footy Glory",
      stats: [
        { number: "9", label: "AFL Teams" },
        { number: "100,000", label: "MCG Capacity" },
        { number: "1853", label: "First Match" }
      ]
    },
    sections: {
      hotels: {
        description: "Stay in Melbourne where coffee, culture, and Australian Rules Football create the world's most liveable sports city.",
        items: [
          {
            name: "The Langham Melbourne",
            type: "Luxury Southbank",
            location: "Southbank",
            description: "Five-star elegance on the Yarra River with MCG views. AFL executives and players' families stay here during Grand Final week. The spa is perfect for post-match recovery. Walking distance to MCG across the river. Melbourne sophistication meets footy royalty.",
            tags: ["Luxury", "River Views", "Walking to MCG"],
            rating: "4.7",
            distance: "15 min walk to MCG",
            icon: "🏨"
          },
          {
            name: "Pullman Melbourne on the Park",
            type: "MCG Adjacent",
            location: "East Melbourne",
            description: "Modern hotel overlooking MCG and Melbourne Park. Balcony rooms watch 100,000 fans flood into the 'G on match days. The rooftop pool has stadium views. This is the closest hotel to footy heaven. Walk to matches in minutes.",
            tags: ["MCG Views", "Modern", "Stadium Adjacent"],
            rating: "4.5",
            distance: "5 min walk to MCG",
            icon: "🏨"
          },
          {
            name: "Space Hotel",
            type: "Budget CBD",
            location: "CBD",
            description: "Pod hotel in Melbourne's central business district. Young footy fans stay here cheap. Rooftop bar, communal vibe, walking distance to everything. Tram to MCG takes 10 minutes. Budget beds in Australia's coolest city.",
            tags: ["Budget", "Central", "Social"],
            rating: "4.3",
            distance: "10 min tram to MCG",
            icon: "🏨"
          }
        ]
      },
      pubs: {
        description: "Experience Melbourne's pub culture where VB flows, meat pies disappear, and footy debates rage eternal.",
        items: [
          {
            name: "The Colonial Hotel",
            type: "Footy Temple",
            location: "Fitzroy",
            description: "Since 1854, this iconic pub has hosted AFL fans through 170 seasons. Multiple levels, dozens of screens, every AFL match shown. Collingwood fans' unofficial headquarters. The parmas (chicken parmigiana) are legendary. This is Melbourne footy culture concentrated.",
            tags: ["Historic Pub", "Footy Central", "Parmas"],
            rating: "4.6",
            distance: "Fitzroy",
            icon: "🍺"
          },
          {
            name: "Young & Jackson",
            type: "Melbourne Icon",
            location: "CBD",
            description: "Since 1861, this corner pub overlooks Flinders Street Station. Chloe's Bar features the famous nude painting. On AFL match days, the pub erupts in team colors. Richmond, Carlton, Collingwood fans mix and argue. This is Melbourne's beating heart.",
            tags: ["Historic", "CBD Location", "Icon"],
            rating: "4.5",
            distance: "City Center",
            icon: "🍺"
          },
          {
            name: "The Sporting Globe Bar & Grill",
            type: "Sports Bar Chain",
            location: "Multiple Locations",
            description: "Melbourne's premier sports bar chain with massive screens showing every AFL, NRL, and cricket match. American-style wings meet Australian parmas. After big footy wins, the bars erupt. This is where Melbourne watches sports obsessively.",
            tags: ["Sports Bar", "Multiple Locations", "Big Screens"],
            rating: "4.4",
            distance: "Multiple locations",
            icon: "🍺"
          }
        ]
      },
      restaurants: {
        description: "From flat whites to modern Australian cuisine—Melbourne's food scene rivals its footy obsession.",
        items: [
          {
            name: "Attica",
            type: "World-Class Fine Dining",
            location: "Ripponlea",
            description: "Ben Shewry's restaurant ranked in World's 50 Best. Native Australian ingredients transformed into art. Kangaroo, emu, wattleseed in innovative dishes. After Grand Final victories, AFL's elite celebrate here. Expensive, unforgettable, uniquely Australian.",
            tags: ["Fine Dining", "World-Class", "Native Ingredients"],
            rating: "4.9",
            distance: "Ripponlea",
            icon: "🍽️"
          },
          {
            name: "Hardware Société",
            type: "Breakfast Institution",
            location: "CBD",
            description: "Melbourne's most famous breakfast spot serves French-Australian fusion. The ricotta hotcakes are religion. Flat whites are perfection. Before Sunday afternoon footy matches, fuel up here. Lines wrap around the block. Worth the wait.",
            tags: ["Breakfast", "French-Australian", "Famous"],
            rating: "4.7",
            distance: "CBD",
            icon: "🍽️"
          },
          {
            name: "Footy Match Pie Stand",
            type: "Stadium Food",
            location: "MCG",
            description: "Meat pies at the MCG are mandatory. Four'n'Twenty pies with tomato sauce—Australia's fast food. Grab one before the first bounce. This isn't gourmet. This is tradition. Eating pies while watching footy is peak Melbourne.",
            tags: ["Meat Pies", "Stadium Food", "Tradition"],
            rating: "4.5",
            distance: "MCG",
            icon: "🥧"
          }
        ]
      },
      attractions: {
        description: "Experience AFL culture and the art, coffee, and sport that make Melbourne the world's most liveable city.",
        items: [
          {
            name: "MCG Tour & Australian Sports Museum",
            type: "Sports Cathedral",
            description: "The Melbourne Cricket Ground hosted the 1956 Olympics and 170+ AFL Grand Finals. Walk the hallowed turf. See the Long Room. The Sports Museum displays footy legends. This isn't just a stadium—it's Australia's sporting soul. The 'G is sacred ground.",
            tags: ["Stadium Tour", "Sports Museum", "Must-Do"],
            rating: "4.9",
            icon: "🏟️"
          },
          {
            name: "Federation Square & Laneway Cafés",
            type: "Melbourne Culture",
            description: "Fed Square is Melbourne's meeting point. ACMI museum, restaurants, big screens show footy on match days. The surrounding laneways hide world-class coffee shops. Degraves Street, Centre Place—this is where Melbourne lives. Coffee, art, sport, repeat.",
            tags: ["Cultural Hub", "Coffee Culture", "Laneways"],
            rating: "4.7",
            icon: "☕"
          },
          {
            name: "Great Ocean Road",
            type: "Coastal Drive",
            description: "World's most scenic coastal drive, 90 minutes from Melbourne. Twelve Apostles rock formations rise from the Southern Ocean. After intense footy weekends, escape to nature. The juxtaposition of urban sport and coastal beauty is peak Melbourne living.",
            tags: ["Day Trip", "Scenic Drive", "Natural Wonder"],
            rating: "4.9",
            icon: "🌊"
          }
        ]
      },
      tips: {
        description: "Master Melbourne's footy culture and you'll barrack like you've been born at the MCG.",
        items: [
          {
            icon: "🏈",
            title: "It's Footy, Not Football",
            content: "Australian Rules Football is 'footy' or 'AFL.' Never call it soccer (that's a different sport). The oval ball, high marks, and 18-a-side chaos is uniquely Australian. Learn the rules or you'll be lost. This sport is religion here."
          },
          {
            icon: "🎨",
            title: "Choose Your Team Carefully",
            content: "Melbourne has 9 AFL teams—Collingwood, Richmond, Carlton, Essendon, Melbourne, Western Bulldogs, North Melbourne, Hawthorn, St Kilda. Choosing one is serious. Ask locals. Rivalries run deep, generational, passionate. Pick wisely."
          },
          {
            icon: "🚊",
            title: "Tram to the MCG",
            content: "Take tram routes 48, 75, or 70 to Jolimont Station stop—right at MCG gates. Melbourne's tram network is free in CBD. Trams fill with fans in team colors creating mobile celebrations. Driving is nightmare. Trams are the way."
          },
          {
            icon: "☕",
            title: "Coffee Culture is Obsessive",
            content: "Melbourne coffee is world-class. Order a flat white (strong espresso, microfoam milk). Never ask for 'large, medium, small'—that's Starbucks talk. Baristas are artists. Respect the craft. This city runs on coffee and footy."
          },
          {
            icon: "🥧",
            title: "Meat Pies are Sacred",
            content: "Four'n'Twenty meat pies with tomato sauce at the footy is tradition. Eat it standing. The pie will be scalding. The pastry will flake everywhere. This is Australia. Embrace the chaos."
          },
          {
            icon: "🏆",
            title: "Grand Final is Religion",
            content: "AFL Grand Final (last Saturday in September) is Melbourne's biggest day. 100,000 at MCG, millions watching nationwide. If you're here then, tickets are impossible. Watch in pubs. The entire city stops. This is Australia's Super Bowl times ten."
          }
        ]
      }
    },
    cta: {
      title: "Ready to Experience Australian Footy Obsession?",
      subtitle: "Discover the MCG and the unique sport that makes Melbourne legendary.",
      buttonText: "Plan Your Melbourne Journey"
    }
  },

  athens: {
    meta: {
      title: "Athens Football Fan Guide - Derby of Eternal Enemies, Gate 7 & Greek Passion | FANTOWNS",
      description: "Ultimate Athens football fan travel guide. Experience the Derby of Eternal Enemies, discover Olympiacos and Panathinaikos passion, and insider tips for Greece's football capital.",
      keywords: "Athens football travel, Olympiacos, Panathinaikos, Gate 7, Greek football culture, Derby of Eternal Enemies, Super League Greece"
    },
    theme: {
      primary: "#DC0714",
      secondary: "#009A44",
      tagBg: "#ffebee",
      tagColor: "#c62828",
      heroBg: "linear-gradient(rgba(220, 7, 20, 0.9), rgba(220, 7, 20, 0.9)), url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 600\"><rect fill=\"%23DC0714\" width=\"1200\" height=\"600\"/></svg>')"
    },
    hero: {
      title: "Athens 🇬🇷",
      subtitle: "Where Ancient Gods Meet Modern Ultras",
      stats: [
        { number: "47", label: "Olympiacos Titles" },
        { number: "33,000", label: "Karaiskakis Capacity" },
        { number: "1925", label: "Founded" }
      ]
    },
    sections: {
      hotels: {
        description: "Stay in Athens where ancient history meets modern football passion and Mediterranean culture burns.",
        items: [
          {
            name: "Hotel Grande Bretagne",
            type: "Luxury Historic",
            location: "Syntagma Square",
            description: "Since 1874, this palatial hotel overlooks the Greek Parliament and Acropolis. Football executives and wealthy supporters stay here before derbies. The rooftop restaurant serves views of the Parthenon. Greek elegance meets football passion.",
            tags: ["Luxury", "Historic", "Acropolis Views"],
            rating: "4.8",
            distance: "20 min to Karaiskakis",
            icon: "🏨"
          },
          {
            name: "Athenaeum InterContinental",
            type: "Modern Comfort",
            location: "Near Olympic Stadium",
            description: "Business hotel near Athens Olympic Stadium with rooftop pool. During big matches, the bar fills with both Olympiacos and Panathinaikos fans—tense but civilized. Metro access to both stadiums. Modern Athens meeting football tradition.",
            tags: ["Modern", "Pool", "Metro Access"],
            rating: "4.6",
            distance: "Metro to stadiums",
            icon: "🏨"
          },
          {
            name: "Athens Backpackers",
            type: "Budget Plaka",
            location: "Plaka",
            description: "Hostel in ancient Plaka neighborhood below the Acropolis. Young football fans gather on the rooftop terrace. Walking distance to Monastiraki nightlife. Metro to Piraeus for Olympiacos matches. Budget beds with Parthenon views.",
            tags: ["Budget", "Plaka", "Social"],
            rating: "4.4",
            distance: "Metro to Karaiskakis",
            icon: "🏨"
          }
        ]
      },
      pubs: {
        description: "Experience Athens' tavernas and bars where ouzo flows, souvlaki grills, and football passion ignites.",
        items: [
          {
            name: "Gate 7 Café Bar",
            type: "Olympiacos Temple",
            location: "Piraeus",
            description: "Named after Olympiacos' famous ultras group Gate 7. Red-and-white scarves cover every surface. Before home matches, thousands of Olympiacos fans gather here. Ouzo, beer, and football songs. This isn't a bar—it's a pilgrimage site. Panathinaikos fans enter at own risk.",
            tags: ["Olympiacos Bar", "Ultras Spot", "Pre-Game Hub"],
            rating: "4.7",
            distance: "Piraeus",
            icon: "🍺"
          },
          {
            name: "Brettos Bar",
            type: "Historic Distillery",
            location: "Plaka",
            description: "Since 1909, this distillery-bar serves homemade ouzo and colorful liqueurs in historic Plaka. Walls lined with bottles glowing like stained glass. On derby nights, fans gather before heading to stadiums. Traditional Greece meets modern football passion.",
            tags: ["Historic", "Ouzo", "Plaka"],
            rating: "4.6",
            distance: "Plaka",
            icon: "🍺"
          },
          {
            name: "Baba Au Rum",
            type: "Cocktail Bar",
            location: "Psyrri",
            description: "Athens' best cocktail bar in hip Psyrri neighborhood. After big victories, young Athenians celebrate here with creative drinks. The rum collection is world-class. Modern Athens celebrating football success with global sophistication.",
            tags: ["Cocktails", "Modern", "Psyrri"],
            rating: "4.7",
            distance: "Psyrri",
            icon: "🍸"
          }
        ]
      },
      restaurants: {
        description: "From souvlaki to seafood—Greek cuisine fuels the Mediterranean passion that defines Athens football.",
        items: [
          {
            name: "Varoulko Seaside",
            type: "Michelin Seafood",
            location: "Piraeus",
            description: "Michelin-starred seafood restaurant in Piraeus overlooking the harbor. Chef Lefteris Lazarou transforms Greek fish into art. After Olympiacos victories, wealthy fans celebrate here. Fresh octopus, sea bass, and champagne. This is Greek football royalty dining.",
            tags: ["Michelin Star", "Seafood", "Piraeus"],
            rating: "4.8",
            distance: "Piraeus",
            icon: "🍽️"
          },
          {
            name: "O Thanasis",
            type: "Souvlaki Institution",
            location: "Monastiraki",
            description: "Since 1964, this grill house serves Athens' best souvlaki and kebabs. Monastiraki Square location is always packed. Before matches, fans fuel up on grilled meats and pita. LE 5 fills you completely. This is Greek fast food perfection.",
            tags: ["Souvlaki", "Budget", "Monastiraki"],
            rating: "4.6",
            distance: "Monastiraki",
            icon: "🍽️"
          },
          {
            name: "Taverna Klimataria",
            type: "Traditional Greek",
            location: "Psyrri",
            description: "Family taverna since 1927 serving classic Greek cuisine. Moussaka, lamb kleftiko, Greek salad with real feta. Live music some nights. After derby matches, fans gather here celebrating or commiserating. This is Athens' soul on a plate.",
            tags: ["Traditional", "Family Taverna", "Live Music"],
            rating: "4.7",
            distance: "Psyrri",
            icon: "🍽️"
          }
        ]
      },
      attractions: {
        description: "Experience Greek football passion and the ancient wonders that make Athens the cradle of civilization.",
        items: [
          {
            name: "Karaiskakis Stadium Experience",
            type: "Football Theatre",
            description: "Olympiacos' fortress in Piraeus. Gate 7 ultras create inferno of red flares, drums, and choreography. The atmosphere is intense, Mediterranean, deafening. This is Greek football passion at its peak. Arrive early, absorb the chaos, understand why this rivalry burns.",
            tags: ["Stadium Experience", "Gate 7", "Ultras Culture"],
            rating: "4.8",
            icon: "🏟️"
          },
          {
            name: "Acropolis & Parthenon",
            type: "Ancient Wonder",
            description: "2,500-year-old citadel overlooking Athens. The Parthenon represents Western civilization's birth. After experiencing modern Greek football passion, visit ancient Greek glory. Some things transcend sport. This is one. The view at sunset is divine.",
            tags: ["Ancient Wonder", "UNESCO Site", "Essential"],
            rating: "4.9",
            icon: "🏛️"
          },
          {
            name: "Plaka & Monastiraki",
            type: "Historic Neighborhoods",
            description: "Ancient neighborhoods below the Acropolis with tavernas, shops, and street life. On derby days, fans flood Monastiraki Square before splitting—red to Piraeus, green to northern suburbs. This is where ancient Athens meets modern football chaos.",
            tags: ["Historic District", "Nightlife", "Markets"],
            rating: "4.7",
            icon: "🏺"
          }
        ]
      },
      tips: {
        description: "Navigate Athens' football passion and ancient chaos, and you'll chant like you were born in Piraeus.",
        items: [
          {
            icon: "🔴🟢",
            title: "The Derby of Eternal Enemies",
            content: "Olympiacos (red, working-class Piraeus) vs Panathinaikos (green, wealthy Athens) is Greece's most intense rivalry. Class warfare, geography, history collide. This isn't banter—it's identity. Choose sides carefully. Never praise the enemy. This hatred is ancient."
          },
          {
            icon: "🔥",
            title: "Gate 7 is Legendary",
            content: "Olympiacos' Gate 7 ultras are among Europe's most intense. Red flares, coordinated chants, massive choreographies. They're passionate, not violent, but respect the intensity. Never sit in their section wearing green. This is serious football culture."
          },
          {
            icon: "🚇",
            title: "Metro to Piraeus",
            content: "Take Metro Line 1 (green line) to Piraeus for Olympiacos matches at Karaiskakis. For Panathinaikos, take Line 3 to Neratziotissa for OAKA stadium. Trains fill with fans creating mobile celebrations. Athens metro is clean, efficient, safe."
          },
          {
            icon: "🍺",
            title: "Ouzo Protocol",
            content: "Order ouzo (anise liquor) with mezze (small plates). Add water—it turns cloudy white. Sip slowly with grilled octopus or feta. Greeks drink ouzo for hours before matches. Rushing it marks you as tourist. Savor it like locals."
          },
          {
            icon: "🏺",
            title: "Respect Ancient and Modern",
            content: "Athens balances 2,500 years of history with modern passion. Visit the Acropolis before the match. The same intensity that built the Parthenon fuels Gate 7. Greeks invented democracy and ultras culture. Both are sacred here."
          },
          {
            icon: "💶",
            title: "Cash for Everything",
            content: "Bring euros cash. Many tavernas don't take cards. Souvlaki costs €2-3. Beer €3-5. Stadium tickets €15-50. Budget €50/day for food, transport, entertainment. ATMs exist but charge fees. Greeks love cash."
          }
        ]
      }
    },
    cta: {
      title: "Ready to Experience Greek Football Passion?",
      subtitle: "Witness the Derby of Eternal Enemies where ancient meets ultras.",
      buttonText: "Plan Your Athens Journey"
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
