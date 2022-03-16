# Remix App for StrapiConf 2022 Workshop
## Build a Productivity Tips App with Remix, Render, and Strapi

*This branch is step two. See the other branches in this repository for a description of the code changes made in each step as we build a production Remix app that uses Strapi for its data API.*

In this step, we'll update `app/root.jsx` with some simple styling and a header that will be used on every page of the app.

1. Add a CSS library from https://picocss.com
2. Change the page title
3. Add a "Productivity Tips" header and make it link to `/`

If you run the dev server and go to http://localhost:3000 you will see the `Productivity Tips` header we added and a change to the styling on the other content on the page.

When you're ready, move to the next step with `git checkout step-3`. You'll need to first stop the Remix dev server with <kbd>Ctrl</kbd> + <kbd>C</kbd> if it's running.

---

## Remix Reference

- [Remix Docs](https://remix.run/docs)

### Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

### Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```
