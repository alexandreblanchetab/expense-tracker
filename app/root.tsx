import { Links, LiveReload, Meta, Outlet, Scripts } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import styles from "./tailwind.css";
import Button from "./components/Button";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body>
        <main className="align-center bg-gray-700 flex flex-col gap-4 justify-start p-4 w-full text-center">
          <h1>Expense Tracker</h1>
          <Button className="bg-white text-black">Gère toi</Button>
        </main>
        <Outlet />

        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
