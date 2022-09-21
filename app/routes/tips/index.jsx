import { Link, useLoaderData } from "remix";
import { checkStatus, checkEnvVars } from "~/utils/errorHandling";

export async function loader () {
  checkEnvVars();

  const res = await fetch(`${process.env.STRAPI_URL_BASE}/api/tips?populate=*`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${process.env.STRAPI_API_TOKEN}`,
      "Content-Type": "application/json"
    }
  });

  // Handle HTTP response code < 200 or >= 300
  checkStatus(res);

  const data = await res.json();

  // Did Strapi return an error object in its response?
  if (data.error) {
    console.log('Error', data.error)
    throw new Response("Error getting data from Strapi", { status: 500 })
  }

  return data.data;
}

export default function Tips() {
  const tips = useLoaderData();

  return (
    <ul>
      {tips.map((tip) => (
        <li key={tip.attributes.Slug}>
          <Link to={tip.attributes.Slug}>{tip.attributes.Name}</Link>
        </li>
      ))}
    </ul>
  );
}