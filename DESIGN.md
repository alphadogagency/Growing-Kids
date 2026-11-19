# Growing Kids Homepage Design

## Current stage — November 19, 2026

Bryan reports the homepage approved and authorizes the complete remaining source-supported site build under `2026-11-19/growing-kids/remaining-pages-build`. Preserve the approved design; build/review Ireland Road and Preschool templates, then all remaining pages and native flows. Historical approval-pending and no-supporting-pages gates below are superseded. Full authority, source hierarchy, boundaries, progress and next step are at the top of `outputs/CONTINUE-HERE.md`; read the active assignment there. Bryan explicitly authorized committing and pushing the remaining pages to Cloudflare staging on November 19 for full-site review. This authorization excludes production cutover, real submissions, Calendar changes and stakeholder messages.

## Historical context (dated stage)

Visual authority: approved Claude concept, visually inspected November 3; outputs/sources/growing-kids-approved-concept-desktop.png and https://claude.ai/artifact/Lo3Rby85sFb3qNVY3gk8fs. Human-approved concept; Bryan reviewed the November 17 refinement and authorized staging publication for Kyle review. Final homepage/client approval remains pending. Newer November brief overrides old mock copy, navigation and CTA wording.

Nunito 700/800 headings and Nunito Sans 400/600 body; exact palette tokens live in src/styles/global.css. White header, authentic wide playground hero with warm taupe copy panel, paper and cream grounds, sage parent-story section, butter tuition band. Red is reserved for primary actions and brand. Pill buttons follow the explicit brief. No gradient, blur or shadows. The November 13 feedback now authorizes a cohesive set of meaningful animated icons for this refinement.

First screen includes Watch Them Grow, one sentence, area-first inline center selector and all three CTA choices. Keep top and bottom CTA strips because the brief explicitly requires both. Six icon-led differentiators retain the supplied order and unchanged text. Supporting rows and split sections vary the composition. Existing genuine parent videos load on click with direct YouTube fallbacks. No invented testimonials or numbers.

Desktop header is sticky with utility actions and six navigation items. Mobile uses native menu, Escape-to-close, automatic close on anchor navigation and sticky bottom actions. Mobile hero uses a separate photo above the taupe panel; differentiators use readable icon/text rows. Footer retains all ten provisional NAP records plus Programs, seven cities and Company as explicitly required. Large footer and review annotations are known tradeoffs, not accidental omissions.

Photo provenance: outputs/sources/homepage-asset-provenance.json. All images are original client-source pixels resized/transcoded to WebP; no generated imagery. Shoot-replacement slots have data-shoot="replace". Missing quotes, badges, anniversary video/year and final NAP remain visibly marked in staging. Pre-registration provider reconciliation is visibly pending. No new aesthetics or full redesign should be inferred from review feedback.

Impeccable Persuade mode, buildPath code from Website Starter default. Local review annotations/noindex must be reconciled before any public launch. See outputs/evidence/homepage/design-review.md for verification and independent critic findings.

## November 17 client-feedback refinement

Source: Bridget November 13 initial feedback, forwarded by Kyle November 16; exact excerpt in outputs/evidence/homepage-feedback-2026-11-17/feedback-source.txt. Initial feedback is not final homepage approval. Preserve the hero, palette, fonts and content order. Reduce photography from twelve photo/video placements to five: keep hero, ELM learning photo and three parent video posters; replace six Difference photos with meaningful authored geometric SVG icons and remove the repeated center exterior. Existing image assets remain available for later pages/shoot replacement.

Icon vocabulary: rounded ink strokes, sparse butter/sage/sky fills, no enclosing colored circles, no random library pack. Shield/check, book, clock, Main Street buildings, home/heart and teaching board refer to the six existing statements. Repeat the book at ELM and a location pin at Centers for cohesion. Icons are decorative adjuncts to unchanged text, aria-hidden, not claims or navigational controls.

Motion thesis: Difference icons trace their defining detail once as each row enters view; the complete row gently fades and rises 18–24px over 700ms. Selected supporting icon headings receive the same bounded entrance. No loops, no hero delay or scroll hijacking. Default content/icons remain visible, observer is initialized before hiding offscreen groups, and focus/anchor access immediately settles them. Reduced motion at load or on preference change shows the final static state and removes animation.

Area picker: choose a city, then see its schools as inline links on the same homepage. South Bend has Ireland Road, State Road 23 and Bendix Drive; Valparaiso has Campbell Street and Eastport Centre; five other cities have one each. Source is src/data/centers.json cross-checked against outputs/center-flow-map.json. Only school links navigate, using unchanged exact location URLs. Area choice is reversible without navigation. With JavaScript unavailable, native city disclosures expose the same ten links. This interaction is proposed for review, not claimed client-approved.

Review boundary: Bryan approved this revision for staging publication November 17; production cutover and page expansion are excluded. built-in browser unavailable in this background chat, coordinator-rendered checks completed at 1440×1000, 1024×900 and 390×844, including actual motion and all area choices. One independent screenshot-only critique found no blocking issues. Reduced-motion/no-script runtime and end-of-page clearance were not newly verified. No personal Chrome takeover. Existing conversion/content/approval gaps remain separate.

## November 19 page expansion

Approved world extended, not redesigned. Location pages lead with the school’s exact street/city, compact butter address panel and genuine center exterior. Director and local-positioning copy precede programs, parent stories, inquiry and photo strip. Program pages use sage learning heroes, varied split sections and an editorial day rhythm. Directory and FAQ use native controls; market pages retain their actual current structure and scoped responsive tables. Larger index/reading surfaces keep ordinary readable measures. Exact recovered parent and staff excerpts replace invented social proof; missing photos/attribution stay noted.

Two screenshot-only independent critic passes, fresh gpt-6.2-astra contexts, capped per brief: first Ireland7/Preschool8; second both8 and no composition-level redesign needed. Changes addressed clipped face with an actual exterior, simpler preschool hero, labelled local phone, multiline address and reduced duplicate mobile CTA. Second preschool-mobile capture was insufficient; replaced by preschool-mobile-final.jpg and the completed three-viewport browser checks. Approved pill buttons, warm palette, native utility layouts and mandatory three-choice CTA are deliberate exceptions to generic detectors.

Motion inherits the homepage’s 700ms bounded fade-plus-rise on meaningful below-fold groups. No hero delay. Default visible, focus/anchor settlement and reduced-motion load/change fallback retained. QA records actual progression and any unsupported runtime emulation. Staging noindex remains. Title pattern on locations intentionally follows the explicit November brief even where >60 characters; final human metadata review remains open.

November19 final: full-site local review build verified at1440/1024/390px. Actual reveals and CSP script-blocked fallbacks checked; runtime reduced-motion preference unavailable. Three sourced homepage quotes added without attributing them to video speakers. See outputs/evidence/remaining-pages-2026-11-19/review.md and prompt-log.md. Publication and outstanding content/provider/launch checks remain separate.
