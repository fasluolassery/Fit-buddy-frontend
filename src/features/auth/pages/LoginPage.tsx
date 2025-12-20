import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema, type LoginInput } from "../validation";
import { useAuth } from "../hooks/useAuth";
import { authSuccess } from "../auth.slice";
import { useAppDispatch, useAppSelector } from "../../../shared/hooks/redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const storedata = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const { login, loading, error } = useAuth();

  useEffect(() => {
    console.log("Auth store updated:", storedata);
  }, [storedata]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
    defaultValues: {
      password: "user123",
    },
  });

  const onSubmit = async (data: LoginInput) => {
    const res = await login(data);
    const { user, accessToken } = res.data;
    dispatch(
      authSuccess({
        user,
        accessToken,
      }),
    );
    alert(res.message);
    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-sm space-y-4 rounded-lg bg-white p-6 shadow"
      >
        <h1 className="text-center text-xl font-semibold">Login</h1>

        <input
          {...register("email")}
          placeholder="Email"
          className="w-full rounded border p-2"
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}

        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="w-full rounded border p-2"
        />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={isSubmitting || loading}
          className="w-full rounded bg-blue-600 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {isSubmitting || loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
