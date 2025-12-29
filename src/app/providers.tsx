import { useEffect, type JSX, type ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { useAppDispatch } from "../shared/hooks/redux";
import { getMeRequest } from "../features/auth/auth.services";
import { authResolved, logout, updateUser } from "../features/auth/auth.slice";

type Props = {
  children: ReactNode;
};

function AuthInitializer({ children }: Props): JSX.Element {
  console.log("AuthInitializer 3");
  const dispatch = useAppDispatch();

  useEffect(() => {
    const initAuth = async () => {
      try {
        const res = await getMeRequest();
        console.log("get me res data: ", res);
        const { data } = res;
        dispatch(updateUser(data));
      } catch {
        dispatch(logout());
      } finally {
        dispatch(authResolved());
      }
    };

    initAuth();
  }, [dispatch]);

  return <>{children}</>;
}

export function AppProviders({ children }: Props) {
  console.log("App provider 2");
  return (
    <Provider store={store}>
      <AuthInitializer>{children}</AuthInitializer>
    </Provider>
  );
}
