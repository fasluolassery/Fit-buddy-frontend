import { useEffect, type ReactNode } from "react";
import { useAppDispatch } from "../shared/hooks/redux";
import {
  getMeRequest,
  refreshTokenRequest,
} from "../features/auth/auth.services";
import {
  authResolved,
  logout,
  tokenRefreshed,
  updateUser,
} from "../features/auth/auth.slice";
import type { ApiErrorResponse } from "../shared/types/api";
import { AxiosError } from "axios";

type Props = {
  children: ReactNode;
};

export function AuthInitializer({ children }: Props) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const initAuth = async () => {
      try {
        const refreshRes = await refreshTokenRequest();
        console.log("Refresh Res at init: ", refreshRes);
        const { accessToken } = refreshRes.data;
        dispatch(tokenRefreshed({ accessToken }));

        const meRes = await getMeRequest();
        console.log("Me Res: ", meRes);
        const { data } = meRes;
        dispatch(updateUser(data));
      } catch (err) {
        if (err instanceof AxiosError) {
          console.log("axios err: ", err.response?.data);
        } else {
          const apiError = err as ApiErrorResponse;
          console.log("err:", apiError);
        }

        dispatch(logout());
      } finally {
        dispatch(authResolved());
      }
    };

    initAuth();
  }, [dispatch]);

  return <>{children}</>;
}
