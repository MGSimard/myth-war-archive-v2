# Myth War Archive (v2)

## Notes

- Site URL: mwarchive.pages.dev
- No way to do gradient borders for this app (Except for static elems like sidenav)
  - Border-image disables ability to use border-radius
  - Can't gradient BG + pad 1px + nested BG because I need transparency
  - Can't use masking because it kills perf on mobile and causes checkerboarding on scroll

## Task List

- [x] Init
- [x] Strip bloat
- [x] Set configs
- [ ] ...
- [x] Core Layout
  - [x] Color palette
  - [x] Layout identity
  - [x] Sidenav
    - [ ] Nav item font
    - [ ] Inert rest of the app when open on mobile?
  - [ ] ...
- [x] Soulstone spritesheet animation
- [ ] Potentially reduce region figcaptions to just the game, the cities are already in the section, still pass the city name for aria-label and alt text I guess
- [ ] TOC?
- [ ] ...
- [ ] ...
- [ ] ...
- [ ] Metadata
- [ ] Deploy

- [ ] If this is ever taken seriously, ditch Uploadthing and move assets to an R2 storage subdomain
