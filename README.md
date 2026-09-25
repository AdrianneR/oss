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

## Technology

- HTML5 and inline CSS
- Bootstrap 5.3.8
- Inter web font
- Vanilla JavaScript/Node.js static server
- Background video and brand imagery in `images/`

Bootstrap and Google Fonts are loaded from CDNs, so an internet connection is
needed for the complete styling and typography when viewing the site.

## Local preview

The included `app.js` serves files relative to its working directory. Because
the pages currently use `/oss/...` asset paths, start the server from the
directory containing this repository:

```bash
cd ..
node oss/app.js
```

Then open:

<http://localhost:8080/oss/index.html>

Alternatively, open `index.html` directly in a browser for a quick static
preview. Some absolute asset paths may not resolve correctly when the file is
opened directly or served from a different base path.

## Dependencies

Install the project dependency with:

```bash
npm install
```

Bootstrap is listed in `package.json`; the current pages primarily reference
the Bootstrap CDN version declared in each HTML file.