import { useEffect } from "react";
import { notify } from "../../lib/notify";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/redux";
import { clearGlobalError } from "../store/global-error.slice";

export function GlobalErrorListener() {
  const dispatch = useAppDispatch();
  const { message } = useAppSelector(({ globalError }) => globalError);

  useEffect(() => {
    if (!message) return;

    notify.error(message);
    dispatch(clearGlobalError());
  }, [message, dispatch]);

  return null;
}
