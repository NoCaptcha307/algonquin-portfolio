
/**
 * PROJECT DATA
 *
 * Edit this file to update:
 * - Project titles and descriptions
 * - Cover images and videos
 * - Case study content
 * - Project image paths
 *
 * All asset paths are relative to index.html.
 */


// ============================================================
// 1. PROJECT CARD INFORMATION
// ============================================================

const cases = {

  env: {
    kind: 'BRAND IDENTITY / REAL CLIENT',
    title: 'Enviro-Stewards: A complete rebrand',
    visual: 'Identity system · Visual language · Brand guidelines',
    description: 'I led the rebranding of Enviro-Stewards, designing its visual identity, brand assets and graphic elements, and creating the brand guidelines that define how the system should be used.',
    tags: [
      'Visual identity',
      'Brand guidelines',
      'Graphic system',
      'Corporate communications'
    ],
    note: 'Add original logo variations, pattern studies, guideline pages, applications and before/after visuals.'
  },

  em: {
    kind: 'MOTION / REAL CLIENT',
    title: 'Ener-C: Campaigns in motion',
    visual: 'Video campaigns · Direction · Compositing',
    description: 'I created two motion graphics and live-action advertising campaigns for Ener-C, combining concept development, filming, editing and visual effects.',
    tags: [
      'Motion graphics',
      'Digital advertising',
      'Campaign creative',
      'Video'
    ],
    note: 'Add the original campaign videos and supporting artwork.'
  },

  hydro: {
    kind: 'MOTION DESIGN / REAL CLIENT',
    title: 'Hydro Ottawa: Motion Design',
    visual: 'Motion graphics · Animation · Video',
    description: 'Motion graphics and animation developed for Hydro Ottawa, bringing visual storytelling to a local utility brand.',
    tags: [
      'Motion graphics',
      'Animation',
      'Video production',
      'Advertising'
    ],
    note: 'Add the original Hydro Ottawa video and supporting artwork.'
  },

  flip: {
    kind: 'AGENCY / MOTION + PRINT',
    title: 'McMillan Advertising: Creative in Motion',
    visual: 'Agency experience · Animation · Print',
    description: 'My time at McMillan Advertising included motion design, creative collaboration and special projects, including animated holiday flipbooks produced for agency clients.',
    tags: [
      'Agency creative',
      '2D animation',
      'Motion graphics',
      'Print production',
      'Creative collaboration',
      'Social video'
    ],
    note: 'Add the original flipbooks, process video and additional agency work.'
  },

  steam: {
    kind: 'APPAREL GRAPHICS / REAL CLIENT',
    title: 'Steam Whistle: T-shirt Designs',
    visual: 'Illustration · Apparel · Print',
    description: 'I created three T-shirt graphics for Steam Whistle Brewery, including a design that remained in the product line.',
    tags: [
      'Graphic design',
      'Apparel graphics',
      'Print production'
    ],
    note: 'Add photos or artwork for all three designs.'
  },

  caps: {
    kind: 'INDEPENDENT BRAND / REAL WORK',
    title: 'Captcha Caps: Design you can wear',
    visual: 'From sketch → pattern → finished cap',
    description: 'An Ottawa-based headwear venture bringing together brand identity, design, product development, marketing and hands-on manufacturing.',
    tags: [
      'Brand development',
      'Print + embroidery',
      'Product design',
      'Production'
    ],
    note: 'Add finished product photography, campaign graphics, packaging and process imagery.'
  },

  spec: {
    kind: 'SPECULATIVE APPLICATION CONCEPT',
    title: 'Student recruitment campaign',
    visual: 'Campaign assets coming soon',
    description: 'A proposed student recruitment campaign exploring how a coherent visual system can work across posters, digital advertising, social media and campus signage.',
    tags: [
      'Recruitment',
      'Print',
      'Social',
      'Digital'
    ],
    note: 'Uncommissioned concept. Not official Algonquin College work.'
  },

  ott: {
    kind: 'EDITORIAL DESIGN / REAL CLIENT',
    title: 'Waybridge Realty: Property Marketing',
    visual: 'Editorial · Layout · Print',
    description: 'Real estate marketing materials combining property photography, editorial layouts and branded print collateral.',
    tags: [
      'Editorial design',
      'Typography',
      'Print design',
      'Visual communication'
    ],
    note: 'Add original Waybridge Realty brochures and supporting layouts.'
  }

};


// ============================================================
// 2. COVER IMAGES AND ADDITIONAL MEDIA
// ============================================================

const mediaManifest = {

  env: {
    cover: 'assets/projects/enviro-stewards/cover.jpg',
    media: [
      ['image', 'assets/projects/enviro-stewards/logo.jpg', 'Final identity'],
      ['image', 'assets/projects/enviro-stewards/brand-guidelines.jpg', 'Brand guidelines'],
      ['image', 'assets/projects/enviro-stewards/applications.jpg', 'Brand applications']
    ]
  },

  em: {
    cover: 'assets/projects/emergen-c/cover.jpg',
    media: [

['video', 'assets/projects/energen-c/social-campaign.mp4', 'Ener-C Social Campaign'],
['video', 'assets/projects/energen-c/athlete-campaign.mp4', 'Ener-C Athlete Campaign'],

      ['image', 'assets/projects/emergen-c/sports-still.jpg', 'Sports campaign still']
    ]
  },

hydro: {
  cover: 'assets/projects/hydro-ottawa/cover.jpg',
  media: [
    ['image', 'cover.jpg', 'Hydro Ottawa campaign artwork']
  ]
},

  flip: {
    cover: 'assets/projects/mcmillan-flipbooks/cover.jpg',
    media: [

      ['image', 'assets/projects/mcmillan-flipbooks/flipbooks.jpg', 'Physical flipbooks']
    ]
  },

  steam: {
    cover: 'assets/projects/steam-whistle/cover.jpg',
    media: [
      ['image', 'assets/projects/steam-whistle/design-01.jpg', 'T-shirt design one'],
      ['image', 'assets/projects/steam-whistle/design-02.jpg', 'T-shirt design two'],
      ['image', 'assets/projects/steam-whistle/design-03.jpg', 'T-shirt design three']
    ]
  },

  caps: {
    cover: 'assets/projects/captcha-caps/cover.jpg',
    media: [
      ['image', 'assets/projects/captcha-caps/product.jpg', 'Headwear product']
    ]
  },

  spec: {
    cover: 'assets/projects/algonquin-concept/cover.jpg',
    media: [
      ['image', 'assets/projects/algonquin-concept/poster.jpg', 'Speculative campaign poster']
    ]
  },

  ott: {
    cover: 'assets/projects/ottawa-living/cover.jpg',
    media: [
      ['image', 'assets/projects/ottawa-living/editorial.jpg', 'Editorial design']
    ]
  }

};


// ============================================================
// 3. PROJECT FOLDERS
// ============================================================

const caseRoot = 'assets/projects/';

const caseFolders = {
  env: 'enviro-stewards',
  em: 'emergen-c',
  hydro: 'hydro-ottawa',
  flip: 'mcmillan-flipbooks',
  steam: 'steam-whistle',
  caps: 'captcha-caps',
  spec: 'algonquin-concept',
  ott: 'ottawa-living'
};


// ============================================================
// 4. FULL CASE STUDY CONTENT
// ============================================================

const caseContent = {

  env: {
    subtitle: 'A brand system built around environmental stewardship.',
    role: 'Lead visual designer',
    scope: 'Identity · Brand system · Print',
    year: 'Client project',

    challenge: 'Enviro-Stewards approached me to develop a refreshed visual identity that better reflected their work in environmental consulting and sustainability. The challenge was to create a distinctive, professional brand that communicated their mission while remaining versatile across digital and print applications. The project encompassed a complete visual rebrand, from initial logo concepts to a cohesive identity system and comprehensive brand guidelines.',

    approach: 'I explored a wide range of visual directions, from traditional shield emblems and abstract eclipses to stylized E and S combinations. Through experiments with circles, intersecting lines and geometric forms, I worked toward a mark that felt both distinctive and purposeful. Each iteration helped refine the visual language, ultimately leading to a simpler identity rooted in environmental stewardship.',

    solution: 'The final identity extended into colour, typography, pattern language, guidelines, promotional material and website visual assets.',

    quote: 'A strong identity is more than a logo. It is a system that works everywhere.',

    result: `The result was a complete visual identity that gave Enviro-Stewards a consistent, recognizable presence across print and digital communications. From developing the initial concept to establishing comprehensive brand guidelines, this project strengthened my ability to translate an organization's values into a practical, cohesive design system. It reinforced the importance of listening to stakeholders, maintaining brand consistency and creating visual assets that work together across different applications. These are skills I would bring directly to supporting Algonquin College's established identity and diverse communication needs.`

  },

  em: {
    subtitle: 'Bringing energy to life through motion.',
    role: 'Concept · Direction · Editing · Motion',
    scope: 'Video · Campaign · Compositing',
    year: 'Client project',

    challenge: `The challenge was to communicate what Ener-C does through visual storytelling, using minimal on-screen text beyond the brand's slogan. Through colour, movement, pacing and visual effects, the campaign needed to transform an ordinary workday into something vibrant and energetic, making the product's impact immediately understandable.`,

    approach: 'The concept was to transform a slow, muted Monday morning into a bright, vibrant day, with Ener-C as the catalyst. The transition moves through the glass itself, using carefully planned green-screen footage, precise match cuts and compositing to seamlessly connect two contrasting worlds.',

    solution: 'The project extended beyond the main commercial to include a custom logo reveal and a series of short-form social media stingers. Each piece required its own approach to animation, editing and compositing while maintaining a consistent visual identity across the campaign.',

    quote: 'Movement, contrast and timing turn an ordinary moment into a story.',

    result: `The finished campaigns brought together creative direction, live-action production, motion graphics and visual effects to communicate Ener-C's brand personality through engaging visual storytelling. Taking these projects from initial concept through filming, editing and final delivery strengthened my ability to manage complex creative workflows, solve technical challenges and maintain a consistent visual direction across multiple deliverables. This experience translates directly to Algonquin College, where creating effective content across digital platforms requires versatility, collaboration and a clear understanding of the audience.`

  },

  hydro: {
    subtitle: 'Bringing a local utility brand to life through motion.',
    role: 'Motion Designer',
    scope: 'Animation · Motion graphics · Video',
    year: 'Client project',

    challenge: 'The challenge was to translate existing concepts and artwork developed by other designers into engaging, polished explainer videos. My role was to interpret their creative direction, develop the animation and bring the messaging to life through timing, transitions and motion design. The logo reveal was a separate piece that allowed me to develop the animation concept myself.',

    approach: 'Working from storyboards and illustrations created by other designers, I translated their concepts into finished animated sequences. My focus was on bringing the artwork to life through purposeful movement, pacing and transitions, turning static visual ideas into engaging explainer videos while staying true to the original creative direction.',

    solution: 'Motion graphics created for the Hydro Ottawa project.',

    quote: 'Motion gives visual communication another dimension.',

    result: `The completed videos transformed static storyboards and illustrations into engaging motion graphics while preserving Hydro Ottawa's established visual identity. Working from creative concepts developed by other designers strengthened my ability to interpret a brief, collaborate effectively and bring someone else's vision to life through animation, pacing and thoughtful transitions. This experience reinforced an important part of professional design: knowing when to lead creatively and when to support a larger team's vision. It's an approach I would bring to Algonquin College, where collaboration and brand consistency are essential to producing effective communications.`

  },

  flip: {
    subtitle: 'Creative problem-solving inside an advertising agency.',
    role: 'Motion Designer',
    scope: 'Animation · Agency creative · Print · Video',
    year: '2016–2017',

    challenge: `At McMillan Advertising, I worked as a motion designer on campaigns for clients including QuickBooks and United Rentals. My role involved creating motion graphics, animated lower thirds, logo reveals and visual effects, as well as supporting filming, editing and compositing. Working alongside the agency's creative team, I helped bring concepts to life across a range of commercial projects. While much of that client work isn't represented here, the projects that follow offer a glimpse into the creativity, collaboration and experimentation that defined my time at McMillan.`,

    approach: 'My responsibilities included animation, lower thirds, logo reveals, compositing and supporting video production. One particularly memorable project involved animating illustrations created by another designer for McMillan’s holiday client mailers.',

    solution: 'The illustrated sequences became physical flipbooks, supported by a behind-the-scenes video that I filmed, edited and produced for social media.',

    quote: 'Motion design can live beyond the screen.',

    result: `My time at McMillan Advertising taught me how to thrive within a collaborative creative team. Working on campaigns for clients including QuickBooks and United Rentals strengthened my ability to interpret briefs, meet deadlines, respond to feedback and contribute to projects involving multiple creative disciplines. The holiday flipbooks were a particularly memorable example of that collaboration, transforming another designer's illustrations into animated sequences and ultimately physical products for clients. The experience reinforced the importance of respecting other people's creative contributions while bringing my own technical skills and ideas to the table. It's an approach I would carry into Algonquin College's Marketing team, where successful design depends on collaboration, adaptability and a shared creative vision.`

  },

  steam: {
    subtitle: 'Graphic design made to be worn.',
    role: 'Apparel graphic designer',
    scope: 'Illustration · Print production',
    year: 'Client project',

    challenge: `What began as a graphic design project at Algonquin College soon caught the attention of the team at Steam Whistle Brewery. Impressed by the original concept, they commissioned me to develop a series of T-shirt designs, turning a classroom assignment into a real-world creative collaboration.`,

    approach: `The concept began with a simple play on words: **Blueprint to Brewprint.** I reimagined Steam Whistle's iconic bottle as a vintage technical drawing, using detailed illustrations, annotations and typography to give the design the appearance of an architectural blueprint. The monochromatic blue palette ties everything together, turning a familiar product into a graphic that celebrates the brand through a little visual humour.`,

    solution: 'Finished apparel graphics intended for real garments, not just a screen.',

    quote: 'A great graphic has to work in the real world.',

    result: `What began as a classroom assignment at Algonquin College became one of my first opportunities to turn a creative concept into a commercial product. Steam Whistle commissioned three original T-shirt designs, allowing me to combine illustration, visual storytelling and my knowledge of screen printing. One of those designs went on to be sold by the brewery. The experience taught me that strong design is about more than an interesting idea. It requires understanding the brand, developing artwork that works in production and carrying a concept through to a finished product. It's a lesson that began at Algonquin and continues to shape how I approach design today.`

  },

  caps: {
    subtitle: 'From an idea to a finished piece of headwear.',
    role: 'Founder · Designer · Maker',
    scope: 'Branding · Product design · Manufacturing',
    year: 'Independent project',

    challenge: "I've always been a builder, and sometimes creating something on a computer just isn't enough. I wanted to take my ideas beyond the screen and turn them into something real. That's how Captcha began. A homegrown headwear company I built from the ground up, combining my background in graphic design with my experience in manufacturing. From developing original patterns and designing the brand to cutting and sewing every hat right here in Ottawa, the challenge was to build more than a product. It was to build an entire brand from scratch. \n\nMade in Ottawa. No cap.",

    approach: "I've always loved vintage clothing, especially the colours, materials and character you don't often find in modern apparel. With Captcha, I saw an opportunity to give those pieces a second life. By deconstructing vintage garments and repurposing their fabrics, I create original hats that carry a little history into something entirely new. Every piece presents a different design challenge, from working around existing seams and pockets to developing patterns that make the most of the available material.",

    solution: 'Taking vintage clothing apart and giving it a second life is one of my favourite parts of Captcha. This hat began as an L.L.Bean jacket, carefully deconstructed and transformed into something entirely new. From repurposing the original fabric and labels to cutting, sewing and finishing the cap, every detail celebrates the character of the original garment.',

    quote: 'Design does not stop at the screen.',

    result: "Captcha has become more than a clothing brand. It's given me the opportunity to take complete ownership of an idea, from the first sketch to the finished product. Along the way, I've learned to approach design not just as something that looks good, but as something that has to function, endure and connect with people. It's been one of the most rewarding creative challenges I've taken on, and a reminder of why I fell in love with making things in the first place."
  },

  spec: {
    subtitle: 'Exploring a cohesive student recruitment campaign.',
    role: 'Concept designer',
    scope: 'Campaign · Print · Digital',
    year: 'Speculative concept',

    challenge: 'Explore how a recruitment campaign could communicate consistently across multiple platforms.',

    approach: 'Develop a flexible visual direction suited to posters, social media and digital advertising.',

    solution: 'A proposed campaign system for student recruitment.',

    quote: 'One clear idea can connect many different formats.',

    result: 'An uncommissioned portfolio concept, not official Algonquin College work.'
  },

  ott: {
    subtitle: 'Property marketing through thoughtful editorial design.',
    role: 'Graphic Designer',
    scope: 'Editorial · Print · Layout',
    year: 'Client project',

    
    challenge: 'As the graphic designer for Waybridge Realty, I was responsible for creating the company\'s print materials and social media graphics. From property brochures and listing presentations to promotional content, the challenge was to present detailed real estate information in a way that felt professional, approachable and visually consistent. Each piece needed to reflect the Waybridge brand while giving individual properties their own identity.',

    approach: 'Beyond traditional print design, I brought the Waybridge Realty brand into motion through animated logo reveals, video editing and promotional content. I combined typography, animation and carefully timed transitions to create engaging visuals that gave the brand a more dynamic presence across social media and digital platforms.',

    solution: 'Alongside the printed marketing materials, I produced animated logo reveals and promotional videos that brought the Waybridge Realty identity to life. Motion, typography and carefully timed transitions helped create a consistent brand experience across digital platforms.',


    quote: 'Good layout design makes information effortless to navigate.',

    result: `Working with Waybridge Realty gave me the opportunity to develop a wide range of marketing materials, from property brochures and print collateral to social media campaigns, motion graphics and promotional videos. Creating content for different audiences and platforms strengthened my ability to adapt a consistent visual identity to a variety of communication needs. The experience also reinforced the importance of understanding a client's goals, responding to feedback and delivering work that is both creative and practical. While the clients happened to be my parents, the expectations were professional and the lessons were invaluable. These are skills I would bring to Algonquin College, where clear, consistent communication across print and digital platforms is essential.`



  }

};


// ============================================================
// 5. CASE STUDY IMAGE OVERRIDES
// ============================================================

// These control the hero, process and application images
// displayed INSIDE each case study.
//
// Projects without overrides use default filenames:
// hero.webp
// process-01.webp
// process-02.webp
// application-01.webp
// application-02.webp
// application-03.webp

const caseAssets = {

  env: {
    hero: 'assets/projects/enviro-stewards/hero.jpg',
    'process-01': 'assets/projects/enviro-stewards/process-01.jpg',
    'process-02': 'assets/projects/enviro-stewards/process-02.jpg',
    'application-01': 'assets/projects/enviro-stewards/application-01.jpg',
    'application-02': 'assets/projects/enviro-stewards/application-02.jpg',
    'application-03': 'assets/projects/enviro-stewards/application-03.jpg'
  }

};


const youtubeVideos = {
  enerC: {
    campaign: "lanljpteScU"
  },

  hydroOttawa: {
    application01: "HFSZy2w-YDE",
    application02: "3l-4rI73gd0",
    application03: "NP9dcRmd2R8",
    campaign: "p2UA3xoojtc"
  },

  ottawaLiving: {
    application: "cBnaAdos268"
  },

  mcmillan: {
    flipbooks: "RQhvqKtPD9k"
  }
};


