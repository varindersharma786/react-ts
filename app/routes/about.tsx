import type { Route } from "./+types/about";
import AboutPage from "../pages/about/aboutPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "This is About Page" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <AboutPage />;
}
