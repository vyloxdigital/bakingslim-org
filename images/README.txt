BakingSlim — images folder
==========================

Drop your nine image files into this folder, using these exact filenames.
The page references these and nothing else.

File                                   Used where                   Rendered box      Suggested source size
-------------------------------------  ---------------------------  ----------------  ---------------------
bakingslim-hero.webp                   Hero stage (LCP image)       1120 x 840 (4:3)  2240 x 1680
bakingslim-2-bottles-guarantee.webp    Packages, two-bottle card     400 x 400 (1:1)    800 x 800
bakingslim-6-bottles-guarantee.webp    Packages, centre card         400 x 400 (1:1)    800 x 800
bakingslim-3-bottles-guarantee.webp    Packages, three-bottle card   400 x 400 (1:1)    800 x 800
bakingslim-review-1.webp               Photographs, first            560 x 420 (4:3)   1120 x 840
bakingslim-review-2.webp               Photographs, second           560 x 420 (4:3)   1120 x 840
bakingslim-review-3.webp               Photographs, third            560 x 420 (4:3)   1120 x 840
bakingslim-guarantee.webp              Refund section seal           400 x 400 (1:1)    800 x 800
favicon.png                            Browser tab + app icon        any                512 x 512

Notes
-----

1. Every image slot uses a fixed CSS aspect-ratio with object-fit: contain.
   Your real files do NOT have to match the ratios above exactly: nothing
   stretches or crops, and the layout will not shift while images load
   (cumulative layout shift stays at zero). Matching the ratio only makes the
   box sit more tightly around the artwork.

2. The package cards sit in the order two / six / three on wide screens, with
   the six-bottle card in the centre because it carries the lowest cost per
   day. On a phone they stack in that same order. If you would rather they
   read 2 / 3 / 6 left to right, say so and I will reorder the markup.

3. bakingslim-hero.webp is the Largest Contentful Paint image. It is preloaded
   with fetchpriority="high" and sits in a wide 4:3 frame, so it is the one
   file worth compressing hardest — aim for under 80 KB. The other seven are
   lazy-loaded and matter far less.

4. bakingslim-review-2.webp is captioned as the badge row (non-GMO, made in
   USA, GMP certified). If your second photo shows something else, swap the
   FILES around rather than editing the HTML, or tell me and I'll change the
   caption.

5. Keep the .webp extension. The filenames appear in index.html, sitemap.xml
   and the Open Graph / Twitter meta tags; renaming one means editing three.

6. favicon.png should be a square PNG. 512 x 512 covers both the browser tab
   and the Android home-screen icon declared in manifest.json.

7. Export WebP at quality 78-82. Past that the file grows without a visible
   gain at these rendered sizes.
