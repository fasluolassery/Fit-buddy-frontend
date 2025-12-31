import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { clearGlobalError } from "../redux/global-error.slice";
import { notify } from "../../lib/notify";

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
