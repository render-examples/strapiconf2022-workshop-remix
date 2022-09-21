import { Outlet } from "remix";

export default function TipsRoute() {
  return (
    <main className="container">
      <Outlet />
    </main>
  );
}