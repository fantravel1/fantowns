// FANTOWNS Blog Posts - Fan Travel Stories
// These are example template posts. Replace with REAL user-submitted stories.

const BLOG_POSTS = [
  {
    id: 'anfield-pilgrimage-2024',
    title: "My Anfield Pilgrimage: When 'You'll Never Walk Alone' Made Me Cry",
    slug: 'anfield-pilgrimage-2024',
    excerpt: "I flew 4,000 miles to Liverpool. What I experienced during those 90 minutes at Anfield changed everything I thought I knew about football. The Kop didn't just sing—they created something transcendent.",
    content: `I landed at Manchester Airport at 6:47am on a cold March morning. Four thousand miles from home, jet-lagged, running on three hours of airplane sleep and pure adrenaline. I had one mission: experience Anfield on a European night.

The flight from New York took eight hours. I'd saved for six months. I'd watched Liverpool religiously for years, but always through a screen—laptop, phone, pub projectors. This was different. This was the pilgrimage.

The train from Manchester to Liverpool took 45 minutes. The countryside blurred past—grey English sky, green fields, red brick terraces. My heart raced faster with each mile. When Lime Street Station appeared, I nearly dropped my phone trying to take a photo.

I checked into the Shankly Hotel at 9am. The receptionist—a scouser in his 60s—saw my Liverpool scarf and grinned. "First time at Anfield, lad?" I nodded, speechless. "You're in for something special tonight. European night at Anfield. There's nothing like it anywhere on Earth."

He was right. But "special" doesn't capture it. "Religious experience" gets closer.

I spent the day wandering Liverpool. The Beatles Story museum. Albert Dock. Cavern Club. But my mind was elsewhere. Kickoff was 8pm. Barcelona. Champions League. I couldn't eat. Couldn't sit still.

At 4pm, I walked to Anfield. The stadium loomed in the distance—red brick, flags flying, history in every stone. Locals were already gathering. Scarves everywhere. Songs starting in pubs. The air vibrated with anticipation.

I bought a program outside. A vendor—must've been 70—said, "Barcelona won't know what hit them tonight. The Kop's gonna be absolutely mental."

Inside The Albert pub, 200 fans sang "Allez Allez Allez" at volumes that should've shattered glass. Beer sloshed. Strangers became brothers. An old man bought me a Guinness just because I'd flown from America. "Welcome home, lad."

At 7pm, I joined the march to the stadium. Thousands of us, a river of red flowing down Walton Breck Road. The singing never stopped. My voice was already hoarse and kickoff was an hour away.

Through the turnstiles. Up the concrete stairs. And then... the pitch.

Green, impossibly green under the lights. The Kop behind one goal—a wall of red and white. Flags everywhere. The noise already deafening and the game hadn't started.

I found my seat. Row 24, Kop end. A teenager to my left, a grandfather to my right. The grandfather leaned over: "Your first time?" I nodded. He smiled. "You'll never forget this. Never."

The teams walked out. The roar was physical. It hit my chest like a shockwave. This wasn't noise—this was power. Elemental. Primal.

And then, the anthem.

"You'll Never Walk Alone."

Everyone stood. Fifty-four thousand people singing in perfect unison. The scarves went up—a sea of red and white waving in rhythm. The grandfather next to me had tears streaming down his face. The teenager was singing with his whole heart.

And I lost it.

I don't cry easily. But standing there, in the Kop, surrounded by generations of Liverpool fans singing the anthem that's carried them through tragedy and triumph—I sobbed. Big, ugly, beautiful sobs.

The song built. The volume increased. The scarves waved faster. And at the crescendo—"You'll never walk alone!"—the entire stadium erupted. The sound was so loud, so pure, I felt it in my bones.

Later, I read that seismologists 30 miles away recorded tremors. I believe it. The stadium shook. The air shook. Reality shook.

The match itself? Liverpool won 4-0. Mané scored twice. Salah was unstoppable. Barcelona looked terrified from kickoff. The Kop never stopped singing. Every goal was celebrated like we'd won the World Cup.

But honestly? The scoreline barely mattered.

What mattered was the 84-year-old man crying next to me during the anthem. The teenager who high-fived me after every goal. The stranger who gave me his scarf at full-time. "Keep it, lad. Remember tonight."

What mattered was understanding—truly understanding—why they say Anfield is different.

It's not just a stadium. It's not just a fanbase.

It's a religion. A family. A phenomenon that transcends sport.

I flew 4,000 miles to watch 22 men kick a ball around for 90 minutes. I came back with something I can't quite name. A piece of something eternal.

The grandfather was right. I'll never forget this. Never.

You'll never walk alone. And at Anfield, surrounded by 54,000 people singing that truth, you really, truly don't.`,
    author: "Michael Chen",
    authorBio: "Lifelong Liverpool supporter, first-time Anfield visitor",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Football",
    emoji: "⚽",
    city: "liverpool",
    tags: ["Liverpool", "Anfield", "Champions League", "You'll Never Walk Alone", "Fan Culture"],
    featured: true
  },

  {
    id: 'yellow-wall-dortmund',
    title: "Standing in the Yellow Wall: 25,000 Fans Moving as One Organism",
    slug: 'yellow-wall-dortmund',
    excerpt: "They told me the Yellow Wall was the loudest stand in football. They were wrong. It's not the loudest—it's the most alive. 25,000 fans bouncing, singing, breathing as a single being.",
    author: "Emma Rodriguez",
    authorBio: "Travel journalist, Bundesliga obsessive",
    date: "February 8, 2024",
    readTime: "10 min read",
    category: "Football",
    emoji: "🟡",
    city: "dortmund",
    tags: ["Dortmund", "Yellow Wall", "Bundesliga", "Süd Tribune", "BVB"],
    featured: false
  },

  {
    id: 'tokyo-comiket-survival',
    title: "I Survived Comiket: 750,000 Fans, 72 Hours, Zero Sleep",
    slug: 'tokyo-comiket-survival',
    excerpt: "Comiket isn't a convention—it's a war zone. A beautiful, chaotic, utterly exhausting war zone where otaku culture reaches its purest form. Here's how I survived 3 days in Tokyo's anime epicenter.",
    author: "Yuki Tanaka",
    authorBio: "Manga artist, 15-year Comiket veteran",
    date: "January 22, 2024",
    readTime: "12 min read",
    category: "Anime",
    emoji: "🎌",
    city: "tokyo",
    tags: ["Tokyo", "Comiket", "Anime", "Akihabara", "Otaku Culture"],
    featured: false
  },

  {
    id: 'lambeau-frozen-tundra',
    title: "Lambeau at -15°F: Why Packers Fans Are Built Different",
    slug: 'lambeau-frozen-tundra',
    excerpt: "Wind chill: -20°F. Snow falling. My beard froze solid. And 81,000 Green Bay fans were grilling brats like it was July. This is the Frozen Tundra. This is Packers fandom distilled.",
    author: "Jake Thompson",
    authorBio: "Chicago Bears fan who respects the enemy",
    date: "December 18, 2023",
    readTime: "7 min read",
    category: "Football (American)",
    emoji: "🏈",
    city: "greenbay",
    tags: ["Green Bay", "Lambeau Field", "NFL", "Frozen Tundra", "Packers"],
    featured: false
  },

  {
    id: 'la-bombonera-earthquake',
    title: "La Bombonera Literally Shook: My First Superclásico",
    slug: 'la-bombonera-earthquake',
    excerpt: "Boca Juniors vs River Plate. The Superclásico. Argentina's Derby of Derbies. I'd heard the stadium shakes. I thought it was metaphor. It's not. It's engineering that shouldn't work but does.",
    author: "Carlos Fernández",
    authorBio: "Argentine ex-pat, Boca Juniors for life",
    date: "November 5, 2023",
    readTime: "9 min read",
    category: "Football",
    emoji: "🇦🇷",
    city: "buenosaires",
    tags: ["Buenos Aires", "Boca Juniors", "La Bombonera", "Superclásico", "River Plate"],
    featured: false
  },

  {
    id: 'nashville-broadway-honkytonk',
    title: "5 Honky Tonks, 47 Beers, 1 Life-Changing Night on Broadway",
    slug: 'nashville-broadway-honkytonk',
    excerpt: "Nashville's Lower Broadway isn't a street—it's a 3-block party that never stops. Live music pours from every door. Neon everywhere. And somehow, every musician is incredible. Here's my 14-hour odyssey.",
    author: "Sarah Mitchell",
    authorBio: "Country music skeptic turned believer",
    date: "October 12, 2023",
    readTime: "11 min read",
    category: "Music",
    emoji: "🎸",
    city: "nashville",
    tags: ["Nashville", "Broadway", "Honky Tonks", "Country Music", "Live Music"],
    featured: false
  },

  {
    id: 'seattle-12th-man-deafening',
    title: "The 12th Man Made My Ears Bleed (Worth It)",
    slug: 'seattle-12th-man-deafening',
    excerpt: "137.6 decibels. That's louder than a jet engine. That's the record at Lumen Field. I was there. I forgot earplugs. My tinnitus is permanent. I have zero regrets.",
    author: "Marcus Washington",
    authorBio: "Seahawks season ticket holder since 2012",
    date: "September 28, 2023",
    readTime: "6 min read",
    category: "Football (American)",
    emoji: "🏈",
    city: "seattle",
    tags: ["Seattle", "Seahawks", "Lumen Field", "12th Man", "Beast Quake"],
    featured: false
  },

  {
    id: 'athens-gate-7-ultras',
    title: "Inside Gate 7: The Greek Ultras Who Never Sit Down",
    slug: 'athens-gate-7-ultras',
    excerpt: "Olympiacos' Gate 7 ultras are legendary across Europe. Red flares. Coordinated chants. Ninety minutes of standing, jumping, singing. I joined them for a derby match. My legs didn't work for three days.",
    author: "Dimitri Papadopoulos",
    authorBio: "Photographer documenting football culture",
    date: "August 15, 2023",
    readTime: "10 min read",
    category: "Football",
    emoji: "🇬🇷",
    city: "athens",
    tags: ["Athens", "Olympiacos", "Gate 7", "Ultras", "Greek Football"],
    featured: false
  }
];

// Export for use in blog pages
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { BLOG_POSTS };
}
