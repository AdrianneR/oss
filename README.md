# Onyx Strategic Solutions

Marketing website for Onyx Strategic Solutions Group. The site presents the
company's strategic business enablement services, mission, team, and quote
inquiry form.

## Pages

- `index.html` - Homepage with the company overview, core focus areas, and
  calls to action.
- `services.html` - Service offerings presented in a Bootstrap carousel,
  including project management, procurement, process management, team
  development, documentation, and continuous improvement.
- `team.html` - About Us page with the company mission and team profiles.
- `contact.html` - Request a Quote form with service, timeline, and project
  details fields.
- `thank-you.html` - Contact form confirmation page.

## Technology

- HTML5, inline CSS, and vanilla JavaScript
- Bootstrap 5.3.8 and Inter web font, loaded from CDNs
- Node.js built-in HTTP server (no runtime dependencies)
- Background video and brand imagery in `images/`

Bootstrap and Google Fonts are loaded from CDNs, so an internet connection is
needed for the complete styling and typography when viewing the site.

## Run locally

Requires Node.js 18 or newer. Start the server with:

```bash
npm start
```

Open <http://localhost:8080>. The server uses the deployment platform's `PORT`
environment variable when available. Existing `/oss/...` page and asset URLs
are supported as well.

## Deploy

Deploy this repository to a Node.js hosting platform, select Node.js 18 or
newer, and use `npm start` as the start command. No build command or dependency
installation is required. The server binds to `0.0.0.0` and listens on `PORT`
when provided by the host.