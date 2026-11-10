# NEXTR Lumière Bistro — Luxury Restaurant Website Demo

A high-end, responsive luxury restaurant website demonstration developed for **NEXTR Digital Solutions & Services**. Built with modern React, TypeScript, and Tailwind CSS, featuring French-Mediterranean gastronomy, seasonal tasting menus, sommelier cellar pairings, and an interactive simulated reservation engine.

---

## 🌟 Brand & Contact Details

- **Brand:** NEXTR Lumière Bistro
- **Company:** NEXTR Digital Solutions & Services
- **Email:** [nextrsolutions@gmail.com](mailto:nextrsolutions@gmail.com)
- **WhatsApp Concierge:** [Visit](https://wa.me/923239943441)
- **Footer Credit:** *Developed by NEXTR Digital Solutions & Services*

---

## ✨ Features & Architecture

1. **Full-Screen Restaurant Hero**
   - High-fidelity ambient imagery of the Grand Dining Salon under glowing crystal chandeliers.
   - Accolades ribbon highlighting Michelin Guide recognition, 1,400+ label cellar collection, and al fresco terrace.
   - Dual call-to-action buttons for table booking and menu exploration.

2. **About the Restaurant**
   - The culinary philosophy combining classical French technique with vibrant Mediterranean terroir.
   - Editorial three-pillar breakdown: *Terroir & Pristine Provenance*, *The 1,400 Grand Cru Cellar*, and *Tableside Sensory Theater*.
   - Authentic portrait of Executive Chef Jean-Luc Laurent at the kitchen pass.

3. **Signature Dishes Showcase**
   - Spotlights iconic creations such as the A5 Miyazaki Wagyu Striploin, Brittany Blue Lobster Thermidor, and Wild Atlantic Turbot.
   - Sommelier wine pairing notes and one-click detailed dish inspection.

4. **Food & Drinks Menu with Category Filters**
   - Interactive segmented filter tabs: *Complete Menu*, *Chef's Signatures*, *Hors d'œuvres*, *Les Plats Principaux*, *Douceurs & Desserts*, and *Cocktails & Cellar*.
   - Live search input matching dish names, ingredients, French titles, or preparations.
   - Dietary filters for *Gluten-Free*, *Vegetarian*, and *Chef's Pick*.

5. **Dish Detail Modal**
   - In-depth culinary breakdown showing ingredients list, allergens, prep time, estimated calories, and sommelier vintage recommendation.
   - *"Reserve with this Dish"* action that seamlessly carries the dish into the reservation form notes.

6. **Filterable Restaurant Gallery & Lightbox**
   - Categories: *All Perspectives*, *Grand Salon*, *Starlit Terrace*, *Chef's Brigade*, *Haute Plating*, and *Private Cellar*.
   - Fullscreen Lightbox viewer with captioning and keyboard/mouse next/previous navigation.

7. **Chef Introduction**
   - Profile of Executive Head Chef Jean-Luc Laurent (former 3-star Michelin brigade leader).
   - Accolades including *Meilleur Ouvrier de France Finalist* and *Ordre du Mérite Agricole*.
   - Spotlight on Executive Pastry Chef Hélène Mercier.

8. **Interactive Table Reservation Engine (Simulated)**
   - Seating zone selector: *Indoor Grand Dining Room*, *Starlit Patio / Terrace*, *Chef's Interactive Counter*, or *Private Wine Salon*.
   - Party size selector (1 to 12+ guests) and calendar date picker.
   - Service time selector split into *Dinner Service* and *Lunch Service*.
   - Occasion selector: *Romantic Date*, *Anniversary*, *Birthday*, *Business Dining*, *Degustation Discovery*.
   - Instant local confirmation modal with simulated reservation code (e.g. `LUM-2026-XXXX`).
   - Export to **.ICS calendar invite** file generation.
   - One-click copy summary to clipboard.
   - Local browser caching in `localStorage`.
   - Explicit disclaimer indicating simulated evaluation.

9. **Guest Testimonials**
   - Distinctly marked as *Illustrative Demonstrations* for portfolio showcase.
   - Quotes from Michelin inspectors, Le Figaro food critics, and private patrons.

10. **Opening Hours & Etiquette Guide**
    - Weekly lunch and dinner timetable, dress code recommendations (Smart Elegant), and complimentary white-glove valet concierge guidelines.

11. **FAQ & Contact Section**
    - Expandable luxury FAQ accordions.
    - Concierge inquiry message transmitter.
    - Direct contact links including email and WhatsApp button with required exact text **Visit**.

---

## 🚀 Production Web Deployment

This website is a 100% static frontend application built with standard HTML, CSS, JavaScript, and TypeScript that compiles cleanly for any modern web hosting service or static content delivery network.

### Build and Deploy Steps

1. Install dependencies:
   ```bash
   npm install
   ```

2. Compile the production build:
   ```bash
   npm run build
   ```

3. Deploy the compiled assets:
   - The compiled static website is generated in the `dist` directory.
   - Point your static web hosting provider, edge CDN, or static server root to `dist/`.
   - Ensure the server serves `index.html` for single-page routing if needed.

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start local development server on port 3000
npm run dev

# Run TypeScript and linter checks
npm run lint

# Build production bundle
npm run build
```

---

## 📄 License & Attribution

Developed by **NEXTR Digital Solutions & Services** for luxury hospitality demonstration purposes.
All dining reservations are simulated.
