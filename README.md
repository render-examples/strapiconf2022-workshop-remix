# Remix App for StrapiConf 2022 Workshop
## Build a Productivity Tips App with Remix, Render, and Strapi

*This branch is step five. See the other branches in this repository for a description of the code changes made in each step as we build a production Remix app that uses Strapi for its data API.*

This step creates the page used to show the details of an individual tip.

1. Create `app/routes/tips/$tipId.jsx`. This filename beginning with the `$` is how Remix defines dynamic URL routes. There is a lot in this file, so take some time to review it.
2. Create a `styles` folder and file inside `app`, and then create a `tip.css` file. This css file contains some styling customizations for the grid of images that can be associated with each tip.

You did it! You should have the fully functional Productivity Tips app powered by Strapi's CMS and API.

Now let's deploy all of this to Render. We will deploy Strapi and Remix as two separate Web Services, and we will create a PostgreSQL database where Strapi will store the tip data.

Go back to your `strapiconf2022-workshop-strapi` repository. Its README contains the instructions to deploy both the Strapi app and the Remix app to Render using a Render Blueprint defined by a `render.yaml` file.

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