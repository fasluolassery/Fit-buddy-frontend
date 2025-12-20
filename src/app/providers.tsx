import { useEffect, useState, type JSX, type ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { useAppDispatch } from "../shared/hooks/redux";
import { getMeRequest } from "../features/auth/auth.services";
import { authSuccess, logout } from "../features/auth/auth.slice";

type Props = {
  children: ReactNode;
};

function AuthInitializer({ children }: Props): JSX.Element {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      try {
        const res = await getMeRequest();
        const { user, accessToken } = res.data;
        dispatch(authSuccess({ user, accessToken }));
      } catch {
        dispatch(logout());
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  return <>{children}</>;
}

export function AppProviders({ children }: Props) {
  return (
    <Provider store={store}>
      <AuthInitializer>{children}</AuthInitializer>
    </Provider>
  );
}
