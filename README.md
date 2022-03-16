# Remix App for StrapiConf 2022 Workshop
## Build a Productivity Tips App with Remix, Render, and Strapi

*This branch is step four. See the other branches in this repository for a description of the code changes made in each step as we build a production Remix app that uses Strapi for its data API.*

In the previous step, you may have noticed that clicking on the **👉 Productivity Tips** link on the homepage results in a 404. That's because we haven't created the `/tips` route that will list our productivity tips; this branch implements that.

Here are the changes in this step:

1. Create a `tips.jsx` file inside `app/routes`. This is the "frame" or template through which both the list of tips and individual tips details content will be shown. The `<Outlet />` tag is where either the tips list or individual tip detail will be injected.
2. Create a `tips` folder inside `app/routes` and then create a `index.jsx` file inside that folder. There's a lot in this file, so review it closely.
3. Create a `utils` folder inside `app` and then create an `app/utils/errorHandling.js` file inside that folder. Implement a `checkStatus` HTTP error handler function in that file along with a `checkEnvVars` function.
4. Create a `.env` file at the root of the Remix repository. Copy the contents of `.env.example` to `.env` file.
5. Create a value for `STRAPI_API_TOKEN` using the Strapi Admin GUI: **Settings** --> **API Tokens** --> **Create new API Token**. Name it something like `Remix Dev` and leave it as `Read-only`.
6. Restart the dev server so it picks up the `.env` file. The Remix dev server doesn't automatically restart when changes are made to this file.

If you run the dev server and go to http://localhost:3000/tips the tips you added in the Strapi Admin GUI will be shown as a bulleted list of links!

When you're ready, move to the next step with `git checkout step-5`. You'll need to first stop the Remix dev server with <kbd>Ctrl</kbd> + <kbd>C</kbd> if it's running.

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