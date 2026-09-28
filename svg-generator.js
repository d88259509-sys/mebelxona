/**
 * Mebelxona Furniture SVG Generator
 * Generates lightweight, offline vector illustrations with dynamic colors and textures
 */
(function() {
  function getMaterialPattern(material) {
    if (material === 'oak') return 'rgba(212, 163, 115, 0.15)';
    if (material === 'walnut') return 'rgba(74, 55, 40, 0.2)';
    if (material === 'pine') return 'rgba(230, 204, 163, 0.15)';
    if (material === 'leather') return 'rgba(120, 80, 50, 0.25)';
    if (material === 'velvet') return 'rgba(255, 255, 255, 0.08)';
    return 'rgba(0, 0, 0, 0.05)';
  }

  function renderSofaSVG(color, accentColor) {
    const col = color || '#d4a373';
    const acc = accentColor || '#b07d50';
    return `
      <svg viewBox="0 0 320 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <!-- Floor Shadow -->
        <ellipse cx="160" cy="200" rx="125" ry="12" fill="rgba(0,0,0,0.15)" />
        <!-- Wooden Tapered Legs -->
        <line x1="60" y1="170" x2="48" y2="198" stroke="${acc}" stroke-width="7" stroke-linecap="round" />
        <line x1="260" y1="170" x2="272" y2="198" stroke="${acc}" stroke-width="7" stroke-linecap="round" />
        <line x1="105" y1="170" x2="98" y2="198" stroke="${acc}" stroke-width="6" stroke-linecap="round" opacity="0.8" />
        <line x1="215" y1="170" x2="222" y2="198" stroke="${acc}" stroke-width="6" stroke-linecap="round" opacity="0.8" />
        <!-- Main Backrest -->
        <rect x="50" y="60" width="220" height="95" rx="18" fill="${col}" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.1))" />
        <!-- Backrest Tufting Lines -->
        <line x1="120" y1="75" x2="120" y2="135" stroke="rgba(0,0,0,0.15)" stroke-width="2" stroke-dasharray="8 6" />
        <line x1="160" y1="75" x2="160" y2="135" stroke="rgba(0,0,0,0.15)" stroke-width="2" stroke-dasharray="8 6" />
        <line x1="200" y1="75" x2="200" y2="135" stroke="rgba(0,0,0,0.15)" stroke-width="2" stroke-dasharray="8 6" />
        <!-- Seat Cushions (Double layer) -->
        <rect x="42" y="130" width="116" height="42" rx="12" fill="${col}" filter="brightness(1.08)" />
        <rect x="162" y="130" width="116" height="42" rx="12" fill="${col}" filter="brightness(1.08)" />
        <!-- Rounded Armrests -->
        <rect x="30" y="90" width="28" height="82" rx="14" fill="${col}" filter="brightness(0.92)" />
        <rect x="262" y="90" width="28" height="82" rx="14" fill="${col}" filter="brightness(0.92)" />
        <!-- Accent Throw Pillows -->
        <rect x="58" y="110" width="36" height="36" rx="8" transform="rotate(-12 58 110)" fill="${acc}" opacity="0.9" />
        <rect x="230" y="112" width="34" height="34" rx="8" transform="rotate(15 230 112)" fill="#faedcd" opacity="0.95" />
      </svg>
    `;
  }

  function renderBedSVG(color, accentColor) {
    const col = color || '#d4a373';
    const acc = accentColor || '#b07d50';
    return `
      <svg viewBox="0 0 320 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="160" cy="202" rx="130" ry="12" fill="rgba(0,0,0,0.15)" />
        <!-- Wooden Bed Legs -->
        <rect x="45" y="180" width="12" height="24" rx="4" fill="${acc}" />
        <rect x="263" y="180" width="12" height="24" rx="4" fill="${acc}" />
        <!-- Tall Upholstered / Wood Headboard -->
        <rect x="50" y="42" width="220" height="110" rx="14" fill="${col}" />
        <!-- Vertical Wood Slats / Channel Tufting -->
        <line x1="85" y1="45" x2="85" y2="150" stroke="rgba(0,0,0,0.12)" stroke-width="3" />
        <line x1="122" y1="45" x2="122" y2="150" stroke="rgba(0,0,0,0.12)" stroke-width="3" />
        <line x1="160" y1="45" x2="160" y2="150" stroke="rgba(0,0,0,0.12)" stroke-width="3" />
        <line x1="198" y1="45" x2="198" y2="150" stroke="rgba(0,0,0,0.12)" stroke-width="3" />
        <line x1="235" y1="45" x2="235" y2="150" stroke="rgba(0,0,0,0.12)" stroke-width="3" />
        <!-- Platform Frame Base -->
        <rect x="40" y="160" width="240" height="26" rx="6" fill="${acc}" />
        <!-- Mattress & Duvet -->
        <rect x="50" y="125" width="220" height="42" rx="10" fill="#fdfbf7" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))" />
        <path d="M50 145 Q160 140 270 145 L270 167 L50 167 Z" fill="${col}" opacity="0.85" />
        <!-- Two Fluffy Pillows -->
        <rect x="68" y="105" width="80" height="26" rx="8" fill="#ffffff" filter="drop-shadow(0 2px 3px rgba(0,0,0,0.12))" />
        <rect x="172" y="105" width="80" height="26" rx="8" fill="#ffffff" filter="drop-shadow(0 2px 3px rgba(0,0,0,0.12))" />
        <!-- Pillow fold accent -->
        <line x1="108" y1="105" x2="108" y2="131" stroke="rgba(0,0,0,0.08)" stroke-width="2" />
        <line x1="212" y1="105" x2="212" y2="131" stroke="rgba(0,0,0,0.08)" stroke-width="2" />
      </svg>
    `;
  }

  function renderTableSVG(color, accentColor) {
    const col = color || '#d4a373';
    const acc = accentColor || '#b07d50';
    return `
      <svg viewBox="0 0 320 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="160" cy="200" rx="120" ry="10" fill="rgba(0,0,0,0.14)" />
        <!-- Tapered Sturdy Wood / Metal Legs -->
        <line x1="68" y1="110" x2="52" y2="198" stroke="${acc}" stroke-width="12" stroke-linecap="round" />
        <line x1="252" y1="110" x2="268" y2="198" stroke="${acc}" stroke-width="12" stroke-linecap="round" />
        <line x1="110" y1="110" x2="100" y2="195" stroke="${acc}" stroke-width="10" stroke-linecap="round" opacity="0.85" />
        <line x1="210" y1="110" x2="220" y2="195" stroke="${acc}" stroke-width="10" stroke-linecap="round" opacity="0.85" />
        <!-- Leg Stretcher / Crossbar -->
        <line x1="75" y1="170" x2="245" y2="170" stroke="${acc}" stroke-width="6" stroke-linecap="round" opacity="0.9" />
        <!-- Apron / Sub-frame -->
        <rect x="48" y="105" width="224" height="15" rx="3" fill="${acc}" />
        <!-- Solid Beveled Tabletop with Natural Grain -->
        <path d="M28 105 L52 92 L268 92 L292 105 Z" fill="${col}" filter="brightness(1.1)" />
        <rect x="28" y="105" width="264" height="14" rx="4" fill="${col}" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.18))" />
        <!-- Tabletop Wood Grain lines -->
        <line x1="70" y1="99" x2="250" y2="99" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" />
        <!-- Ceramic Vase on Table -->
        <ellipse cx="160" cy="88" rx="8" ry="4" fill="#ffffff" />
        <path d="M154 88 C152 75, 168 75, 166 88 Z" fill="#faedcd" />
        <line x1="160" y1="74" x2="160" y2="58" stroke="#3b5343" stroke-width="2" />
        <circle cx="160" cy="56" r="4" fill="#3b5343" />
      </svg>
    `;
  }

  function renderChairSVG(color, accentColor) {
    const col = color || '#d4a373';
    const acc = accentColor || '#b07d50';
    return `
      <svg viewBox="0 0 320 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="160" cy="202" rx="75" ry="9" fill="rgba(0,0,0,0.15)" />
        <!-- Back Wooden Spindles / Frame -->
        <line x1="110" y1="52" x2="122" y2="140" stroke="${acc}" stroke-width="6" stroke-linecap="round" />
        <line x1="210" y1="52" x2="198" y2="140" stroke="${acc}" stroke-width="6" stroke-linecap="round" />
        <line x1="135" y1="56" x2="142" y2="140" stroke="${acc}" stroke-width="4" stroke-linecap="round" />
        <line x1="160" y1="58" x2="160" y2="140" stroke="${acc}" stroke-width="4" stroke-linecap="round" />
        <line x1="185" y1="56" x2="178" y2="140" stroke="${acc}" stroke-width="4" stroke-linecap="round" />
        <!-- Curved Crest Rail / Backrest Top -->
        <path d="M102 52 C125 40, 195 40, 218 52 C210 60, 110 60, 102 52 Z" fill="${col}" />
        <!-- Ergonomic Seat Cushion -->
        <ellipse cx="160" cy="142" rx="60" ry="18" fill="${col}" filter="drop-shadow(0 3px 5px rgba(0,0,0,0.2))" />
        <ellipse cx="160" cy="139" rx="56" ry="15" fill="${col}" filter="brightness(1.1)" />
        <!-- Splayed Legs with Brass Caps -->
        <line x1="120" y1="145" x2="98" y2="200" stroke="${acc}" stroke-width="8" stroke-linecap="round" />
        <line x1="200" y1="145" x2="222" y2="200" stroke="${acc}" stroke-width="8" stroke-linecap="round" />
        <line x1="140" y1="145" x2="130" y2="196" stroke="${acc}" stroke-width="6" stroke-linecap="round" opacity="0.8" />
        <line x1="180" y1="145" x2="190" y2="196" stroke="${acc}" stroke-width="6" stroke-linecap="round" opacity="0.8" />
        <!-- Brass tips -->
        <line x1="102" y1="190" x2="98" y2="200" stroke="#fcf6ba" stroke-width="8" stroke-linecap="round" />
        <line x1="218" y1="190" x2="222" y2="200" stroke="#fcf6ba" stroke-width="8" stroke-linecap="round" />
      </svg>
    `;
  }

  function renderWardrobeSVG(color, accentColor) {
    const col = color || '#d4a373';
    const acc = accentColor || '#b07d50';
    return `
      <svg viewBox="0 0 320 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="160" cy="204" rx="100" ry="10" fill="rgba(0,0,0,0.16)" />
        <!-- Plinth Base / Legs -->
        <rect x="76" y="192" width="168" height="12" rx="3" fill="${acc}" />
        <rect x="85" y="198" width="12" height="10" rx="2" fill="${acc}" />
        <rect x="223" y="198" width="12" height="10" rx="2" fill="${acc}" />
        <!-- Main Wardrobe Carcass -->
        <rect x="70" y="32" width="180" height="162" rx="8" fill="${col}" filter="drop-shadow(0 6px 12px rgba(0,0,0,0.22))" />
        <!-- Center Door Seam -->
        <line x1="160" y1="34" x2="160" y2="190" stroke="rgba(0,0,0,0.2)" stroke-width="2.5" />
        <!-- Left Door Fluted Paneling / Wood Frame -->
        <rect x="80" y="44" width="70" height="138" rx="4" fill="none" stroke="rgba(0,0,0,0.12)" stroke-width="2" />
        <!-- Right Door Panel -->
        <rect x="170" y="44" width="70" height="138" rx="4" fill="none" stroke="rgba(0,0,0,0.12)" stroke-width="2" />
        <!-- Elegant Long Brass Pull Handles -->
        <rect x="150" y="98" width="4" height="34" rx="2" fill="#fcf6ba" stroke="#b38728" stroke-width="0.5" filter="drop-shadow(0 1px 2px rgba(0,0,0,0.3))" />
        <rect x="166" y="98" width="4" height="34" rx="2" fill="#fcf6ba" stroke="#b38728" stroke-width="0.5" filter="drop-shadow(0 1px 2px rgba(0,0,0,0.3))" />
        <!-- Top Crown Molding -->
        <rect x="66" y="28" width="188" height="8" rx="3" fill="${acc}" />
      </svg>
    `;
  }

  function renderKitchenSVG(color, accentColor) {
    const col = color || '#d4a373';
    const acc = accentColor || '#b07d50';
    return `
      <svg viewBox="0 0 320 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="160" cy="202" rx="120" ry="10" fill="rgba(0,0,0,0.15)" />
        <!-- Upper Cabinets with Frosted Glass -->
        <rect x="55" y="32" width="210" height="60" rx="4" fill="${col}" opacity="0.9" />
        <rect x="65" y="40" width="56" height="44" rx="2" fill="#ffffff" opacity="0.25" stroke="rgba(0,0,0,0.15)" stroke-width="1.5" />
        <rect x="132" y="40" width="56" height="44" rx="2" fill="#ffffff" opacity="0.25" stroke="rgba(0,0,0,0.15)" stroke-width="1.5" />
        <rect x="199" y="40" width="56" height="44" rx="2" fill="#ffffff" opacity="0.25" stroke="rgba(0,0,0,0.15)" stroke-width="1.5" />
        <!-- Subway Tile Backsplash -->
        <rect x="55" y="92" width="210" height="38" fill="rgba(255,255,255,0.06)" />
        <line x1="55" y1="104" x2="265" y2="104" stroke="rgba(0,0,0,0.08)" stroke-width="1" />
        <line x1="55" y1="118" x2="265" y2="118" stroke="rgba(0,0,0,0.08)" stroke-width="1" />
        <!-- Solid Quartz / Wood Countertop -->
        <rect x="45" y="128" width="230" height="12" rx="3" fill="#fdfbf7" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.15))" />
        <!-- Lower Base Cabinets & Drawers -->
        <rect x="52" y="140" width="216" height="58" rx="4" fill="${col}" />
        <line x1="124" y1="140" x2="124" y2="198" stroke="rgba(0,0,0,0.18)" stroke-width="2" />
        <line x1="196" y1="140" x2="196" y2="198" stroke="rgba(0,0,0,0.18)" stroke-width="2" />
        <!-- Drawer Handles -->
        <line x1="76" y1="156" x2="100" y2="156" stroke="#fcf6ba" stroke-width="3" stroke-linecap="round" />
        <line x1="148" y1="156" x2="172" y2="156" stroke="#fcf6ba" stroke-width="3" stroke-linecap="round" />
        <line x1="220" y1="156" x2="244" y2="156" stroke="#fcf6ba" stroke-width="3" stroke-linecap="round" />
        <!-- Sleek Goose-neck Faucet -->
        <path d="M152 128 L152 108 C152 98, 168 98, 168 108 L168 114" fill="none" stroke="#d1d5db" stroke-width="3.5" stroke-linecap="round" />
      </svg>
    `;
  }

  function renderOfficeSVG(color, accentColor) {
    const col = color || '#d4a373';
    const acc = accentColor || '#b07d50';
    return `
      <svg viewBox="0 0 320 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="160" cy="202" rx="115" ry="10" fill="rgba(0,0,0,0.15)" />
        <!-- Executive Desk Tabletop -->
        <rect x="42" y="95" width="236" height="14" rx="4" fill="${col}" filter="drop-shadow(0 3px 6px rgba(0,0,0,0.18))" />
        <!-- Left Steel/Wood Sturdy Frame -->
        <rect x="52" y="108" width="14" height="88" rx="3" fill="${acc}" />
        <!-- Right Drawer Pedestal (3 Drawers) -->
        <rect x="195" y="108" width="75" height="88" rx="4" fill="${col}" filter="brightness(0.95)" />
        <line x1="195" y1="137" x2="270" y2="137" stroke="rgba(0,0,0,0.15)" stroke-width="2" />
        <line x1="195" y1="166" x2="270" y2="166" stroke="rgba(0,0,0,0.15)" stroke-width="2" />
        <!-- Drawer Pulls -->
        <line x1="225" y1="122" x2="245" y2="122" stroke="#fcf6ba" stroke-width="2.5" stroke-linecap="round" />
        <line x1="225" y1="151" x2="245" y2="151" stroke="#fcf6ba" stroke-width="2.5" stroke-linecap="round" />
        <line x1="225" y1="181" x2="245" y2="181" stroke="#fcf6ba" stroke-width="2.5" stroke-linecap="round" />
        <!-- Modesty Panel -->
        <rect x="66" y="112" width="129" height="50" fill="${acc}" opacity="0.4" />
        <!-- Sleek Modern Laptop -->
        <rect x="90" y="70" width="46" height="26" rx="2" fill="#e5e7eb" stroke="#9ca3af" stroke-width="1.5" />
        <polygon points="84,95 142,95 138,92 88,92" fill="#d1d5db" />
        <!-- Desk Lamp Silhouette -->
        <path d="M165 95 L160 62 L150 68" fill="none" stroke="${acc}" stroke-width="3" stroke-linecap="round" />
        <path d="M142 66 L154 58 L158 72 Z" fill="#d4a373" />
      </svg>
    `;
  }

  function renderKidsSVG(color, accentColor) {
    const col = color || '#d4a373';
    const acc = accentColor || '#b07d50';
    return `
      <svg viewBox="0 0 320 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="160" cy="202" rx="110" ry="10" fill="rgba(0,0,0,0.14)" />
        <!-- House Frame Canopy Structure -->
        <path d="M70 180 L70 85 L160 35 L250 85 L250 180" fill="none" stroke="${acc}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" />
        <line x1="70" y1="85" x2="250" y2="85" stroke="${acc}" stroke-width="6" stroke-linecap="round" />
        <!-- Bed Base & Mattress -->
        <rect x="62" y="160" width="196" height="26" rx="6" fill="${col}" />
        <rect x="70" y="142" width="180" height="24" rx="8" fill="#fdfbf7" />
        <!-- Soft Star / Cloud Garland -->
        <line x1="85" y1="88" x2="235" y2="88" stroke="#faedcd" stroke-width="1.5" stroke-dasharray="4 8" />
        <circle cx="120" cy="95" r="5" fill="#fcf6ba" />
        <circle cx="160" cy="92" r="6" fill="#f87171" />
        <circle cx="200" cy="96" r="5" fill="#60a5fa" />
        <!-- Cozy Plaid Blanket -->
        <rect x="140" y="146" width="110" height="20" rx="4" fill="${col}" opacity="0.9" />
        <circle cx="95" cy="148" r="8" fill="#fef08a" />
      </svg>
    `;
  }

  function renderLivingSVG(color, accentColor) {
    const col = color || '#d4a373';
    const acc = accentColor || '#b07d50';
    return `
      <svg viewBox="0 0 320 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="160" cy="202" rx="125" ry="10" fill="rgba(0,0,0,0.15)" />
        <!-- Floating Slatted Low TV Console -->
        <rect x="45" y="132" width="230" height="48" rx="6" fill="${col}" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.2))" />
        <!-- Slats / Louvered door lines -->
        <line x1="80" y1="135" x2="80" y2="177" stroke="rgba(0,0,0,0.2)" stroke-width="2" />
        <line x1="120" y1="135" x2="120" y2="177" stroke="rgba(0,0,0,0.2)" stroke-width="2" />
        <line x1="160" y1="135" x2="160" y2="177" stroke="rgba(0,0,0,0.2)" stroke-width="2" />
        <line x1="200" y1="135" x2="200" y2="177" stroke="rgba(0,0,0,0.2)" stroke-width="2" />
        <line x1="240" y1="135" x2="240" y2="177" stroke="rgba(0,0,0,0.2)" stroke-width="2" />
        <!-- Slender Metal Legs -->
        <line x1="68" y1="180" x2="62" y2="198" stroke="${acc}" stroke-width="6" stroke-linecap="round" />
        <line x1="252" y1="180" x2="258" y2="198" stroke="${acc}" stroke-width="6" stroke-linecap="round" />
        <!-- Ultra-Thin Wall TV Display -->
        <rect x="85" y="42" width="150" height="78" rx="3" fill="#1f2937" stroke="#374151" stroke-width="2" />
        <!-- Warm Ambient Scene on Screen -->
        <rect x="88" y="45" width="144" height="72" fill="#111827" />
        <ellipse cx="160" cy="85" rx="25" ry="12" fill="${col}" opacity="0.3" />
        <!-- Soundbar or Art piece on unit -->
        <rect x="120" y="125" width="80" height="6" rx="2" fill="#374151" />
      </svg>
    `;
  }

  function renderBathroomSVG(color, accentColor) {
    const col = color || '#d4a373';
    const acc = accentColor || '#b07d50';
    return `
      <svg viewBox="0 0 320 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="160" cy="202" rx="90" ry="8" fill="rgba(0,0,0,0.12)" />
        <!-- Round Backlit Mirror -->
        <circle cx="160" cy="72" r="38" fill="rgba(255,255,255,0.1)" stroke="#fcf6ba" stroke-width="2.5" />
        <circle cx="160" cy="72" r="34" fill="#f8fafc" opacity="0.15" />
        <!-- Floating Teak / Oak Vanity -->
        <rect x="75" y="130" width="170" height="52" rx="6" fill="${col}" filter="drop-shadow(0 6px 12px rgba(0,0,0,0.2))" />
        <!-- Marble Countertop -->
        <rect x="70" y="125" width="180" height="10" rx="3" fill="#f8fafc" />
        <!-- Ceramic Vessel Basin Sink -->
        <ellipse cx="160" cy="122" rx="32" ry="12" fill="#ffffff" stroke="#e2e8f0" stroke-width="1.5" />
        <ellipse cx="160" cy="122" rx="26" ry="8" fill="#f1f5f9" />
        <!-- Tall Brass Mixer Tap -->
        <path d="M160 120 L160 98 C160 92, 168 92, 168 98 L168 102" fill="none" stroke="#fcf6ba" stroke-width="3" stroke-linecap="round" />
        <!-- Vanity Drawer Seam & Handle -->
        <line x1="75" y1="156" x2="245" y2="156" stroke="rgba(0,0,0,0.15)" stroke-width="2" />
        <rect x="145" y="162" width="30" height="4" rx="2" fill="#fcf6ba" />
      </svg>
    `;
  }

  function renderOutdoorSVG(color, accentColor) {
    const col = color || '#d4a373';
    const acc = accentColor || '#b07d50';
    return `
      <svg viewBox="0 0 320 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="160" cy="202" rx="115" ry="10" fill="rgba(0,0,0,0.15)" />
        <!-- Slatted Teak Outdoor Garden Bench -->
        <!-- Backrest Slats -->
        <rect x="65" y="65" width="190" height="10" rx="2" fill="${col}" />
        <rect x="65" y="80" width="190" height="10" rx="2" fill="${col}" />
        <rect x="65" y="95" width="190" height="10" rx="2" fill="${col}" />
        <!-- Back Stanchions -->
        <rect x="75" y="55" width="10" height="90" rx="3" fill="${acc}" />
        <rect x="235" y="55" width="10" height="90" rx="3" fill="${acc}" />
        <!-- Curved Armrests -->
        <path d="M55 125 C65 110, 85 112, 85 142" fill="none" stroke="${acc}" stroke-width="8" stroke-linecap="round" />
        <path d="M265 125 C255 110, 235 112, 235 142" fill="none" stroke="${acc}" stroke-width="8" stroke-linecap="round" />
        <!-- Slatted Seat -->
        <rect x="58" y="138" width="204" height="8" rx="2" fill="${col}" filter="brightness(1.08)" />
        <rect x="58" y="148" width="204" height="8" rx="2" fill="${col}" filter="brightness(1.05)" />
        <!-- Heavy Timber Legs -->
        <line x1="72" y1="145" x2="65" y2="198" stroke="${acc}" stroke-width="12" stroke-linecap="round" />
        <line x1="248" y1="145" x2="255" y2="198" stroke="${acc}" stroke-width="12" stroke-linecap="round" />
      </svg>
    `;
  }

  function renderHallwaySVG(color, accentColor) {
    const col = color || '#d4a373';
    const acc = accentColor || '#b07d50';
    return `
      <svg viewBox="0 0 320 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="160" cy="202" rx="100" ry="9" fill="rgba(0,0,0,0.14)" />
        <!-- Tall Wall Coat Rack Panel -->
        <rect x="85" y="32" width="150" height="90" rx="6" fill="${col}" opacity="0.85" />
        <!-- Brass Coat Pegs with Caps -->
        <circle cx="115" cy="58" r="5" fill="#fcf6ba" filter="drop-shadow(0 2px 3px rgba(0,0,0,0.3))" />
        <circle cx="160" cy="58" r="5" fill="#fcf6ba" filter="drop-shadow(0 2px 3px rgba(0,0,0,0.3))" />
        <circle cx="205" cy="58" r="5" fill="#fcf6ba" filter="drop-shadow(0 2px 3px rgba(0,0,0,0.3))" />
        <!-- Oval Hallway Mirror -->
        <ellipse cx="160" cy="88" rx="18" ry="24" fill="rgba(255,255,255,0.18)" stroke="#fcf6ba" stroke-width="2" />
        <!-- Bench Top Cushion -->
        <rect x="75" y="140" width="170" height="20" rx="8" fill="${col}" filter="drop-shadow(0 3px 6px rgba(0,0,0,0.18))" />
        <!-- Slatted Shoe Rack Shelf Below -->
        <line x1="85" y1="178" x2="235" y2="178" stroke="${acc}" stroke-width="4" stroke-linecap="round" />
        <line x1="85" y1="188" x2="235" y2="188" stroke="${acc}" stroke-width="4" stroke-linecap="round" />
        <!-- Bench Legs -->
        <rect x="80" y="152" width="10" height="46" rx="2" fill="${acc}" />
        <rect x="230" y="152" width="10" height="46" rx="2" fill="${acc}" />
      </svg>
    `;
  }

  // Master SVG renderer
  window.renderFurnitureSVG = function(svgType, primaryColor, accentColor, material) {
    const type = svgType ? svgType.toLowerCase() : 'sofa';
    switch (type) {
      case 'sofa':
      case 'sofas':
        return renderSofaSVG(primaryColor, accentColor);
      case 'bed':
      case 'beds':
        return renderBedSVG(primaryColor, accentColor);
      case 'table':
      case 'tables':
        return renderTableSVG(primaryColor, accentColor);
      case 'chair':
      case 'chairs':
        return renderChairSVG(primaryColor, accentColor);
      case 'wardrobe':
      case 'wardrobes':
        return renderWardrobeSVG(primaryColor, accentColor);
      case 'kitchen':
        return renderKitchenSVG(primaryColor, accentColor);
      case 'office':
        return renderOfficeSVG(primaryColor, accentColor);
      case 'kids':
        return renderKidsSVG(primaryColor, accentColor);
      case 'living':
        return renderLivingSVG(primaryColor, accentColor);
      case 'bathroom':
        return renderBathroomSVG(primaryColor, accentColor);
      case 'outdoor':
        return renderOutdoorSVG(primaryColor, accentColor);
      case 'hallway':
        return renderHallwaySVG(primaryColor, accentColor);
      default:
        return renderSofaSVG(primaryColor, accentColor);
    }
  };
})();
