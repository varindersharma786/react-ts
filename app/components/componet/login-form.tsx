import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "~/components/ui/field";
import { Input } from "~/components/ui/input";
import { Link } from "react-router";
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { api } from "~/utils/axiosapi";
import { toast } from "sonner";
import { setCredentials } from "~/redux/features/authSlice";
import { store } from "~/redux/store";
import {
  InputGroup,
  InputGroupButton,
  InputGroupInput,
} from "../ui/input-group";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const email = formData.get("email");
      const password = formData.get("password");
      const { data } = await api.post("/auth/login", {
        email,
        password,
      });

      store.dispatch(setCredentials(data));
      toast.success(data.message);
      return navigate("/");
    } catch (error) {
      if (
        error &&
        typeof error === "object" &&
        "response" in error &&
        error.response &&
        typeof error.response === "object" &&
        "data" in error.response &&
        error.response.data &&
        typeof error.response.data === "object" &&
        "message" in error.response.data
      ) {
        console.log(error.response.data.message);
        toast.error(error.response.data.message as string);
      } else if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };
  return (
    <form
      onSubmit={handleFormSubmit}
      className={cn("flex flex-col gap-4", className)}
      {...props}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your email below to login to your account
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            type="email"
            name="email"
            placeholder="m@example.com"
            required
          />
        </Field>
        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Link
              to="/auth/forget-password"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </Link>
          </div>
          <InputGroup>
            <InputGroupInput
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              required
            />
            <InputGroupButton
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </InputGroupButton>
          </InputGroup>
        </Field>
        <Field>
          <Button type="submit">Login</Button>
        </Field>
        <FieldSeparator>Or continue with</FieldSeparator>
        <Field>
          <Button variant="outline" type="button">
            <FaGoogle />
            Login with Google
          </Button>
          <Button variant="outline" type="button">
            <FaGithub />
            Login with GitHub
          </Button>

          <FieldDescription className="text-center">
            Don&apos;t have an account?{" "}
            <Link to="/auth/register" className="underline underline-offset-4">
              Sign up
            </Link>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
