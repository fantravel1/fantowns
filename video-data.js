// FANTOWNS Video Library
// Curated YouTube videos showcasing authentic fan experiences

const VIDEOS = [
  // LIVERPOOL
  {
    id: 'liv-ynwa',
    youtubeId: 'Go-jJlGd1so',
    title: "You'll Never Walk Alone - Anfield Atmosphere",
    description: "54,000 Liverpool fans singing You'll Never Walk Alone in perfect unison at Anfield. The noise creates such powerful vibrations that seismologists have recorded tremors. This is what football fandom sounds like at its purest.",
    city: "Liverpool",
    relatedCity: "liverpool",
    category: 'chants',
    duration: '4:23',
    views: '18M views',
    tags: ['Liverpool', 'Anfield', 'YNWA', 'Atmosphere']
  },
  {
    id: 'liv-tour',
    youtubeId: 'fV1gdTv2T0U',
    title: "Inside Anfield Stadium Tour - Liverpool FC",
    description: "Complete guided tour of Anfield Stadium including the Kop, player tunnel, trophy room, and press conference area. Walk where legends played and see the history of one of football's most iconic grounds.",
    city: "Liverpool",
    relatedCity: "liverpool",
    category: 'stadium-tours',
    duration: '15:42',
    views: '2.3M views',
    tags: ['Liverpool', 'Anfield', 'Stadium Tour', 'LFC']
  },

  // DORTMUND
  {
    id: 'dor-yellow-wall',
    youtubeId: 'ZLoyFdBIVJw',
    title: "Dortmund Yellow Wall - 25,000 Fans Bouncing",
    description: "The famous Südtribüne (Yellow Wall) at Signal Iduna Park with 25,000 standing fans creating the most intense atmosphere in world football. Watch as the entire stand bounces in unison, making the stadium literally sway.",
    city: "Dortmund",
    relatedCity: "dortmund",
    category: 'atmosphere',
    duration: '6:15',
    views: '12M views',
    tags: ['Dortmund', 'Yellow Wall', 'BVB', 'Bundesliga']
  },
  {
    id: 'dor-fan-culture',
    youtubeId: 'pGsRGLHQWls',
    title: "Borussia Dortmund Fan Culture Explained",
    description: "Deep dive into what makes BVB fans special - the tifos, the songs, the passion. Learn why Dortmund has the highest average attendance in Europe and how the club maintains its working-class roots.",
    city: "Dortmund",
    relatedCity: "dortmund",
    category: 'culture',
    duration: '12:30',
    views: '850K views',
    tags: ['Dortmund', 'Fan Culture', 'BVB', 'Ultras']
  },

  // BUENOS AIRES
  {
    id: 'ba-bombonera',
    youtubeId: 'xRBZGd73SkE',
    title: "La Bombonera Shakes - Boca Juniors Atmosphere",
    description: "Experience La Bombonera (The Chocolate Box) when Boca Juniors scores. The stadium literally vibrates and shakes - you can feel it in the camera footage. This is Argentine football passion at maximum intensity.",
    city: "Buenos Aires",
    relatedCity: "buenosaires",
    category: 'atmosphere',
    duration: '8:47',
    views: '9.4M views',
    tags: ['Buenos Aires', 'Boca Juniors', 'La Bombonera', 'Argentina']
  },
  {
    id: 'ba-superclasico',
    youtubeId: 'sxZ2Bwqx8wE',
    title: "Superclásico: Boca vs River Plate - The World's Fiercest Derby",
    description: "Inside the Superclásico, the rivalry between Boca Juniors and River Plate. Flares, drums, and 90 minutes of non-stop singing. This is why it's called the most intense derby in world football.",
    city: "Buenos Aires",
    relatedCity: "buenosaires",
    category: 'fan-reactions',
    duration: '14:22',
    views: '5.2M views',
    tags: ['Buenos Aires', 'Superclásico', 'Boca', 'River Plate']
  },

  // TOKYO
  {
    id: 'tok-comiket',
    youtubeId: 'rp7FADPyBEg',
    title: "Inside Comiket - World's Largest Anime Convention",
    description: "Walk through Comiket (Comic Market) in Tokyo with 750,000 attendees. See the incredible cosplay, doujinshi stalls, and pure otaku culture. This twice-yearly event is the Super Bowl of anime fandom.",
    city: "Tokyo",
    relatedCity: "tokyo",
    category: 'culture',
    duration: '16:55',
    views: '3.8M views',
    tags: ['Tokyo', 'Comiket', 'Anime', 'Cosplay']
  },
  {
    id: 'tok-akihabara',
    youtubeId: 'kf_jgKy5h60',
    title: "Akihabara Electric Town Tour - Anime Paradise",
    description: "Complete walking tour of Akihabara's 8-story anime buildings, maid cafes, and gaming centers. This is the epicenter of otaku culture - from retro gaming to latest anime figures.",
    city: "Tokyo",
    relatedCity: "tokyo",
    category: 'city-guides',
    duration: '22:18',
    views: '2.1M views',
    tags: ['Tokyo', 'Akihabara', 'Anime', 'Shopping']
  },

  // GREEN BAY
  {
    id: 'gb-lambeau',
    youtubeId: '0iqLhdInGrk',
    title: "Lambeau Field Frozen Tundra Experience",
    description: "Game day at Lambeau Field in -15°F weather. Watch fans tailgating in blizzards, grilling brats in snow, and creating the most hardcore football atmosphere in the NFL. This is Packers fandom.",
    city: "Green Bay",
    relatedCity: "greenbay",
    category: 'atmosphere',
    duration: '11:33',
    views: '1.9M views',
    tags: ['Green Bay', 'Lambeau Field', 'NFL', 'Packers']
  },
  {
    id: 'gb-tour',
    youtubeId: 'xHs7k3lHW4c',
    title: "Lambeau Field Stadium Tour - Packers Hall of Fame",
    description: "Tour the legendary Lambeau Field including the Packers Hall of Fame, locker rooms, and field. Learn about the Ice Bowl, Titletown, and why Green Bay is the smallest market in pro sports.",
    city: "Green Bay",
    relatedCity: "greenbay",
    category: 'stadium-tours',
    duration: '18:45',
    views: '680K views',
    tags: ['Green Bay', 'Lambeau', 'NFL', 'Tour']
  },

  // MANCHESTER
  {
    id: 'man-derby',
    youtubeId: 'wEeIIKiZiHo',
    title: "Manchester Derby Atmosphere - City vs United",
    description: "Inside the Manchester Derby at Etihad Stadium. The blue side of Manchester vs the red - two sets of fans separated by hatred and a shared city. This rivalry defines English football.",
    city: "Manchester",
    relatedCity: "manchester",
    category: 'atmosphere',
    duration: '9:28',
    views: '4.7M views',
    tags: ['Manchester', 'Derby', 'City', 'United']
  },
  {
    id: 'man-food',
    youtubeId: 'j1ldZj9kShg',
    title: "Manchester Food Tour - Where Football Fans Eat",
    description: "Explore Manchester's food scene from curry mile to Northern Quarter cafes. Visit the pubs where United and City fans drink (separately). This is Manchester beyond the football.",
    city: "Manchester",
    relatedCity: "manchester",
    category: 'food-drink',
    duration: '13:17',
    views: '920K views',
    tags: ['Manchester', 'Food', 'Pubs', 'Culture']
  },

  // BARCELONA
  {
    id: 'bar-camp-nou',
    youtubeId: 'FqPLNjvh4nQ',
    title: "Camp Nou Experience - Barcelona Stadium Tour",
    description: "Walk through Camp Nou, Europe's largest football stadium. See the trophy room with 5 Champions League trophies, the tunnel, and the pitch where Messi magic happened. Més que un club.",
    city: "Barcelona",
    relatedCity: "barcelona",
    category: 'stadium-tours',
    duration: '17:05',
    views: '3.2M views',
    tags: ['Barcelona', 'Camp Nou', 'Stadium', 'La Liga']
  },
  {
    id: 'bar-classico',
    youtubeId: 'hKG3gzJ8X7Y',
    title: "El Clásico Experience - Barcelona vs Real Madrid",
    description: "Experience El Clásico from the stands. More than a football match - it's Catalonia vs Castilla, independence vs centralism, centuries of rivalry condensed into 90 minutes of intensity.",
    city: "Barcelona",
    relatedCity: "barcelona",
    category: 'fan-reactions',
    duration: '12:41',
    views: '6.8M views',
    tags: ['Barcelona', 'El Clásico', 'Real Madrid', 'Rivalry']
  },

  // ISTANBUL
  {
    id: 'ist-derby',
    youtubeId: '80cfdN96pWw',
    title: "Istanbul Derby - Galatasaray vs Fenerbahçe Chaos",
    description: "The Intercontinental Derby splits Istanbul in half. Watch as 50,000 fans create a wall of noise, flares light up the night, and the Bosphorus rivalry burns. This is Turkish football passion.",
    city: "Istanbul",
    relatedCity: "istanbul",
    category: 'atmosphere',
    duration: '10:52',
    views: '7.1M views',
    tags: ['Istanbul', 'Galatasaray', 'Fenerbahçe', 'Derby']
  },
  {
    id: 'ist-food',
    youtubeId: 'vNDiSZhoZGw',
    title: "Istanbul Street Food Tour - What Football Fans Eat",
    description: "Explore Istanbul's incredible street food scene - from simit to kebabs to balik ekmek. Visit the cafes and restaurants where Galatasaray, Fenerbahçe, and Beşiktaş fans gather before derbies.",
    city: "Istanbul",
    relatedCity: "istanbul",
    category: 'food-drink',
    duration: '15:30',
    views: '2.4M views',
    tags: ['Istanbul', 'Food', 'Street Food', 'Culture']
  },

  // NASHVILLE
  {
    id: 'nash-broadway',
    youtubeId: 'rHdvnyUhw1w',
    title: "Nashville Broadway Honky Tonk Crawl",
    description: "Walk down Broadway in Nashville where every bar has live music pouring out the doors. From Tootsie's to Robert's to The Stage - this is music city at its loudest and most authentic.",
    city: "Nashville",
    relatedCity: "nashville",
    category: 'city-guides',
    duration: '19:22',
    views: '1.7M views',
    tags: ['Nashville', 'Broadway', 'Honky Tonks', 'Music']
  },
  {
    id: 'nash-opry',
    youtubeId: 'W2HjXCw4jO0',
    title: "Grand Ole Opry Experience - Country Music's Mother Church",
    description: "Inside the Grand Ole Opry, the most famous stage in country music. See where legends were made and modern stars perform. This 95-year-old tradition is Nashville's beating heart.",
    city: "Nashville",
    relatedCity: "nashville",
    category: 'culture',
    duration: '14:08',
    views: '890K views',
    tags: ['Nashville', 'Grand Ole Opry', 'Country Music', 'Live Music']
  },

  // GLASGOW
  {
    id: 'gla-old-firm',
    youtubeId: 'q0yRgX4b2uo',
    title: "Old Firm Derby - Celtic vs Rangers Explained",
    description: "The Old Firm: 130+ years of rivalry rooted in religion, politics, and Scottish identity. Celtic (Catholic, Irish) vs Rangers (Protestant, Unionist). This isn't just football - it's tribal warfare.",
    city: "Glasgow",
    relatedCity: "glasgow",
    category: 'culture',
    duration: '16:47',
    views: '3.9M views',
    tags: ['Glasgow', 'Old Firm', 'Celtic', 'Rangers']
  },
  {
    id: 'gla-atmosphere',
    youtubeId: 'fODC2v1GNa8',
    title: "Celtic Park Atmosphere - Paradise Roars",
    description: "Experience Celtic Park (Paradise) on European night. 60,000 fans singing 'You'll Never Walk Alone' before kickoff, creating one of football's most intense atmospheres. This is Scottish football passion.",
    city: "Glasgow",
    relatedCity: "glasgow",
    category: 'atmosphere',
    duration: '8:35',
    views: '2.6M views',
    tags: ['Glasgow', 'Celtic Park', 'Atmosphere', 'Champions League']
  },

  // SÃO PAULO
  {
    id: 'sp-derby',
    youtubeId: '5VQv6W7smC8',
    title: "Paulistão Derby - Corinthians vs Palmeiras",
    description: "The Derby Paulista featuring Corinthians and Palmeiras. Witness Brazilian football passion - drums, flags, flares, and 90 minutes of non-stop samba rhythms. This is football the Brazilian way.",
    city: "São Paulo",
    relatedCity: "saopaulo",
    category: 'atmosphere',
    duration: '11:19',
    views: '4.3M views',
    tags: ['São Paulo', 'Corinthians', 'Palmeiras', 'Derby']
  },

  // SEATTLE
  {
    id: 'sea-12th-man',
    youtubeId: 'vBhx3aqhEFY',
    title: "Seattle 12th Man - Loudest Stadium in Sports",
    description: "Experience Lumen Field where the 12th Man set the world record at 137.6 decibels. Watch as 70,000 Seahawks fans create noise so loud it registers on seismographs. Beast Quake energy.",
    city: "Seattle",
    relatedCity: "seattle",
    category: 'fan-reactions',
    duration: '7:52',
    views: '2.8M views',
    tags: ['Seattle', 'Seahawks', '12th Man', 'NFL']
  },

  // MUNICH
  {
    id: 'mun-allianz',
    youtubeId: 'i6bsQfwuJ3A',
    title: "Allianz Arena Tour - Bayern Munich Stadium",
    description: "Tour the incredible Allianz Arena with its color-changing facade. See Bayern's trophy room with 32 Bundesliga titles and 6 Champions League trophies. This is German football excellence.",
    city: "Munich",
    relatedCity: "munich",
    category: 'stadium-tours',
    duration: '14:27',
    views: '1.5M views',
    tags: ['Munich', 'Bayern', 'Allianz Arena', 'Stadium']
  },
  {
    id: 'mun-oktoberfest',
    youtubeId: 'zXqGxqUz0Tg',
    title: "Munich Oktoberfest - Beer, Bayern, and Bavarian Culture",
    description: "Experience Oktoberfest in Munich where beer halls fill with Bayern fans singing 'Stern des Südens.' This is where football culture meets Bavarian tradition in massive beer tents.",
    city: "Munich",
    relatedCity: "munich",
    category: 'food-drink',
    duration: '18:33',
    views: '3.4M views',
    tags: ['Munich', 'Oktoberfest', 'Beer', 'Culture']
  },

  // MADRID
  {
    id: 'mad-bernabeu',
    youtubeId: 'pRxp1kBKJPs',
    title: "Santiago Bernabéu Tour - Real Madrid Glory",
    description: "Walk through the legendary Bernabéu stadium. See the trophy room with 14 European Cups - more than any club in history. Touch the pitch where Galácticos became legends.",
    city: "Madrid",
    relatedCity: "madrid",
    category: 'stadium-tours',
    duration: '16:18',
    views: '2.9M views',
    tags: ['Madrid', 'Real Madrid', 'Bernabéu', 'Champions League']
  },
  {
    id: 'mad-tapas',
    youtubeId: 'LxoxBJZvJMo',
    title: "Madrid Tapas Tour - Where Real Madrid Fans Eat",
    description: "Tour Madrid's best tapas bars from Mercado de San Miguel to hidden gems in La Latina. Learn how Madridistas fuel up before heading to the Bernabéu. Jamón, wine, and football.",
    city: "Madrid",
    relatedCity: "madrid",
    category: 'food-drink',
    duration: '13:44',
    views: '1.8M views',
    tags: ['Madrid', 'Tapas', 'Food', 'Spanish Cuisine']
  },

  // NEW ORLEANS
  {
    id: 'no-superdome',
    youtubeId: 'kA9HTpjB-RM',
    title: "New Orleans Superdome - Who Dat Nation",
    description: "Experience the Superdome where the Saints won the Super Bowl in 2010, healing a city broken by Katrina. Hear the Who Dat chant echo through the dome. This is resilience through football.",
    city: "New Orleans",
    relatedCity: "neworleans",
    category: 'culture',
    duration: '12:05',
    views: '980K views',
    tags: ['New Orleans', 'Saints', 'Superdome', 'Who Dat']
  },
  {
    id: 'no-bourbon',
    youtubeId: 'SnBJkP1jWYo',
    title: "New Orleans French Quarter Food Tour",
    description: "Walk through the French Quarter tasting beignets at Café du Monde, gumbo at historic restaurants, and po'boys at local joints. This is NOLA food culture between Saints games.",
    city: "New Orleans",
    relatedCity: "neworleans",
    category: 'food-drink',
    duration: '20:15',
    views: '2.2M views',
    tags: ['New Orleans', 'Food', 'French Quarter', 'Creole']
  },

  // LIVERPOOL (Additional)
  {
    id: 'liv-city-guide',
    youtubeId: 'yVDc94Pw0Tk',
    title: "Liverpool City Guide - Beyond Anfield",
    description: "Explore Liverpool's Beatles history, Albert Dock, Cavern Club, and the waterfront. See why this UNESCO World Heritage city is about more than just football - it's music, culture, and Scouse pride.",
    city: "Liverpool",
    relatedCity: "liverpool",
    category: 'city-guides',
    duration: '21:40',
    views: '1.4M views',
    tags: ['Liverpool', 'Beatles', 'City Guide', 'Tourism']
  },

  // TOKYO (Additional)
  {
    id: 'tok-shibuya',
    youtubeId: 'Mw2W4smKDCU',
    title: "Tokyo Shibuya Scramble - Organized Chaos",
    description: "Watch the world's busiest intersection where 3,000 people cross at once. Experience Shibuya 109, arcades, and the controlled madness that defines Tokyo street culture.",
    city: "Tokyo",
    relatedCity: "tokyo",
    category: 'city-guides',
    duration: '10:25',
    views: '4.2M views',
    tags: ['Tokyo', 'Shibuya', 'Street Culture', 'Urban']
  },

  // SÃO PAULO (Additional)
  {
    id: 'sp-food',
    youtubeId: 'Y8KxNb4NiXI',
    title: "São Paulo Street Food Tour - Brazilian Flavors",
    description: "Taste São Paulo's incredible food scene from pastel to coxinha to feijoada. Visit the markets and street stalls where Corinthians and Palmeiras fans fuel up before derbies.",
    city: "São Paulo",
    relatedCity: "saopaulo",
    category: 'food-drink',
    duration: '17:30',
    views: '1.3M views',
    tags: ['São Paulo', 'Food', 'Brazilian Cuisine', 'Street Food']
  },
  {
    id: 'sp-culture',
    youtubeId: 'h3vZDXt0KMk',
    title: "São Paulo Torcidas Organizadas - Fan Groups Explained",
    description: "Deep dive into Brazil's torcidas organizadas - the organized fan groups that run Brazilian football. See the choreography, the flags, and the passion that makes Brazilian football unique.",
    city: "São Paulo",
    relatedCity: "saopaulo",
    category: 'culture',
    duration: '13:52',
    views: '890K views',
    tags: ['São Paulo', 'Ultras', 'Fan Culture', 'Torcidas']
  },

  // SEATTLE (Additional)
  {
    id: 'sea-sounders',
    youtubeId: 'NrjMwvhCbJY',
    title: "Seattle Sounders - MLS Fan Culture",
    description: "Experience Lumen Field for a Sounders match where 40,000 MLS fans create European-style atmosphere. See the Emerald City Supporters and why Seattle is America's soccer city.",
    city: "Seattle",
    relatedCity: "seattle",
    category: 'atmosphere',
    duration: '9:14',
    views: '720K views',
    tags: ['Seattle', 'Sounders', 'MLS', 'Soccer']
  },
  {
    id: 'sea-pike-place',
    youtubeId: 'kTVKjukzqAI',
    title: "Seattle Pike Place Market & Food Tour",
    description: "Tour Pike Place Market, the original Starbucks, and Seattle's coffee culture. Visit the restaurants and bars where Seahawks and Sounders fans gather. This is Seattle food and culture.",
    city: "Seattle",
    relatedCity: "seattle",
    category: 'food-drink',
    duration: '15:08',
    views: '2.4M views',
    tags: ['Seattle', 'Pike Place', 'Food', 'Coffee']
  },

  // MARSEILLE
  {
    id: 'mar-velodrome',
    youtubeId: 'cNR5sLvKEZw',
    title: "Orange Vélodrome - Marseille's Football Cathedral",
    description: "Experience the Stade Vélodrome where OM (Olympique de Marseille) fans create the most intense atmosphere in French football. 67,000 passionate supporters, non-stop chanting, and Mediterranean fire.",
    city: "Marseille",
    relatedCity: "marseille",
    category: 'atmosphere',
    duration: '10:37',
    views: '3.1M views',
    tags: ['Marseille', 'OM', 'Vélodrome', 'Ligue 1']
  },
  {
    id: 'mar-calanques',
    youtubeId: '3vZ_nY2PnJU',
    title: "Marseille City Guide - Mediterranean Port Culture",
    description: "Explore Marseille's Vieux Port, fish markets, and Calanques. See why this gritty Mediterranean port city has such fierce local pride. From bouillabaisse to OM, this is Marseille.",
    city: "Marseille",
    relatedCity: "marseille",
    category: 'city-guides',
    duration: '18:22',
    views: '1.7M views',
    tags: ['Marseille', 'Mediterranean', 'Port', 'Culture']
  },
  {
    id: 'mar-ultras',
    youtubeId: 'uJqB3LJdXGE',
    title: "Marseille Ultras - South Winners & Fan Culture",
    description: "Inside the world of Marseille's ultras - the South Winners, Yankees, and Fanatics. See the tifos, flares, and organized chaos that makes OM matches unforgettable.",
    city: "Marseille",
    relatedCity: "marseille",
    category: 'culture',
    duration: '14:15',
    views: '920K views',
    tags: ['Marseille', 'Ultras', 'Fan Culture', 'OM']
  },

  // MEXICO CITY
  {
    id: 'mex-azteca',
    youtubeId: 'vqbKiLMGLVs',
    title: "Estadio Azteca - Football's Historic Temple",
    description: "Tour the legendary Azteca Stadium where Maradona scored the Hand of God and Pelé won the World Cup. This 87,000-seat cathedral has hosted two World Cup finals. Mexican football history lives here.",
    city: "Mexico City",
    relatedCity: "mexicocity",
    category: 'stadium-tours',
    duration: '16:30',
    views: '2.8M views',
    tags: ['Mexico City', 'Azteca', 'World Cup', 'History']
  },
  {
    id: 'mex-clasico',
    youtubeId: 'tZoP4hDCdAo',
    title: "Club América vs Chivas - El Súper Clásico",
    description: "Experience Mexico's biggest rivalry - Club América (the rich, cosmopolitan capital) vs Chivas (working-class pride of Guadalajara). Passion, politics, and 90 minutes of Mexican football intensity.",
    city: "Mexico City",
    relatedCity: "mexicocity",
    category: 'fan-reactions',
    duration: '12:48',
    views: '4.5M views',
    tags: ['Mexico City', 'América', 'Chivas', 'Clásico']
  },
  {
    id: 'mex-food',
    youtubeId: 'RTFZQhNvqO0',
    title: "Mexico City Street Food Tour - Tacos & Tortas",
    description: "Eat your way through CDMX from street tacos to tortas to tamales. Visit the markets and taquerías where América and Pumas fans gather. This is authentic Mexican food culture.",
    city: "Mexico City",
    relatedCity: "mexicocity",
    category: 'food-drink',
    duration: '22:15',
    views: '3.9M views',
    tags: ['Mexico City', 'Tacos', 'Street Food', 'Mexican Cuisine']
  },

  // PORTLAND
  {
    id: 'por-timbers',
    youtubeId: 'PAJJzAdT_P4',
    title: "Portland Timbers - Chainsaw and Timber Joey",
    description: "Experience Providence Park where Timber Joey cuts a log slice after every goal. See the Timbers Army - 5,000+ standing supporters creating MLS's most unique atmosphere. Keep Portland Weird extends to soccer.",
    city: "Portland",
    relatedCity: "portland",
    category: 'culture',
    duration: '11:27',
    views: '850K views',
    tags: ['Portland', 'Timbers', 'MLS', 'Timber Joey']
  },
  {
    id: 'por-food-carts',
    youtubeId: 'ZGvzWLXZ0zc',
    title: "Portland Food Cart Tour - Foodie Paradise",
    description: "Tour Portland's famous food cart pods from Vietnamese pho to Korean BBQ to vegan donuts. See why Portland is America's indie food capital and where Timbers fans fuel up.",
    city: "Portland",
    relatedCity: "portland",
    category: 'food-drink',
    duration: '18:50',
    views: '1.9M views',
    tags: ['Portland', 'Food Carts', 'Street Food', 'Foodie']
  },
  {
    id: 'por-city',
    youtubeId: 'X5GcVPUQ_Sg',
    title: "Portland City Guide - Keep It Weird",
    description: "Explore Portland's Powell's Books, craft breweries, and quirky culture. From Voodoo Doughnuts to Forest Park, see why Portland is the hipster capital and how that extends to sports fandom.",
    city: "Portland",
    relatedCity: "portland",
    category: 'city-guides',
    duration: '20:35',
    views: '2.3M views',
    tags: ['Portland', 'City Guide', 'Hipster', 'Culture']
  },

  // MELBOURNE
  {
    id: 'mel-mcg',
    youtubeId: 'rXSb2EAc2tY',
    title: "MCG Tour - Melbourne Cricket Ground",
    description: "Tour the legendary Melbourne Cricket Ground (MCG) - the world's greatest stadium. See where 100,000 fans pack in for AFL Grand Finals and cricket Ashes matches. This is Australian sports culture.",
    city: "Melbourne",
    relatedCity: "melbourne",
    category: 'stadium-tours',
    duration: '15:42',
    views: '1.6M views',
    tags: ['Melbourne', 'MCG', 'Cricket', 'AFL']
  },
  {
    id: 'mel-afl',
    youtubeId: 'XMZYZcoAcU0',
    title: "AFL Grand Final Atmosphere - Melbourne Goes Mad",
    description: "Experience the AFL Grand Final at the MCG with 100,000 screaming fans. This is Australia's Super Bowl - meat pies, tinnies, and the most passionate sports crowd in the Southern Hemisphere.",
    city: "Melbourne",
    relatedCity: "melbourne",
    category: 'atmosphere',
    duration: '13:18',
    views: '2.7M views',
    tags: ['Melbourne', 'AFL', 'Grand Final', 'Sports']
  },
  {
    id: 'mel-coffee',
    youtubeId: 'aAFkPB9cgck',
    title: "Melbourne Coffee Culture & Laneways Tour",
    description: "Explore Melbourne's legendary coffee scene and hidden laneways. Visit the cafes and bars where AFL fans argue over their teams. This is Melbourne's cafe culture and why it's Australia's cultural capital.",
    city: "Melbourne",
    relatedCity: "melbourne",
    category: 'food-drink',
    duration: '17:25',
    views: '2.1M views',
    tags: ['Melbourne', 'Coffee', 'Cafes', 'Culture']
  },

  // ATHENS
  {
    id: 'ath-derby',
    youtubeId: 'hUMkS05qZqE',
    title: "Athens Derby - Olympiacos vs Panathinaikos",
    description: "The Derby of the Eternal Enemies splits Athens in half. Red vs Green, working class vs elite, 90 minutes of Greek passion with flares, drums, and ancient hatred. This is Greek football.",
    city: "Athens",
    relatedCity: "athens",
    category: 'atmosphere',
    duration: '11:45',
    views: '3.4M views',
    tags: ['Athens', 'Derby', 'Olympiacos', 'Panathinaikos']
  },
  {
    id: 'ath-gate-7',
    youtubeId: 'fR8o1L77kfs',
    title: "Olympiacos Gate 7 - Greece's Most Fanatical Fans",
    description: "Inside Gate 7 - Olympiacos's ultra group and one of Europe's most intense fan sections. See the choreography, the passion, and why Greek football fans are among the world's most fanatical.",
    city: "Athens",
    relatedCity: "athens",
    category: 'culture',
    duration: '14:30',
    views: '1.2M views',
    tags: ['Athens', 'Gate 7', 'Ultras', 'Olympiacos']
  },
  {
    id: 'ath-acropolis',
    youtubeId: 'Lq5dB0zT0PE',
    title: "Athens City Guide - Ancient & Modern",
    description: "Tour Athens from the Acropolis to Plaka to modern neighborhoods. Visit the tavernas where football fans gather before derbies. This is where ancient history meets modern Greek passion.",
    city: "Athens",
    relatedCity: "athens",
    category: 'city-guides',
    duration: '19:50',
    views: '2.9M views',
    tags: ['Athens', 'Acropolis', 'Greece', 'History']
  },

  // CAIRO
  {
    id: 'cai-ahly-zamalek',
    youtubeId: 'N-XPsz7fLj0',
    title: "Cairo Derby - Al Ahly vs Zamalek",
    description: "The Cairo Derby is Africa's fiercest rivalry. Red vs White, working class vs elite, 75,000 fans creating noise that echoes across the Nile. This is Egyptian football passion at its most intense.",
    city: "Cairo",
    relatedCity: "cairo",
    category: 'atmosphere',
    duration: '12:25',
    views: '4.8M views',
    tags: ['Cairo', 'Al Ahly', 'Zamalek', 'Derby']
  },
  {
    id: 'cai-ultras',
    youtubeId: 'jLhpKT8sECc',
    title: "Egyptian Ultras - Revolution & Football",
    description: "How Egyptian ultras helped spark the Arab Spring revolution. See the Ahlawy and White Knights - fan groups that are political movements, social organizations, and football fanatics combined.",
    city: "Cairo",
    relatedCity: "cairo",
    category: 'culture',
    duration: '16:40',
    views: '2.3M views',
    tags: ['Cairo', 'Ultras', 'Politics', 'Revolution']
  },
  {
    id: 'cai-pyramids',
    youtubeId: 'a5RSo5kHDwI',
    title: "Cairo City Guide - Pyramids to Khan el-Khalili",
    description: "Experience Cairo from the Pyramids of Giza to the chaos of Khan el-Khalili bazaar. Visit the cafes where Al Ahly and Zamalek fans debate over shisha. This is Egypt's beating heart.",
    city: "Cairo",
    relatedCity: "cairo",
    category: 'city-guides',
    duration: '23:15',
    views: '5.2M views',
    tags: ['Cairo', 'Pyramids', 'Egypt', 'History']
  }
];

// Get videos by category
function getVideosByCategory(category) {
  return VIDEOS.filter(video => video.category === category);
}

// Get videos by city
function getVideosByCity(cityName) {
  return VIDEOS.filter(video => video.relatedCity === cityName);
}

// Generate VideoObject schema for SEO
function generateVideoSchema(video) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": video.title,
    "description": video.description,
    "thumbnailUrl": `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`,
    "uploadDate": "2024-01-01",
    "duration": `PT${video.duration.replace(':', 'M')}S`,
    "contentUrl": `https://www.youtube.com/watch?v=${video.youtubeId}`,
    "embedUrl": `https://www.youtube.com/embed/${video.youtubeId}`
  };
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { VIDEOS, getVideosByCategory, getVideosByCity, generateVideoSchema };
}
