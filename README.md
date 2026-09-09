# Elev8 Learning — Premium Client Revision

This revision reorganises the site so visitors can immediately understand what Elev8 actually does:

- **For Institutions:** placement readiness and employability training
- **For Organizations:** corporate training and workforce capability development
- **For Individuals:** communication, career and professional skills

## Design direction

The layout takes inspiration from the presentation style of Talk2Grow: large clear headlines, image-led service cards, strong audience paths, trust/proof sections, numbered learning journeys, high-contrast CTA blocks and a consistent burgundy / cream / dark theme.

It does **not** copy Talk2Grow content. All Elev8 copy remains based on the client-provided website requirements and About Us brochure.

## Important updates

- Homepage now states clearly: **Practical Skills Training for Colleges, Companies & Professionals.**
- Preserves the client line: **Helping People Become Their Best at Work.**
- Image-rich hero areas on every main page.
- Online Unsplash images added to skills/capability cards; existing real Elev8 photos remain throughout the site.
- Complete six-area organization capability section.
- Full Placement Accelerator journey for institutions.
- **Trusted across campuses** moved close to the top of the Institutions page.
- Real institution-logo collage and placement-company collage extracted from the client brochure.
- Full About page rebuilt from the supplied About Us PDF content, including training modules, signature programs, exclusive experiences, partnerships and testimonials.
- New Individuals page and improved Contact page.
- Consistent animations, card hover effects, marquee strip, responsive spacing and mobile layouts.
- Scroll position resets to the top on route changes.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Online images

Some skill cards intentionally use `images.unsplash.com` URLs. The site therefore needs internet access to show those particular images. The core Elev8/event photography and brochure collages are included locally under `src/assets`.
