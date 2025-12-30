import { useEffect, type JSX, type ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { useAppDispatch } from "../shared/hooks/redux";
import { getMeRequest } from "../features/auth/auth.services";
import { authResolved, logout, updateUser } from "../features/auth/auth.slice";
import { Toaster } from "react-hot-toast";
import { toasterOptions } from "../styles/toast.config";
import { GlobalErrorListener } from "../shared/listeners/GlobalErrorListener";

type Props = {
  children: ReactNode;
};

function AuthInitializer({ children }: Props): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const initAuth = async () => {
      try {
        const res = await getMeRequest();
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
  return (
    <Provider store={store}>
      <Toaster position="top-right" toastOptions={toasterOptions} />
      <GlobalErrorListener />
      <AuthInitializer>{children}</AuthInitializer>
    </Provider>
  );
}
