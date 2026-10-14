# HarborSpan Logistics — Modern Freight & Supply Chain Website

HarborSpan Logistics is a commercial freight transportation and supply chain management web application built with **React**, **Vite**, and **Tailwind CSS**.

![HarborSpan Logistics](public/assets/branding/harborspan-logo.png)

## Overview

- **Business:** HarborSpan Logistics (Houston, Texas)
- **Tagline:** Smart Freight. Reliable Delivery.
- **Services:** Road Freight (FTL/LTL), Air Freight Expedited Charters, Ocean Freight Containerized Cargo, Intermodal Coordination.
- **Features:**
  - Modern single-page responsive layout
  - Photorealistic suspended shipping container hero visual with scroll-driven parallax
  - Restored minimalist maritime vessel illustration with entrance animation and floating cycle
  - Interactive quote estimate modal with automated distance and rate calculations
  - Interactive Google Maps integration with Houston logistics gateway
  - Animated key metric counters (`12K+`, `350+`, `99.2%`)
  - Staggered scroll-triggered reveals across all sections
  - Interactive FAQ accordion
  - Freight inquiry form with real-time field validation

---

## Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite 5
- **Styling:** Tailwind CSS 3 with PostCSS and Autoprefixer
- **Icons:** Lucide React
- **Typography:** Inter (`@fontsource` / Google Fonts)

---

## Getting Started

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` or `yarn`

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/janjanwhy-oss/harborspan-logistics.git
cd harborspan-logistics
npm install
```

### 3. Development Server
Start the local development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Production Build
Create an optimized production build:
```bash
npm run build
```
Preview the production build locally:
```bash
npm run preview
```

---

## Project Structure

```
harborspan-logistics/
├── public/
│   ├── assets/
│   │   ├── branding/           # HarborSpan logo assets
│   │   ├── hero/               # Suspended coral container visual
│   │   └── services/           # Road, Air, and Ocean freight photography
│   ├── favicon.png
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AboutUs.jsx         # About section, boat illustration & counters
│   │   ├── Advantages.jsx      # Key value propositions & features
│   │   ├── ContactMap.jsx      # Interactive map & freight inquiry form
│   │   ├── FAQ.jsx             # Accordion support FAQ
│   │   ├── FinalCTA.jsx        # Bottom action banner & footer links
│   │   ├── Footer.jsx          # Copyright and branding
│   │   ├── Hero.jsx            # Suspended container hero with parallax
│   │   ├── Navbar.jsx          # Header navigation & quote trigger
│   │   ├── Process.jsx         # 3-step shipping workflow
│   │   ├── QuoteModal.jsx      # Interactive rate & quote modal
│   │   ├── Services.jsx        # Service cards with hover/focus
│   │   └── Testimonials.jsx    # Shipper feedback and reviews
│   ├── data/                   # Structured mock data for services, FAQs, etc.
│   ├── hooks/
│   │   └── useInView.js        # IntersectionObserver & RAF counter hooks
│   ├── App.jsx                 # Root layout and modal state
│   ├── index.css               # Tailwind directives & custom keyframes
│   └── main.jsx                # Application entry point
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## License

This project is licensed under the MIT License.
