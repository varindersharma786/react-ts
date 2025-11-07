
import RegisterPage from "~/pages/auth/register/RegisterPage";
import type { Route } from "./+types/auth/register";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "This is About Page" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <RegisterPage />;
}
