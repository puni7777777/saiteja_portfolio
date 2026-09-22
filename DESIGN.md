---
name: S. Venkata Sai Teja Portfolio
description: High-Precision Dark Finance Architecture & Professional Portfolio
colors:
  primary: "#10b981"
  primary-dark: "#059669"
  primary-light: "rgba(16, 185, 129, 0.1)"
  emerald-light: "#34d399"
  secondary: "#141c2c"
  neutral-bg: "#090d16"
  neutral-surface: "#141c2c"
  neutral-surface-subtle: "#0d131f"
  neutral-border: "#1e2a3d"
  neutral-border-strong: "#2a3b54"
  neutral-text-primary: "#f1f5f9"
  neutral-text-secondary: "#cbd5e1"
  neutral-text-muted: "#94a3b8"
typography:
  display:
    fontFamily: "var(--font-serif), 'Libre Baskerville', Georgia, serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "var(--font-serif), 'Libre Baskerville', Georgia, serif"
    fontSize: "clamp(1.75rem, 3vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  title:
    fontFamily: "var(--font-serif), 'Libre Baskerville', Georgia, serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "normal"
  body:
    fontFamily: "var(--font-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "var(--font-mono), ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.05em"
  caption:
    fontFamily: "var(--font-mono), ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.02em"
  micro:
    fontFamily: "var(--font-mono), ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.625rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.02em"
rounded:
  xs: "2px"
  sm: "4px"
  md: "6px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.xs}"
    padding: "12px 24px"
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "#ffffff"
    rounded: "{rounded.xs}"
    padding: "12px 24px"
  button-outline:
    backgroundColor: "{colors.neutral-surface}"
    textColor: "{colors.neutral-text-primary}"
    rounded: "{rounded.xs}"
    padding: "12px 24px"
---

# Design System: S. Venkata Sai Teja Portfolio

## Overview

**Creative North Star: "The Architectural Ledger"**

A sophisticated, high-precision visual system rooted in central banking monographs, audited general ledgers, and classical financial publishing. It translates the operational discipline of S. Venkata Sai Teja—Junior Accountant at Mahasai Aluminium Profiles Pvt Ltd and MBA Finance candidate—into a calm, authoritative digital presence.

The aesthetic intentionally refuses generic developer cards, gratuitous dark-mode glows, crypto neon accents, and fake statistical dashboards. Instead, it honors double-entry equilibrium: warm alabaster parchment ground, deep obsidian ink typography, treasury emerald authority, crisp 1px hairline rules, and tabular figures for balance integrity.

**Key Characteristics:**
- **Factual Inviolability:** Layouts present verified resume facts with zero metric exaggeration or fabricated business performance.
- **Double-Entry Equilibrium:** Content structures balance inputs and outputs, credits and debits, theory and commercial practice.
- **Restrained Chromatic Rhythm:** A quiet parchment canvas where treasury emerald signifies regulatory compliance and deep navy grounds executive identity.
- **Tabular Rigor:** Numerals, ledger codes, and process markers employ strict monospaced tabular alignment.

## Colors

The palette draws upon archival accounting ledgers and sovereign treasury documentation.

### Primary
- **Treasury Emerald** (`#065f46`): Expresses statutory compliance, successful reconciliation, and balanced ledgers. Used for key action CTAs, verified badges, and active operational indicators.
- **Deep Emerald Shade** (`#044e39`): Hover state for primary interactions.
- **Emerald Tint** (`#ecfdf5`): Clean, calm background tint for status pills, reconciliation verifications, and compliance callouts.

### Secondary
- **Executive Navy** (`#0f2537`): Represents corporate governance and institutional weight. Used for hero action buttons, experience timeline headers, and footer colophon.

### Neutral
- **Alabaster Ledger Ground** (`#fafaf7`): Warm, paper-like background that prevents digital eye strain and invokes physical document authority.
- **Parchment White Surface** (`#ffffff`): Crisp, elevated ground for content panels, data tables, and input containers.
- **Slate Subtle Surface** (`#f8fafc`): Neutral tint for alternating ledger lines and inactive selectors.
- **Hairline Rule** (`#e2e8f0`): 1px borders providing structure without visual clutter.
- **Structural Rule** (`#cbd5e1`): Deliberate bounding boxes for major operational modules.
- **Obsidian Ink** (`#0f172a`): High-contrast primary text delivering ≥ 10:1 contrast against parchment grounds.
- **Charcoal Graphite** (`#334155`): Secondary body text ensuring crisp readability (≥ 6:1 contrast).
- **Muted Slate** (`#64748b`): Metadata, timestamps, and process identifiers.

### Named Rules
**The Double-Entry Accent Rule.** The primary emerald accent is reserved strictly for affirmative operational states, statutory confirmations, and primary CTAs. It never covers more than 10% of any viewport.

**The No-Glow Rule.** No neon glows, no blurred drop-shadow halos, and no multi-color gradient text. Contrast and typographic scale convey hierarchy.

## Typography

**Display Font:** Libre Baskerville (with Georgia, serif fallback)
**Body Font:** Geist (with -apple-system, sans-serif fallback)
**Label/Mono Font:** Geist Mono (with ui-monospace, SFMono-Regular fallback)

**Character:** Libre Baskerville delivers historical financial credibility reminiscent of the Financial Times and institutional legal contracts, while Geist provides geometric clarity for technical body copy and Geist Mono ensures tabular numbers align in ledger columns.

### Hierarchy
- **Display** (700, clamp(2.25rem, 5vw, 3.75rem), 1.15): Primary candidate name and hero title.
- **Headline** (700, clamp(1.75rem, 3vw, 2.25rem), 1.25): Major section titles.
- **Title** (700, 1.25rem, 1.4): Module headers, role titles, and qualification degrees.
- **Body** (400, 0.9375rem, 1.6): Operational narratives and responsibility details, bounded to 65–75ch for optimal reading speed.
- **Label** (600, 0.75rem, 0.05em letter-spacing, uppercase): Status badges, ledger codes, statutory tags, and dates.

### Named Rules
**The Tabular Numerals Rule.** All financial data, dates, CGPA scores, and ledger codes must render with tabular figures (`font-variant-numeric: tabular-nums`) so decimal points and columns align.

**The Heading Self-Sufficiency Rule.** Headings carry their own weight without decorative kickers or duplicate eyebrows above them.

## Layout

Layout follows a disciplined 12-column architectural grid with a maximum container width of `80rem` (1280px) and generous vertical spacing (`py-16` to `py-24`). Generous whitespace around editorial blocks gives breathing room to technical operational details.

Responsive behavior adapts gracefully from desktop (1440px/1280px) to tablet (1024px/768px) and mobile (430px/390px/360px) by stacking side-by-side ledgers into clear vertical workflows with full touch target accessibility (≥ 44px).

## Elevation & Depth

The system uses flat surface discipline with subtle tonal layering and restrained borders rather than heavy decorative shadows. Depth indicates functional hierarchy, not ornamental styling.

### Shadow Vocabulary
- **Rest Surface** (`none` or `0 1px 2px 0 rgba(0, 0, 0, 0.03)`): Default state for white content panels resting on alabaster ground.
- **Elevated Interactive** (`0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)`): Active selector panels, hovered cards, and interactive tabs.

### Named Rules
**The Hairline Integrity Rule.** Surface boundaries are defined by 1px solid rules (`#e2e8f0` and `#cbd5e1`). Thick colored side-borders (`border-l-2`) and colored halo shadows are strictly prohibited.

## Shapes

Shapes reflect precision-cut paper and ledger registers: crisp 2px (`rounded-xs`) to 4px (`rounded-sm`) corner radii. Large pill cards and bubbly rounded containers are refused in favor of architectural firmness.

## Components

### Buttons
- **Shape:** Crisp rectangular with subtle 2px radius (`rounded-xs`).
- **Primary:** Treasury Emerald (`#065f46`), white text, 12px 24px padding, subtle shadow. Hover: `#044e39`.
- **Secondary:** Executive Navy (`#0f2537`), white text, 12px 24px padding. Hover: `#1a364d`.
- **Outline:** Parchment white (`#ffffff`), border `#cbd5e1`, dark text (`#0f172a`). Hover: border `#065f46`.

### Cards & Panels
- **Corner Style:** 2px radius (`rounded-xs`).
- **Background:** Crisp white (`#ffffff`) or subtle alabaster (`#fafaf7`).
- **Border:** 1px solid `#e2e8f0` (default) or `#cbd5e1` (prominent).
- **Internal Padding:** 20px to 32px based on screen size.

### Navigation
- **Style:** Minimal sticky header with 1px bottom hairline, subtle backdrop blur, and compact monogram avatar.
- **States:** Text link transforms with subtle emerald bottom indicator on hover. Mobile drawer provides full keyboard accessibility.

### Interactive Ledger / BRS Simulator
- **Style:** Dual-entry comparator with phase selector tabs and live balance verification indicators.
- **States:** Interactive toggle between Double-Entry Balance, BRS Logic, and GST Compliance Streams.

## Do's and Don'ts

### Do:
- **Do** anchor every statement in `SAITEJA_RESUME.pdf`.
- **Do** format dates, marks, and ledger codes in monospaced tabular figures.
- **Do** provide direct one-click downloading of `/SAITEJA_RESUME.pdf`.
- **Do** maintain a minimum contrast ratio of 4.5:1 for body copy and 3:1 for large display text.
- **Do** honor `prefers-reduced-motion` across all interactive animations.

### Don't:
- **Don't** invent revenue numbers, percentage cost savings, or unverified achievements.
- **Don't** use neon gradients, glassmorphism blur decoration, or crypto visual tropes.
- **Don't** use colored left/right side borders (`border-l-2`) on cards.
- **Don't** place decorative kickers or eyebrows above section headings.
- **Don't** fabricate external social media links not contained in the resume.
