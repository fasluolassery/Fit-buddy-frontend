import { useEffect, type ReactNode } from "react";
import { useAppDispatch } from "../shared/hooks/redux";
import { getMeRequest } from "../features/auth/auth.services";
import { authResolved, logout, updateUser } from "../features/auth/auth.slice";

type Props = {
  children: ReactNode;
};

export function AuthInitializer({ children }: Props) {
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
