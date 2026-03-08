export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroSubtext: string;
  description: string[];
  features: string[];
  process: { step: string; detail: string }[];
  locationContent: string;
}

export const SERVICE_AREAS = [
  "Madera",
  "Fresno",
  "Clovis",
  "Visalia",
  "Merced",
  "Modesto",
  "Bass Lake",
  "Sacramento",
  "Bakersfield",
  "Bay Area",
];

export const services: Service[] = [
  {
    slug: "concrete-driveways",
    title: "Concrete Driveways",
    shortDescription:
      "Durable, custom concrete driveways built to last. From plain gray to stamped and colored finishes.",
    image: "/images/driveway.jpg",
    metaTitle: "Concrete Driveways Madera & Fresno CA | Fuentes Concrete Inc.",
    metaDescription:
      "Custom concrete driveway installation in Madera, Fresno, Clovis & the Central Valley. 25+ years experience. Stamped, colored & standard finishes. Call (559) 673-6444.",
    heroHeading: "Concrete Driveways",
    heroSubtext: "in Madera & the Central Valley",
    description: [
      "Your driveway is the first thing people see when they visit your home. At Fuentes Concrete Inc., we build concrete driveways that combine durability with curb appeal. Whether you need a simple, clean slab or an intricately stamped and colored finish, our team delivers quality that lasts for decades.",
      "We handle every step of the process, from removing old driveways and grading the subbase to pouring, finishing, and sealing. Our driveways are built with proper reinforcement, control joints, and drainage to withstand the Central Valley heat and heavy use.",
      "Serving homeowners and builders throughout Madera, Fresno, Clovis, and surrounding communities, we take pride in delivering driveways that add real value to your property.",
    ],
    features: [
      "Standard, stamped, and colored concrete options",
      "Proper subgrade preparation and compaction",
      "Steel reinforcement and fiber mesh for strength",
      "Control joints to prevent cracking",
      "Broom, smooth, or exposed aggregate finishes",
      "Sealing and curing for long-term durability",
    ],
    process: [
      { step: "Consultation", detail: "We visit your property in Madera or the surrounding area, take measurements, and discuss your finish preferences and budget." },
      { step: "Preparation", detail: "We remove existing surfaces, grade the area, compact the subbase, and set forms with proper slope for drainage." },
      { step: "Pouring & Finishing", detail: "Our experienced crew pours the concrete, applies your chosen finish, and cuts control joints." },
      { step: "Curing & Sealing", detail: "We apply curing compound and sealant to protect your new driveway for years to come." },
    ],
    locationContent:
      "We install concrete driveways throughout the Central Valley, including Madera, Fresno, Clovis, Visalia, Merced, Modesto, and Bass Lake. Whether you are in a new subdivision in Clovis or replacing an old driveway in downtown Madera, our crew is ready to get the job done right.",
  },
  {
    slug: "concrete-patios",
    title: "Concrete Patios & Pool Decks",
    shortDescription:
      "Custom patios and pool decks that transform your outdoor living space with style and function.",
    image: "/images/patio-pool-deck.jpg",
    metaTitle: "Concrete Patios & Pool Decks Madera CA | Fuentes Concrete Inc.",
    metaDescription:
      "Custom concrete patios and pool decks in Madera, Fresno & Central Valley. Stamped, decorative & standard finishes. 25+ years experience. Call (559) 673-6444.",
    heroHeading: "Concrete Patios & Pool Decks",
    heroSubtext: "in Madera & the Central Valley",
    description: [
      "A well-built concrete patio extends your living space outdoors. Fuentes Concrete Inc. designs and pours custom patios that fit your lifestyle, from simple entertaining areas to elaborate outdoor kitchens and pool decks.",
      "The Central Valley sun demands surfaces that stay cool and slip-resistant. We offer stamped, textured, and decorative finishes that look great while standing up to summer heat and pool water. Our patios are built on properly prepared subgrades with reinforcement to prevent settling and cracking.",
      "From backyard patios in Madera neighborhoods to resort-style pool decks in Fresno and Clovis, we bring craftsmanship and attention to detail to every project.",
    ],
    features: [
      "Custom shapes, sizes, and layouts",
      "Stamped and decorative concrete patterns",
      "Slip-resistant pool deck finishes",
      "Cool deck coatings for hot Central Valley summers",
      "Integrated seating walls and fire pit pads",
      "Proper drainage and slope engineering",
    ],
    process: [
      { step: "Design & Layout", detail: "We work with you on-site to design the perfect patio or pool deck layout, including finish options and color choices." },
      { step: "Site Preparation", detail: "We excavate, grade, and compact the area, install forms, and set up reinforcement." },
      { step: "Pour & Finish", detail: "Our crew pours and finishes your patio with your chosen texture, stamps, or decorative treatment." },
      { step: "Seal & Protect", detail: "We apply premium sealant to protect against UV, water, and everyday wear." },
    ],
    locationContent:
      "We build custom patios and pool decks across the Central Valley. Homeowners in Madera, Fresno, Clovis, Visalia, and Merced trust us to create outdoor spaces that last. Whether it is a small backyard patio in Modesto or a full pool deck in Bass Lake, we deliver quality work every time.",
  },
  {
    slug: "stamped-concrete",
    title: "Stamped & Decorative Concrete",
    shortDescription:
      "Transform ordinary concrete into stunning surfaces that mimic stone, brick, tile, and wood patterns.",
    image: "/images/g3.jpg",
    metaTitle: "Stamped Concrete Madera & Fresno CA | Fuentes Concrete Inc.",
    metaDescription:
      "Expert stamped and decorative concrete in Madera, Fresno, Clovis & Central Valley. Stone, brick, tile & wood patterns. 25+ years experience. Call (559) 673-6444.",
    heroHeading: "Stamped & Decorative Concrete",
    heroSubtext: "in Madera & the Central Valley",
    description: [
      "Stamped concrete gives you the look of natural stone, brick, slate, or wood at a fraction of the cost. At Fuentes Concrete Inc., our crew has over 25 years of experience creating decorative concrete surfaces that turn heads.",
      "We offer a wide range of stamp patterns and color combinations to match your home's style. From rustic wood plank patterns for patios to elegant ashlar slate for entryways, the possibilities are endless. Our team uses professional-grade stamps, integral color, and release agents to achieve authentic, consistent results.",
      "Decorative concrete is one of our specialties, and homeowners across Madera, Fresno, and the Central Valley have trusted us to elevate their properties with stunning finishes.",
    ],
    features: [
      "Wood plank, ashlar slate, cobblestone, and brick patterns",
      "Integral color and color hardener options",
      "Antiquing and release agent techniques",
      "Borders, bands, and multi-pattern designs",
      "UV-resistant sealers for color protection",
      "Ideal for driveways, patios, walkways, and pool decks",
    ],
    process: [
      { step: "Pattern & Color Selection", detail: "We help you choose from dozens of stamp patterns and color combinations that complement your property." },
      { step: "Concrete Placement", detail: "We pour and level the concrete, then apply color hardener and release agents before stamping." },
      { step: "Stamping", detail: "Our skilled finishers press the stamp mats into the fresh concrete with precise alignment and consistent depth." },
      { step: "Detail & Seal", detail: "We wash, detail the joints, and apply high-gloss or matte sealant for a finished, protected surface." },
    ],
    locationContent:
      "Our stamped concrete work can be found on driveways, patios, and walkways throughout the Central Valley. We proudly serve Madera, Fresno, Clovis, Visalia, Merced, Modesto, and Bass Lake. If you want a decorative concrete surface that looks like it costs twice what it does, give us a call.",
  },
  {
    slug: "concrete-foundations",
    title: "Concrete Foundations",
    shortDescription:
      "Solid, code-compliant foundations for residential and commercial construction projects.",
    image: "/images/bg1.png",
    metaTitle: "Concrete Foundations Madera & Fresno CA | Fuentes Concrete Inc.",
    metaDescription:
      "Residential and commercial concrete foundations in Madera, Fresno & Central Valley. Slab-on-grade, stem walls & footings. 25+ years. Call (559) 673-6444.",
    heroHeading: "Concrete Foundations",
    heroSubtext: "in Madera & the Central Valley",
    description: [
      "Every great structure starts with a solid foundation. Fuentes Concrete Inc. builds concrete foundations that meet or exceed local building codes for homes, additions, garages, shops, and commercial buildings throughout the Central Valley.",
      "We handle all types of foundation work, including slab-on-grade, raised foundations, stem walls, and footings. Our crew works closely with your general contractor or builder to ensure proper dimensions, rebar placement, anchor bolt positioning, and concrete mix for your specific project.",
      "With over 25 years of foundation work in Madera County and beyond, we understand the local soil conditions and engineering requirements that keep your structure safe and level for decades.",
    ],
    features: [
      "Slab-on-grade and raised foundations",
      "Stem walls and continuous footings",
      "Proper rebar and anchor bolt placement",
      "Grade beam and post-tension slab systems",
      "Garage and shop slabs",
      "Code-compliant for Madera County and surrounding jurisdictions",
    ],
    process: [
      { step: "Plan Review", detail: "We review your blueprints and engineering specs, then coordinate with your builder on scheduling and access." },
      { step: "Forming & Steel", detail: "We set precision forms, install rebar per engineering plans, and place anchor bolts and hold-downs." },
      { step: "Inspection & Pour", detail: "After passing inspection, we pour and consolidate the concrete to the required specifications." },
      { step: "Strip & Finish", detail: "We strip forms, backfill as needed, and ensure the foundation is ready for framing." },
    ],
    locationContent:
      "We pour concrete foundations for new homes and commercial buildings throughout the Central Valley. Our foundation work can be seen in new developments in Madera, custom homes in Fresno and Clovis, and commercial projects in Visalia, Merced, and Modesto. We also serve the foothill communities including Bass Lake.",
  },
  {
    slug: "sidewalks-walkways",
    title: "Sidewalks & Walkways",
    shortDescription:
      "Professional sidewalks and walkways that provide safe, attractive paths for homes and businesses.",
    image: "/images/g2.jpg",
    metaTitle: "Concrete Sidewalks & Walkways Madera CA | Fuentes Concrete Inc.",
    metaDescription:
      "Concrete sidewalks and walkway installation in Madera, Fresno, Clovis & Central Valley. ADA compliant, decorative options. 25+ years. Call (559) 673-6444.",
    heroHeading: "Sidewalks & Walkways",
    heroSubtext: "in Madera & the Central Valley",
    description: [
      "Well-built sidewalks and walkways provide safe, clean paths while adding to the look of your property. Fuentes Concrete Inc. installs concrete walkways for residential homes, apartment complexes, shopping centers, and municipal projects across the Central Valley.",
      "We build walkways in standard broom finish, exposed aggregate, stamped patterns, and colored concrete. Every walkway we pour includes proper base preparation, reinforcement, control joints, and ADA-compliant slopes where required.",
      "Whether it is a front entry walkway for a home in Madera or a commercial sidewalk project in Fresno, our team delivers smooth, level surfaces that stand the test of time.",
    ],
    features: [
      "Residential and commercial walkways",
      "ADA-compliant slopes and surfaces",
      "Broom, stamped, and exposed aggregate finishes",
      "Proper control joints and expansion joints",
      "Integrated lighting conduit and borders",
      "Replacement of cracked or lifted sidewalks",
    ],
    process: [
      { step: "Assessment", detail: "We evaluate the area, check for utilities, and plan the walkway route with proper grades and drainage." },
      { step: "Excavation & Base", detail: "We remove old surfaces, excavate to the proper depth, and compact the aggregate base." },
      { step: "Form & Pour", detail: "We set forms to the correct width and grade, then pour and finish with your chosen texture." },
      { step: "Joint Cutting & Cleanup", detail: "We saw-cut or tool control joints and clean up the site, leaving you with a finished walkway." },
    ],
    locationContent:
      "Our sidewalk and walkway installations span the Central Valley, from residential properties in Madera and Clovis to commercial projects in Fresno, Visalia, and Merced. We also handle city sidewalk replacements in Modesto and walkway projects in the Bass Lake area.",
  },
  {
    slug: "retaining-walls",
    title: "Retaining Walls",
    shortDescription:
      "Engineered concrete retaining walls that manage slopes, prevent erosion, and add structure to your property.",
    image: "/images/g4.jpg",
    metaTitle: "Concrete Retaining Walls Madera & Fresno CA | Fuentes Concrete Inc.",
    metaDescription:
      "Concrete retaining wall construction in Madera, Fresno & Central Valley. Gravity, cantilever & decorative walls. 25+ years experience. Call (559) 673-6444.",
    heroHeading: "Retaining Walls",
    heroSubtext: "in Madera & the Central Valley",
    description: [
      "Retaining walls hold back earth, manage slopes, and create usable space on uneven terrain. Fuentes Concrete Inc. builds poured concrete retaining walls that provide the structural strength and longevity that block or timber walls cannot match.",
      "We construct gravity walls, cantilever walls, and decorative retaining walls for residential yards, hillside properties, commercial sites, and roadway projects. Every wall we build includes proper footing, drainage, and reinforcement designed for the soil conditions and load requirements of your specific site.",
      "From terraced backyards in the foothills near Bass Lake to level commercial pads in Fresno, we engineer and build retaining walls that perform for decades.",
    ],
    features: [
      "Gravity and cantilever wall designs",
      "Engineered footings and rebar placement",
      "Integrated drainage and weep holes",
      "Decorative form liners and finishes",
      "Terraced and multi-level wall systems",
      "Erosion control and slope stabilization",
    ],
    process: [
      { step: "Site Evaluation", detail: "We assess the slope, soil conditions, and drainage patterns to determine the right wall design." },
      { step: "Engineering & Permits", detail: "For walls over 4 feet, we coordinate with engineers and pull necessary permits." },
      { step: "Excavation & Footing", detail: "We dig the footing trench, set rebar, and pour the foundation for the wall." },
      { step: "Wall Pour & Finish", detail: "We form, pour, and finish the wall, then install drainage and backfill behind it." },
    ],
    locationContent:
      "We build concrete retaining walls across the Central Valley and into the foothills. Our retaining wall projects include residential properties in Madera, hillside homes near Bass Lake, and commercial developments in Fresno, Clovis, Visalia, Merced, and Modesto. We also serve projects in Bakersfield and Sacramento.",
  },
  {
    slug: "commercial-concrete",
    title: "Commercial Concrete",
    shortDescription:
      "Large-scale commercial concrete work for buildings, parking lots, warehouses, and more.",
    image: "/images/fuentes-company.png",
    metaTitle: "Commercial Concrete Contractor Madera & Fresno CA | Fuentes Concrete Inc.",
    metaDescription:
      "Commercial concrete contractor serving Madera, Fresno, Sacramento & Central Valley. Tilt-up, parking lots, warehouse slabs & more. Call (559) 673-6444.",
    heroHeading: "Commercial Concrete",
    heroSubtext: "Serving Bakersfield to Sacramento",
    description: [
      "Fuentes Concrete Inc. provides commercial concrete services for projects of all sizes, from small retail buildouts to large warehouse slabs and tilt-up construction. We work with general contractors, developers, and property owners throughout the Central Valley and beyond.",
      "Our commercial capabilities include building pads, parking lots, loading docks, curb and gutter, tilt-up panels, and interior floor slabs. We have the crew size, equipment, and experience to meet tight commercial schedules without compromising quality.",
      "We serve commercial projects from Bakersfield to Sacramento, including the Bay Area. Whether your project is a new strip mall in Fresno or a warehouse in Modesto, we deliver on time and on spec.",
    ],
    features: [
      "Building pads and warehouse slabs",
      "Tilt-up wall panel construction",
      "Parking lots and loading docks",
      "Curb, gutter, and site concrete",
      "Interior floor slabs with specified finishes",
      "Large crew capacity for fast-track schedules",
    ],
    process: [
      { step: "Bid & Coordination", detail: "We review plans, provide competitive bids, and coordinate with your project team on scheduling." },
      { step: "Site Work", detail: "We handle forming, steel placement, and embedded items per the project specifications." },
      { step: "Placement", detail: "We pour and finish large volumes of concrete efficiently with our experienced commercial crew." },
      { step: "Quality Control", detail: "We ensure proper curing, finishing, and testing to meet project specifications and inspection requirements." },
    ],
    locationContent:
      "Our commercial concrete work extends throughout the Central Valley and beyond. We regularly handle projects in Madera, Fresno, Clovis, Visalia, Merced, and Modesto. For commercial jobs, we also travel to Bakersfield, Sacramento, and the Bay Area. Contact us for availability on your commercial project.",
  },
  {
    slug: "concrete-stairs-steps",
    title: "Concrete Stairs & Steps",
    shortDescription:
      "Custom concrete stairs and steps for entrances, hillsides, patios, and commercial properties.",
    image: "/images/g2.jpg",
    metaTitle: "Concrete Stairs & Steps Madera & Fresno CA | Fuentes Concrete Inc.",
    metaDescription:
      "Custom concrete stairs and steps in Madera, Fresno & Central Valley. Entry steps, hillside stairs, decorative options. 25+ years. Call (559) 673-6444.",
    heroHeading: "Concrete Stairs & Steps",
    heroSubtext: "in Madera & the Central Valley",
    description: [
      "Concrete stairs and steps add function and character to your property. Fuentes Concrete Inc. builds custom concrete stairs for front entries, backyards, hillsides, and commercial buildings throughout the Central Valley.",
      "We pour stairs in a variety of styles, from simple utility steps to decorative entries with stamped treads, bullnose edges, and integrated lighting. Every set of stairs we build meets code requirements for rise, run, and handrail attachment points.",
      "Our gallery showcases custom hillside staircases, elegant front entry steps, and commercial stair systems that demonstrate the range of our capabilities. If your property in Madera, Fresno, or the surrounding area needs stairs, we can build them.",
    ],
    features: [
      "Front entry and porch steps",
      "Hillside and retaining wall stairs",
      "Stamped and decorative stair treads",
      "Bullnose and rounded edge options",
      "Code-compliant rise and run dimensions",
      "Handrail post anchors and embedments",
    ],
    process: [
      { step: "Measurement & Design", detail: "We measure the elevation change, determine the number of steps, and plan the layout with you." },
      { step: "Excavation & Forming", detail: "We build step forms with precise dimensions for consistent rise and run on every step." },
      { step: "Pour & Finish", detail: "We pour the stairs, apply your chosen finish to the treads, and tool the edges." },
      { step: "Detail Work", detail: "We strip forms, install any handrail anchors, and clean up the site." },
    ],
    locationContent:
      "We build concrete stairs and steps for residential and commercial properties throughout the Central Valley. From hillside staircases near Bass Lake to front entry steps in Madera, Fresno, Clovis, and Visalia, our crew handles stair projects of all sizes. We also serve Merced, Modesto, and communities throughout the region.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
