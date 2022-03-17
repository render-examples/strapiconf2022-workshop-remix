import { Link } from "remix";

export default function Index() {
  return (
    <main className="container">
      <p>
        Over time everyone develops a Swiss army knife of tips, tricks,
        and hacks to boost productivity. At Render, I created a
        #productivity-tips Slack channel for anyone to share their best
        productivity boosters with everyone on the team. Using&nbsp;
        <a href="https://strapi.io">Strapi</a> and&nbsp;
        <a href="https://remix.run">Remix</a>, we made a little web app to
        catalog all of these tips and share them with others. 🤓
      </p>
      <Link to="/tips">👉 Productivity Tips</Link>
    </main>
  );
}