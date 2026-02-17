import type { Route } from "./+types/pagination";
import Pagination from "~/pages/pagination/pagination";
import axios from "axios";

interface PostData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export async function loader({ params }: Route.LoaderArgs) {
  const res = await axios.get<PostData[]>(
    "https://jsonplaceholder.typicode.com/posts",
  );
  return { posts: res.data };
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <Pagination posts={loaderData.posts} />;
}
