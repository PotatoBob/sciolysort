# Order Scioly Events
A web based event sorter. Allows users to run through a manual merge sort of their favorite
events from this year's list.

**Features**
 * Entirely client side, no backend server required.
 * Filtering out characters based on JSON based filters.
 * Shareable links of sorter results.
 * Versioning of sorter data - you may want to add characters and resources over time. Versioning keeps shareable links valid even if the base character data is changed.


## Credits
 * [charasort](https://execfera.github.io/charasort/) for source code
 * [html2canvas](https://github.com/niklasvh/html2canvas/) for image generation.
 * [seedrandom](https://github.com/davidbau/seedrandom) for PRNG used in character array shuffling.
 * [lz-string](https://github.com/pieroxy/lz-string) for shareable link compression.
 * [SpinKit](http://tobiasahlin.com/spinkit/) for loading animation.
 * [thsort](http://mainyan.sakura.ne.jp/thsort.html) for the original inspiration.

## Known Issues

 * Does not work with CloudFlare's Rocket Loader.
 * Breaks on older versions of IE and mobile Safari, due to various incompatibilities.
