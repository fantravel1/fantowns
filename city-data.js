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
