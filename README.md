# Remix App for StrapiConf 2022 Workshop
## Build a Productivity Tips App with Remix, Render, and Strapi

*This branch is step three. See the other branches in this repository for a description of the code changes made in each step as we build a production Remix app that uses Strapi for its data API.*

In this step, we'll update the content of the homepage -- `app/routes/index.jsx` -- to describe the purpose of our app and link to the list of productivity tips.

1. Add paragraph about app
2. Add a link to `/tips`

If you run the dev server and go to http://localhost:3000 you will see the updated homepage.

When you're ready, move to the next step with `git checkout step-4`. You'll need to first stop the Remix dev server with <kbd>Ctrl</kbd> + <kbd>C</kbd> if it's running.

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