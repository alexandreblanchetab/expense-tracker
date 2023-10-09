import type { LinksFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts } from "@remix-run/react";
import Button from "./components/Button";
import styles from "./tailwind.css";

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
        <main className="flex w-full flex-col items-center justify-start gap-4 bg-gray-700 p-4 text-center">
          <h1>Expense Tracker</h1>
          <Button className="w-[20rem] max-w-full bg-white p-5 pt-3 text-black">
            Gère toi
          </Button>
        </main>
        <Outlet />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
