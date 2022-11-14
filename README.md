# TCCSite

An [Eleventy/11ty](https://www.11ty.dev/) site built on a customised version of [11ty-plain-boostrap5](https://github.com/mandrasch/11ty-plain-bootstrap5) to be used by The Codhead Club.

- [Bootstrap 5](https://www.npmjs.com/package/bootstrap) (via npm)
- [Laravel Mix](https://www.npmjs.com/package/laravel-mix)* for SCSS / JS compilation (incl. Autoprefixer)

## Plugins

Standard with template:
- [eleventy-navigation](https://www.11ty.dev/docs/plugins/navigation/)
- [eleventy-img](https://www.11ty.dev/docs/plugins/image/)
- [eleventy-rss](https://www.11ty.dev/docs/plugins/rss/) (to get absolute URLs for social media open graph tags)

Added by [@closebracket](github.com/closebracket):
- [eleventy-fetch](https://www.11ty.dev/docs/plugins/fetch/)
## Commands
**Install via:**

- `npm install`

**Start local development with**

- `npm run dev`

**Clean** 

For Windows: use: `"clean": "del /s dist"` on line 7 of package.json
For Linux: use: `"clean":"rm -rf dist" ` on line 7 of package.json

Preview runs on http://localhost:8080/.

**Where to edit?**

- Work with files in `src/`-folder
- Homepage: `src/index.njk`, Config: `.eleventy.js`
- **Don't** edit `_site/` folder (automatically generated)

**Generate a static build with**

- `npm run build`

_Advice: `BASE_URL` should be set as node env variable for open graph image support (they need full instead of relative URLs. You can strip them out as well in `meta.njk`. See `.github/workflows/build-deploy.yaml` for information. Currently it defaults to http://localhost:8080 if no env var is set.)_
## Technical background:

Bootstrap information for npm/sass:

- https://getbootstrap.com/docs/5.0/getting-started/download/#source-files
- https://getbootstrap.com/docs/5.0/customize/sass/

Sustainable Web Design:

- Comment out not needed bootstrap components in `src/scss/app.scss`

## TODOs

- [ ] Add support for Stackblitz (https://stackblitz.com/github/mandrasch/11ty-plain-bootstrap5)
- [ ] Add more demo content with image/gallery examples
- [ ] Add local google fonts example
- [ ] Improve handling of absolute URLs for open graph image information and BASE_URL settings
- [ ] Add sitemap.xml (See https://github.com/maxboeck/eleventastic)
- [ ] Add minimalistisc cache busting via timestamp https://rob.cogit8.org/posts/2020-10-28-simple-11ty-cache-busting/ or https://laravel.com/docs/9.x/mix#versioning-and-cache-busting (would require to read mix-manifest.json file in build step? 
- [ ] Try https://github.com/11ty/eleventy-plugin-vite with Eleventy v2?
- [ ] Check a11y with WAVE, aXe, etc. or use automated workflow, e.g. pa11y https://rodneylab.com/sveltekit-accessibility-testing
- [ ] Add PWA features
