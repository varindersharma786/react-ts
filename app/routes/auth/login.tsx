import LoginPage from "~/pages/auth/login/LoginPage";
import type { Route } from "./+types/auth/login";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "This is About Page" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <LoginPage />;
}
