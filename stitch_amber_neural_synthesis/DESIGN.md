---
name: Organic Deep Space
colors:
  surface: '#131315'
  surface-dim: '#131315'
  surface-bright: '#39393b'
  surface-container-lowest: '#0e0e10'
  surface-container-low: '#1b1b1d'
  surface-container: '#201f21'
  surface-container-high: '#2a2a2c'
  surface-container-highest: '#353437'
  on-surface: '#e5e1e4'
  on-surface-variant: '#e4beb1'
  inverse-surface: '#e5e1e4'
  inverse-on-surface: '#313032'
  outline: '#ab897e'
  outline-variant: '#5b4137'
  surface-tint: '#ffb59a'
  primary: '#ffb59a'
  on-primary: '#5b1b00'
  primary-container: '#ff5a00'
  on-primary-container: '#511700'
  inverse-primary: '#a83900'
  secondary: '#f7b89c'
  on-secondary: '#4d2612'
  secondary-container: '#6a3e28'
  on-secondary-container: '#e8ab8e'
  tertiary: '#c6c6cf'
  on-tertiary: '#2f3037'
  tertiary-container: '#91919a'
  on-tertiary-container: '#292a31'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbcf'
  primary-fixed-dim: '#ffb59a'
  on-primary-fixed: '#380d00'
  on-primary-fixed-variant: '#802900'
  secondary-fixed: '#ffdbcc'
  secondary-fixed-dim: '#f7b89c'
  on-secondary-fixed: '#331202'
  on-secondary-fixed-variant: '#673c26'
  tertiary-fixed: '#e2e1eb'
  tertiary-fixed-dim: '#c6c6cf'
  on-tertiary-fixed: '#1a1b22'
  on-tertiary-fixed-variant: '#45464e'
  background: '#131315'
  on-background: '#e5e1e4'
  surface-variant: '#353437'
typography:
  headline-xl:
    fontFamily: Epilogue
    fontSize: 64px
    fontWeight: '300'
    lineHeight: '1.1'
    letterSpacing: 0.05em
  headline-lg:
    fontFamily: Epilogue
    fontSize: 40px
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: 0.02em
  headline-md:
    fontFamily: Epilogue
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  space-unit: 8px
  section-gap: 120px
  container-padding: 40px
  element-gap: 24px
---

## Brand & Style

This design system establishes a premium, "Organic Deep Space" aesthetic tailored for an AI Virtual Human platform. It moves away from the cold, clinical tropes of traditional AI interfaces, opting instead for a mysterious, sophisticated, and human-centric warmth set against an infinite dark void.

The visual style is a hybrid of **Glassmorphism** and **Minimalism**, emphasizing depth through luminosity rather than traditional structure. It replaces rigid grids with fluid, neural-inspired paths and organic curves. The atmosphere is evocative of a quiet, high-end digital sanctuary where technology feels like a living, breathing entity. 

Key attributes include:
- **Human Warmth:** Utilizing a palette of heated oranges and soft silvers to contrast the void.
- **Fluidity:** Incorporating curved paths and bokeh-style particle effects to simulate life.
- **Sophistication:** High-contrast typography and smoked glass textures create an editorial, luxury feel.

## Colors

The palette is strictly curated to avoid blue tones, focusing on the tension between "Inky Charcoal" and "Glow Orange."

- **Primary (Glow Orange):** Used for critical interactions, active neural paths, and luminous highlights. It represents the "spark" of AI consciousness.
- **Secondary (Earthy Obsidian):** Derived from the brand profile (#E5A88C), this serves as a softer, skin-tone adjacent highlight to bridge the gap between digital and human.
- **Neutral (Inky Charcoal):** The foundation (#0D0D0F). It provides an absolute black depth that allows glass textures and glowing particles to pop.
- **Accent (Obsidian Silver):** A cool, metallic silver used for borders, subtle labels, and secondary details to provide a sophisticated structure without breaking the dark aesthetic.

## Typography

The typography system relies on a high-contrast pairing that balances editorial luxury with functional clarity.

**Epilogue** is utilized for headlines, emphasizing an ultra-wide, distinctive character. At large scales, use light weights with increased letter-spacing to evoke a sense of "premium space."

**Inter** serves as the workhorse for body copy and system labels. It remains neutral and highly legible against dark backgrounds. For interactive labels, use small caps and generous letter-spacing to maintain the "Deep Space" theme. 

Avoid heavy weights in body copy; instead, use color shifts (White to Silver) to denote hierarchy.

## Layout & Spacing

This design system rejects rigid grid lines in favor of an **Organic Fluid Layout**. Content should feel like it is floating in a void, anchored by generous margins rather than visible containers.

- **Asymmetry:** Use off-center placements for AI avatars and core imagery to simulate organic movement.
- **Negative Space:** Use extreme padding (120px+) between sections to allow the "Inky Charcoal" background to breathe.
- **Safe Areas:** Maintain a 40px minimum margin for all interactive elements to prevent visual clutter.
- **Fluid Connections:** Use curved SVG paths (1px stroke, Glow Orange gradient) to connect disparate pieces of information, mimicking neural networks.

## Elevation & Depth

Depth is not achieved through drop shadows but through **Luminosity and Smoked Glass**.

- **Z-Axis Hierarchy:** Layers closer to the user are lighter and more blurred.
- **Smoked Glass:** Containers use a background blur (20px - 40px) with a 10% opacity white border. This creates a "frosted obsidian" effect that subtly separates content from the background.
- **Bokeh Effect:** Background elements should feature out-of-focus luminous circles in Glow Orange and Obsidian Silver at varying depths.
- **Internal Glow:** Active components (like selected cards) should have a soft internal glow (box-shadow: inset 0 0 20px) rather than an external shadow.

## Shapes

The shape language is strictly organic. Sharp corners are avoided to maintain the "Human Warmth" aspect of the brand.

- **Primary Radius:** A consistent 0.5rem (8px) is used for small elements like buttons and inputs.
- **Large Radius:** Cards and glass panels use a 1.5rem (24px) radius to emphasize softness.
- **Organic Paths:** When using decorative lines or separators, always use Bézier curves rather than straight lines or 90-degree angles.

## Components

### Buttons
- **Primary:** Solid Glow Orange with high-contrast black text. On hover, a soft outer glow expands.
- **Secondary:** Smoked glass background with a 1px Obsidian Silver border.
- **Ghost:** Pure text with an underline that animates from the center out on hover.

### Cards
- **The Glass Vessel:** Cards should never be solid. Use the smoked glass texture with a 10% white border. Content should feel like it is "suspended" within the glass.

### Inputs & Controls
- **Fields:** Bottom-border only, or very subtle glass containers. No heavy boxes.
- **Checkboxes/Radios:** Use organic circular shapes. When active, they should "pulse" with Glow Orange light.

### Neural Paths (Special Component)
- Decorative SVG lines that move slowly in the background, connecting user data points or menu items. These should have a "breathing" animation, varying in stroke-width.

### Particles
- Subtle, floating interactive particles that move away from the user's cursor, creating a tactile sense of presence in the digital void.