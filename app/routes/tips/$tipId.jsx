import { useLoaderData, Link } from "remix";
import { checkStatus, checkEnvVars } from "~/utils/errorHandling";

import stylesUrl from "~/styles/tip.css";

export function links () {
  return [{ rel: "stylesheet", href: stylesUrl }];
}

export function meta ({ data }) {
  return {
    title: data.attributes.Name
  }
}

export async function loader ({ params }) {
  checkEnvVars();

  const res = await fetch(`${process.env.STRAPI_URL_BASE}/api/tips`
    + `?populate=*&filters[Slug]=${params.tipId}`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${process.env.STRAPI_API_TOKEN}`,
      "Content-Type": "application/json"
    }
  })

  // Handle HTTP response code < 200 or >= 300
  checkStatus(res);

  const data = await res.json();

  // Did Strapi return an error object in its response?
  if (data.error) {
    console.log('Error', data.error)
    throw new Response("Error getting data from Strapi", { status: 500 })
  }

  // Did Strapi return an empty list?
  if (!data.data || data.data.length === 0) {
    throw new Response("Not Found", { status: 404 });
  }
  
  
  const tip = data.data[0];

  // For a Tip with no screenshot, replace API returned null with an empty array
  tip.attributes.Screenshots.data = tip.attributes.Screenshots.data ?? [];

  // Handle image URL being returned as just a path with no scheme and host.
  // When storing media on the filesystem (Strapi's default), media URLs are
  // return as only a URL path. When storing media using Cloudinary, as we do
  // in production, media URLs are returned as full URLs.
  for (const screenshot of tip.attributes.Screenshots.data) {
    if (!screenshot.attributes.formats.thumbnail.url.startsWith('http')) {
      screenshot.attributes.formats.thumbnail.url = process.env.STRAPI_URL_BASE +
        screenshot.attributes.formats.thumbnail.url;
    }
  }
  return tip;
}

export default function TipRoute() {
  const tip = useLoaderData();

  return (
    <div>
      <Link to="/tips" style={{ textDecoration: 'none' }}>← back to list</Link>
      <hgroup>
        <h2>{tip.attributes.Name}</h2>
        <h3>by {tip.attributes.Author.data?.attributes.firstname ?? 'an unknown user'}</h3>
      </hgroup>

      <p>
        {tip.attributes.Description}
      </p>
      <div className="grid">
        {tip.attributes.Screenshots.data.map((s) => (
          <div key={s.attributes.hash}>
            <img
              src={s.attributes.formats.thumbnail.url}
              alt={tip.attributes.Name + ' screenshot'}
            />
          </div>
        ))}
      </div>
    </div>
  );
}