export interface MenuItem {
  id: string;
  name: string;
  frenchName?: string;
  category: 'starters' | 'mains' | 'signatures' | 'desserts' | 'drinks';
  price: number;
  description: string;
  ingredients: string[];
  dietary: ('Vegetarian' | 'Gluten-Free' | 'Dairy-Free' | 'Chef Selection' | 'Halal-Friendly')[];
  allergens: string[];
  winePairing: string;
  image: string;
  calories?: string;
  preparationTime?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'interior' | 'terrace' | 'cellar' | 'plating' | 'kitchen';
  image: string;
  caption: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  source: string;
  rating: number;
  date: string;
  isIllustrative: true;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'reservations' | 'dining' | 'cellar' | 'private_events';
}

export const RESTAURANT_INFO = {
  brandName: "NEXTR Lumière Bistro",
  company: "NEXTR Digital Solutions & Services",
  email: "nextrsolutions@gmail.com",
  whatsappUrl: "https://wa.me/923239943441",
  whatsappButtonText: "Visit", // STRICT REQUIREMENT: exactly "Visit", never display number
  footerCredit: "Developed by NEXTR Digital Solutions & Services",
  phoneDisplay: "Concierge Line available via inquiry",
  address: "8 Place Vendôme, 75001 Paris, France",
  city: "Paris",
  cuisine: "Haute French-Mediterranean Gastronomy",
  michelinRating: "Michelin Guide Distinction 2026",
  sommelierAward: "Wine Spectator Best of Award of Excellence",
};

export const MENU_ITEMS: MenuItem[] = [
  // --- SIGNATURES ---
  {
    id: "sig-wagyu",
    name: "A5 Miyazaki Wagyu Striploin",
    frenchName: "Faux-Filet de Wagyu A5 Caramélisé",
    category: "signatures",
    price: 135,
    description: "Charcoal-grilled Japanese A5 beef glazed in Périgord black truffle marrow jus, accompanied by golden potato mille-feuille and hand-picked micro herbs.",
    ingredients: ["Miyazaki A5 Wagyu", "Winter Black Truffles", "Yukon Gold Mille-Feuille", "Bone Marrow Reduction", "Edible 24k Gold Flakes", "Fleur de Sel de Guérande"],
    dietary: ["Chef Selection", "Gluten-Free"],
    allergens: ["Dairy"],
    winePairing: "Château Pontet-Canet Grand Cru Classé Pauillac 2014",
    image: "/src/assets/images/signature_wagyu_dish_1794223824793.jpg",
    calories: "680 kcal",
    preparationTime: "25 min"
  },
  {
    id: "sig-homard",
    name: "Brittany Blue Lobster 'Thermidor Moderne'",
    frenchName: "Homard Bleu de Bretagne au Sabayon Cognac",
    category: "signatures",
    price: 88,
    description: "Gently butter-poached wild Brittany lobster tail and claw, melted sweet leeks, tarragon-infused Cognac sabayon, and light golden gruyère crisp.",
    ingredients: ["Wild Brittany Lobster", "Hennessy XO Cognac", "Fondue de Poireaux", "Aged Gruyère AOP", "Fresh French Tarragon", "Lobster Coral Emulsion"],
    dietary: ["Chef Selection"],
    allergens: ["Shellfish", "Dairy", "Alcohol"],
    winePairing: "Meursault Premier Cru Domaine des Comtes Lafon 2020",
    image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=1200&q=80",
    calories: "520 kcal",
    preparationTime: "20 min"
  },
  {
    id: "sig-turbot",
    name: "Wild Atlantic Turbot 'Sur l'Arête'",
    frenchName: "Turbot Rôti & Caviar d'Aquitaine",
    category: "signatures",
    price: 94,
    description: "Slow-roasted Atlantic turbot fillet atop silk cauliflower purée, drenched in a Champagne beurre blanc infused with Aquitaine sturgeon caviar and sea fennel.",
    ingredients: ["Wild Turbot Fillet", "Aquitaine Sturgeon Caviar", "Champagne Drappier Reduction", "Charentes-Poitou Butter", "Sea Fennel", "Glazed Baby Turnips"],
    dietary: ["Chef Selection", "Gluten-Free"],
    allergens: ["Fish", "Dairy"],
    winePairing: "Puligny-Montrachet 1er Cru Les Folatières 2019",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    calories: "490 kcal",
    preparationTime: "22 min"
  },
  {
    id: "sig-pigeon",
    name: "Bresse Pigeon en Deux Cuissons",
    frenchName: "Pigeon Royal de Bresse Rôti & Ballotine",
    category: "signatures",
    price: 82,
    description: "Roasted breast carved pink, paired with a delicate ballotine of foie gras and thigh confit, sour Morello cherry reduction, and parsnip mousseline.",
    ingredients: ["Bresse Pigeon", "Foie Gras de Canard", "Morello Cherries", "Roasted Parsnip Purée", "Caraway Jus", "Micro Winter Sorrel"],
    dietary: ["Chef Selection"],
    allergens: ["Dairy"],
    winePairing: "Gevrey-Chambertin Domaine Denis Mortet 2017",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    calories: "580 kcal",
    preparationTime: "28 min"
  },

  // --- STARTERS ---
  {
    id: "st-scallop",
    name: "Hokkaido Scallop Crudo",
    frenchName: "Carpaccio de Saint-Jacques & Agrumes",
    category: "starters",
    price: 36,
    description: "Sashimi-grade sea scallops delicately sliced with blood orange granita, Oscietra caviar beads, wild fennel pollen, and cold-pressed Kalamata olive nectar.",
    ingredients: ["Hokkaido Diver Scallops", "Sicilian Blood Orange", "Oscietra Caviar", "Wild Fennel Pollen", "Finger Lime", "Chive Blossom"],
    dietary: ["Gluten-Free", "Halal-Friendly"],
    allergens: ["Molluscs"],
    winePairing: "Sancerre Blanc Domaine Vacheron 2022",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=1200&q=80",
    calories: "240 kcal",
    preparationTime: "12 min"
  },
  {
    id: "st-foie-gras",
    name: "Pan-Seared Duck Foie Gras",
    frenchName: "Escalope de Foie Gras Poêlée & Cerises",
    category: "starters",
    price: 42,
    description: "Caramelized Périgord duck liver served over warm toasted brioche feuilletée, infused with tart cherry balsamic gastrique and crushed Piedmont hazelnuts.",
    ingredients: ["Périgord Duck Foie Gras", "Feuilletée Brioche", "Sour Black Cherries", "Aged Balsamic Gastrique", "Roasted Piedmont Hazelnuts"],
    dietary: ["Chef Selection"],
    allergens: ["Dairy", "Gluten", "Nuts"],
    winePairing: "Château d'Yquem Premier Cru Supérieur Sauternes 2011",
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80",
    calories: "460 kcal",
    preparationTime: "15 min"
  },
  {
    id: "st-asparagus-tart",
    name: "Morel Mushroom & White Asparagus Tartlet",
    frenchName: "Tartelette aux Asperges Blanches & Morilles",
    category: "starters",
    price: 32,
    description: "Crispy crisp pastry crust cradling braised Provence white asparagus, fresh wild morel mushrooms, 36-month Comté cheese foam, and flowering chervil.",
    ingredients: ["Provence White Asparagus", "Wild Morel Mushrooms", "36-Month Aged Comté AOP", "Vin Jaune Foam", "Flaky Herb Pastry"],
    dietary: ["Vegetarian"],
    allergens: ["Gluten", "Dairy"],
    winePairing: "Jura Vin Jaune Domaine Macle 2014",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
    calories: "310 kcal",
    preparationTime: "14 min"
  },
  {
    id: "st-langoustine",
    name: "Carpaccio de Langoustine Royale",
    frenchName: "Langoustine Bretonne & Perles de Yuzu",
    category: "starters",
    price: 44,
    description: "Brittany imperial langoustine thinly pressed with preserved Japanese yuzu gel, crunchy sea asparagus, white truffle oil droplets, and purple shiso.",
    ingredients: ["Breton Langoustine", "Yuzu Citrus Pearls", "Sea Asparagus", "White Truffle Essence", "Purple Shiso Cress"],
    dietary: ["Gluten-Free"],
    allergens: ["Shellfish"],
    winePairing: "Chablis Grand Cru Les Clos Domaine William Fèvre 2021",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=1200&q=80",
    calories: "210 kcal",
    preparationTime: "10 min"
  },

  // --- MAINS ---
  {
    id: "main-seabass",
    name: "Mediterranean Loup de Mer",
    frenchName: "Loup de Mer Rôti & Bouillabaisse Émulsionnée",
    category: "mains",
    price: 58,
    description: "Crispy skin Mediterranean sea bass served with a saffron-infused bouillabaisse velouté, confit baby fennel, crushed fingerling potatoes, and samphire.",
    ingredients: ["Wild Mediterranean Sea Bass", "Spanish Saffron", "Bouillabaisse Fumet", "Confit Heirloom Fennel", "Raté Potatoes", "Rock Samphire"],
    dietary: ["Gluten-Free", "Halal-Friendly"],
    allergens: ["Fish", "Dairy"],
    winePairing: "Condrieu Domaine Georges Vernay 'Coteau de Vernon' 2020",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=1200&q=80",
    calories: "480 kcal",
    preparationTime: "22 min"
  },
  {
    id: "main-canard",
    name: "Dry-Aged Challans Duck Breast",
    frenchName: "Magret de Canard de Challans Rôti au Miel de Lavande",
    category: "mains",
    price: 64,
    description: "14-day dry-aged duck breast glazed with organic lavender mountain honey, roasted ruby beetroot variations, and blackcurrant peppercorn reduction.",
    ingredients: ["Challans Duck Breast", "Provence Lavender Honey", "Roasted Heritage Beetroots", "Cassis Liqueur Jus", "Crisp Duck Skin Crumb"],
    dietary: ["Gluten-Free"],
    allergens: ["Dairy"],
    winePairing: "Châteauneuf-du-Pape Domaine du Vieux Télégraphe 2018",
    image: "https://images.unsplash.com/photo-1514944298352-df3d85408b02?auto=format&fit=crop&w=1200&q=80",
    calories: "620 kcal",
    preparationTime: "24 min"
  },
  {
    id: "main-risotto",
    name: "Acquerello Risotto aux Morilles & Truffes",
    frenchName: "Risotto Acquerello Crémeux aux Morilles et Truffe Noire",
    category: "mains",
    price: 52,
    description: "7-year aged Carnaroli rice simmered in roasted mushroom fumet, finished with Normandy double butter, aged 30-month Parmigiano Reggiano, and black winter truffles.",
    ingredients: ["Acquerello Carnaroli Rice", "Périgord Black Truffle", "Wild Foraged Morels", "Parmigiano Reggiano Stravecchio", "Normandy Cultured Butter"],
    dietary: ["Vegetarian", "Gluten-Free"],
    allergens: ["Dairy"],
    winePairing: "Barolo Monprivato Giuseppe Mascarello 2016",
    image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=1200&q=80",
    calories: "560 kcal",
    preparationTime: "20 min"
  },
  {
    id: "main-veal",
    name: "Milk-Fed Pyrenean Veal Mignon",
    frenchName: "Mignon de Veau Sous la Mère & Jus Corsé",
    category: "mains",
    price: 68,
    description: "Tender milk-fed Pyrenean veal cooked sous-vide and caramelized, served with glazed chanterelles, silky sunchoke mousseline, and Madeira reduction.",
    ingredients: ["Pyrenean Milk-Fed Veal", "Golden Chanterelles", "Jerusalem Artichoke Puree", "Madeira Wine Glaze", "Wild Thyme"],
    dietary: ["Gluten-Free"],
    allergens: ["Dairy", "Alcohol"],
    winePairing: "Pomerol Château Nénin 2015",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    calories: "540 kcal",
    preparationTime: "25 min"
  },

  // --- DESSERTS ---
  {
    id: "des-souffle",
    name: "Warm Soufflé au Grand Marnier",
    frenchName: "Soufflé Flambé au Grand Marnier & Crème Anglaise",
    category: "desserts",
    price: 26,
    description: "Feather-light Grand Marnier orange liqueur soufflé baked to order, pierced tableside with cold Tahitian bourbon vanilla bean crème anglaise.",
    ingredients: ["Grand Marnier Cuvée Louis-Alexandre", "Tahitian Vanilla Bean", "Pastured Organic Egg Whites", "Orange Zest Confit", "Powdered Sugar"],
    dietary: ["Vegetarian"],
    allergens: ["Dairy", "Eggs", "Alcohol"],
    winePairing: "Château Guiraud 1er Grand Cru Classé Sauternes 2016",
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=1200&q=80",
    calories: "380 kcal",
    preparationTime: "18 min"
  },
  {
    id: "des-chocolat",
    name: "Lumière Chocolate Sphère Noire",
    frenchName: "Sphère Chocolat Valrhona 72% & Caramel Fumé",
    category: "desserts",
    price: 28,
    description: "Dark Valrhona Guanaja 72% cocoa shell filled with hazelnut praline mousse and smoked salted butter caramel, melted tableside with hot spiced ganache.",
    ingredients: ["Valrhona Guanaja 72%", "Piedmont Hazelnut Praline", "Isigny Ste Mère Salted Caramel", "Cocoa Nib Tuile", "Edible Gold Dust"],
    dietary: ["Vegetarian"],
    allergens: ["Dairy", "Nuts"],
    winePairing: "Banyuls Grand Cru Domaine du Mas Blanc 2013",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=1200&q=80",
    calories: "490 kcal",
    preparationTime: "12 min"
  },
  {
    id: "des-millefeuille",
    name: "Caramelized Tahitian Vanilla Mille-Feuille",
    frenchName: "Mille-Feuille Croustillant Vanille Bourbon",
    category: "desserts",
    price: 24,
    description: "Ultra-crisp caramelized puff pastry layered with silky Tahitian vanilla diplomat cream and topped with fine spun sugar and candied pecans.",
    ingredients: ["Caramelized Feuilletage", "Tahitian Vanilla Bean Diplomat Cream", "Salted Butter Caramel Drizzle", "Candied Pecans"],
    dietary: ["Vegetarian"],
    allergens: ["Gluten", "Dairy", "Nuts"],
    winePairing: "Muscat de Beaumes-de-Venise Domaine des Bernardins 2021",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
    calories: "410 kcal",
    preparationTime: "10 min"
  },
  {
    id: "des-pavlova",
    name: "Wild Forest Pavlova Moderne",
    frenchName: "Pavlova Légère aux Mûres & Framboises Sauvages",
    category: "desserts",
    price: 22,
    description: "Crispy meringue shell filled with whipped mascarpone lime chantilly, macerated wild blackberries, fresh red raspberries, and crystalized mint leaves.",
    ingredients: ["Crisp French Meringue", "Wild Forest Blackberries & Raspberries", "Lime Zest Mascarpone Chantilly", "Hibiscus Flower Gelée"],
    dietary: ["Vegetarian", "Gluten-Free"],
    allergens: ["Dairy", "Eggs"],
    winePairing: "Billecart-Salmon Brut Rosé Champagne",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1200&q=80",
    calories: "320 kcal",
    preparationTime: "10 min"
  },

  // --- DRINKS & CELLAR ---
  {
    id: "dr-lumiere-royale",
    name: "Cocktail Lumière Royale",
    frenchName: "Champagne Vintage & Or 24 Carats",
    category: "drinks",
    price: 28,
    description: "Prestige Cuvée Champagne, Saint-Germain elderflower liqueur, distilled white peach nectar, 24-karat gold leaf flake, and atomized Meyer lemon zest.",
    ingredients: ["Vintage Champagne", "St. Germain Elderflower", "White Peach Nectar", "Edible 24k Gold", "Meyer Lemon Essence"],
    dietary: ["Gluten-Free"],
    allergens: ["Alcohol"],
    winePairing: "Aperitif recommendation",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80",
    calories: "160 kcal",
    preparationTime: "5 min"
  },
  {
    id: "dr-smoke-old-fashion",
    name: "Smoked Cedar Vieux Carré",
    frenchName: "Vieux Carré au Bois de Cèdre Fumé",
    category: "drinks",
    price: 32,
    description: "Rémy Martin 1738 Cognac, Michter's Single Barrel Rye, Carpano Antica Formula Vermouth, Bénédictine, Peychaud's bitters, infused with smoked Lebanese cedar wood.",
    ingredients: ["Rémy Martin Cognac", "Michter's Rye Whiskey", "Carpano Antica Vermouth", "Bénédictine Liqueur", "Cedar Smoke Infusion"],
    dietary: ["Gluten-Free"],
    allergens: ["Alcohol"],
    winePairing: "Digestif & cigar pairing",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80",
    calories: "195 kcal",
    preparationTime: "6 min"
  },
  {
    id: "dr-non-alcoholic",
    name: "Jardin Botanique Éthéré (Zero-Proof)",
    frenchName: "Infusion Florale & Pamplemousse Rose Clarifié",
    category: "drinks",
    price: 18,
    description: "Artisanal non-alcoholic creation: French mountain botanicals distilled without alcohol, clarified ruby grapefruit, bergamot, and sparkling wild rosemary water.",
    ingredients: ["Distilled Herbal Botanical Water", "Clarified Pink Grapefruit", "Bergamot Citrus Oil", "Wild Mountain Rosemary", "Artisanal Tonic"],
    dietary: ["Gluten-Free", "Vegetarian", "Halal-Friendly"],
    allergens: [],
    winePairing: "Non-alcoholic gastronomic pairing",
    image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=1200&q=80",
    calories: "75 kcal",
    preparationTime: "4 min"
  },
  {
    id: "dr-wine-margaux",
    name: "Château Margaux Premier Grand Cru Classé 2015",
    frenchName: "Bouteille Grand Format — Cellier Privé",
    category: "drinks",
    price: 680,
    description: "Legendary Bordeaux appellation offering an ethereal bouquet of dark cassis, crushed violets, dried tobacco leaves, cedarwood, and ultra-fine silky tannins.",
    ingredients: ["Cabernet Sauvignon 87%", "Merlot 8%", "Cabernet Franc 3%", "Petit Verdot 2%"],
    dietary: ["Gluten-Free"],
    allergens: ["Sulphites", "Alcohol"],
    winePairing: "Pairs with A5 Wagyu & Bresse Pigeon",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
    calories: "125 kcal / glass",
    preparationTime: "Cellar decanting 45 min"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "The Grand Dining Salon",
    category: "interior",
    image: "/src/assets/images/hero_lumiere_dining_1794223824744.jpg",
    caption: "The majestic vaulted dining room beneath hand-crafted crystal chandeliers, dressed in Belgian linen and polished brass."
  },
  {
    id: "gal-2",
    title: "Le Starlit Garden Terrace",
    category: "terrace",
    image: "/src/assets/images/patio_terrace_evening_1794223825649.jpg",
    caption: "Al fresco starlit dining among century-old olive trees, ambient brass lanterns, and gentle Parisian evening breezes."
  },
  {
    id: "gal-3",
    title: "Executive Chef at the Pass",
    category: "kitchen",
    image: "/src/assets/images/executive_chef_portrait_1794223826767.jpg",
    caption: "Chef Jean-Luc Laurent meticulously plating the evening's signature creations during the dinner service."
  },
  {
    id: "gal-4",
    title: "A5 Miyazaki Striploin Artistry",
    category: "plating",
    image: "/src/assets/images/signature_wagyu_dish_1794223824793.jpg",
    caption: "Hand-carved A5 Wagyu striploin with potato mille-feuille and Périgord black truffle marrow jus on textured ceramic."
  },
  {
    id: "gal-5",
    title: "The Private Sommelier Cellar",
    category: "cellar",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
    caption: "Temperature-regulated vaulted cellar harboring over 1,400 rare vintage bottles from Bordeaux, Burgundy, and Champagne."
  },
  {
    id: "gal-6",
    title: "The Chef's Intimate Counter",
    category: "interior",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
    caption: "Six exclusive ringside seats overlooking the brigade as they fire and assemble multi-course degustation menus."
  },
  {
    id: "gal-7",
    title: "Brittany Blue Lobster Plating",
    category: "plating",
    image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&w=1200&q=80",
    caption: "Butter-poached Brittany lobster tail paired with Cognac tarragon sabayon and glazed sweet leeks."
  },
  {
    id: "gal-8",
    title: "Twilight Terrace Cocktails",
    category: "terrace",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    caption: "Bespoke welcome cocktails served on the heated limestone terrace before transitioning to the grand salon."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    quote: "Lumière Bistro achieves that rare alchemy where French classical rigour dances effortlessly with contemporary lightness. The Wagyu and lobster compositions are simply extraordinary.",
    author: "Michelin Guide Inspector",
    title: "Gastronomic Editorial Selection",
    source: "Michelin Guide Evaluation",
    rating: 5,
    date: "Autumn 2026",
    isIllustrative: true
  },
  {
    id: "test-2",
    quote: "A masterclass in restraint, hospitality, and cellar depth. The starlit terrace transports you into an intimate Parisian sanctuary far from the city frenzy.",
    author: "Éléonore de Saint-Germain",
    title: "Senior Gastronomy Critic",
    source: "Le Figaro Art & Table",
    rating: 5,
    date: "September 2026",
    isIllustrative: true
  },
  {
    id: "test-3",
    quote: "We celebrated our tenth anniversary at the Chef's Salon. The personalized sommelier pairings and the warm soufflé tableside presentation will remain etched in our memories forever.",
    author: "Alexander & Camille Vance",
    title: "Private Dining Patrons",
    source: "Verified Dining Reflection",
    rating: 5,
    date: "October 2026",
    isIllustrative: true
  }
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-dress",
    question: "What is the dress code for dining at NEXTR Lumière Bistro?",
    answer: "We kindly request Elegant & Smart Casual attire. Gentlemen are requested to wear collared shirts and tailored trousers; jackets are celebrated but not strictly mandatory. We politely decline athletic sportswear, casual shorts, beachwear, and flip-flops in the main dining salon.",
    category: "dining"
  },
  {
    id: "faq-valet",
    question: "Is valet parking available on arrival?",
    answer: "Yes. Our private white-glove valet concierge is situated at the main carriage entrance on Place Vendôme 30 minutes prior to service opening through the conclusion of the evening.",
    category: "dining"
  },
  {
    id: "faq-allergies",
    question: "How do you accommodate severe food allergies and dietary preferences?",
    answer: "Our culinary brigade excels at tailoring tasting courses for gluten-free, dairy-free, vegetarian, pescatarian, and Halal dining requests. Please specify any dietary restrictions when completing your reservation so Chef Laurent can curate appropriate bespoke pairings.",
    category: "dining"
  },
  {
    id: "faq-corkage",
    question: "What is your wine corkage policy?",
    answer: "Guests may bring up to two 750ml bottles of personal collector vintage wine per party, provided the specific vintage is not listed on our extensive 1,400-label cellar menu. The corkage service fee is $75 per 750ml bottle, which covers stemware preparation and sommelier decanting.",
    category: "cellar"
  },
  {
    id: "faq-seating",
    question: "Can I choose between the Grand Salon and the Starlit Patio?",
    answer: "Yes! During reservation booking, you can select your preferred seating area: The Grand Dining Salon, Le Starlit Patio Terrace, The Chef's Interactive Counter, or The Private Sommelier Salon. Seating is confirmed based on availability and weather conditions.",
    category: "reservations"
  },
  {
    id: "faq-demo",
    question: "Is this website an active restaurant booking system?",
    answer: "This website is an interactive luxury digital demonstration developed exclusively by NEXTR Digital Solutions & Services to showcase state-of-the-art restaurant web architecture. Reservations made on this demo are fully simulated for experience evaluation—no actual table is booked and no payment is collected.",
    category: "reservations"
  }
];

export const SERVICE_HOURS = [
  { day: "Tuesday – Friday", lunch: "12:00 PM – 2:30 PM", dinner: "6:00 PM – 11:00 PM", note: "A La Carte & 5-Course Degustation" },
  { day: "Saturday", lunch: "12:00 PM – 3:00 PM", dinner: "5:30 PM – 11:30 PM", note: "Chef's 7-Course Grand Prestige Menu" },
  { day: "Sunday", lunch: "11:30 AM – 3:30 PM", dinner: "6:00 PM – 10:00 PM", note: "Champagne Degustation Brunch & Evening Soirée" },
  { day: "Monday", lunch: "Closed", dinner: "Closed", note: "Private Cellar Tastings & Culinary Research" }
];
