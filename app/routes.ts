import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  layout("./components/layouts/pages/MainLayout.tsx", [
    index("routes/home.tsx"),
    route("/about", "routes/about.tsx"),
  ]),
  layout("./components/layouts/auth/AuthLayout.tsx", [
    route("/auth/login", "routes/auth/login.tsx"),
    route("/auth/register", "routes/auth/register.tsx"),
  ]),
] satisfies RouteConfig;
