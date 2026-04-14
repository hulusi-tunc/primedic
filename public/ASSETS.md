# Asset manifest — Primedic HeartSave myPAD

## Wired (in `public/`)

| Path | Source | Used by |
| --- | --- | --- |
| `public/logos/primedic.png` | `assets/primedic logo.png` | MenuBar header |
| `public/logos/primedic-german-approved.png` | `assets/designed and developed in Germany, pre-medical local.png` | PartnerBand (white strip) |
| `public/logos/bilgin-tip.png` | `assets/Bilgi tip medikal logo.png` | BilginTipBand |
| `public/logos/bilgin-tip-vectorized.png` | `assets/footer logo.png` | Footer |
| `public/images/hero/backdrop.png` | `assets/Header.png` | Hero backdrop |
| `public/images/hero/composition.png` | `assets/hero image.png` | Hero — whole composition |
| `public/images/features/heartsave-mypad-device.png` | `assets/5th section image 1.png` | Features row 1 |
| `public/images/features/heartsave-mypad-field.png` | `assets/5th section image 2.png` | Features row 2 |
| `public/images/features/heartsave-mypad-screen.png` | `assets/5th section image 3.png` | Features row 3 |
| `public/images/primedic-family.png` (1920×857) | `assets/Primedic Family Pic 1.png` | FamilyBand (full-width band) |
| `public/images/product/heartsave-mypad-hero.png` | `assets/hearthsave my pad hero.png` | Product page hero |
| `public/images/product/electrodes.png` | `assets/electrode-front 1.png` | Product details |
| `public/images/product/cpr-sensor.png` | `assets/CPR feedback sensor front 2.png` | Product details |
| `public/images/product/connectivity-screenshot-1.png` | `assets/Screenshot 2026-03-12 at 10.23.41 1.png` | Product connectivity |
| `public/images/product/connectivity-screenshot-2.png` | `assets/Screenshot 2026-03-12 at 10.23.41 2.png` | Product connectivity |
| `public/images/product/heartbeat-left.svg` / `.png` | `assets/Heart save my pad Heartbeat left.*` | Product overview |
| `public/images/product/heartbeat-right.svg` / `.png` | `assets/I say my pet heartbeat right..*` | Product overview |

## Nice-to-have (optional)

- **White variant of Bilgin Tıp logo.** The current logo is red+gray on
  transparent, so we put it on a white rounded card in the footer.
  If you prefer the logo sitting directly on the burgundy footer,
  provide a white/light variant at `public/logos/bilgin-tip-white.png`.
- **Hero background PNG.** The Figma used a large image as the hero
  backdrop (`PNG image 4 1`, 1920×2587). Currently I use a flat
  `#3c0a0a`. If you export that backdrop, drop it at
  `public/images/hero/bg.png` and I'll wire it in.
- **Unused files:** `assets/Group 1321314264.png`, `…265.png`, `…269.png`
  appear to be white-on-white chip icons (previews look blank). Since
  the main `hero image.png` already has the chips baked in, these are
  currently unused. Confirm if they should replace the baked-in chips
  with individually animated SVGs.

## Where to edit text

All marketing copy lives in [`src/lib/content.ts`](../src/lib/content.ts).
Change the strings there — no component edits required.
