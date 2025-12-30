import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import toast from "react-hot-toast";
import { clearGlobalError } from "../redux/global-error.slice";

export function GlobalErrorListener() {
  const dispatch = useAppDispatch();
  const { message } = useAppSelector(({ globalError }) => globalError);

  useEffect(() => {
    if (!message) return;

    toast.error(message);
    dispatch(clearGlobalError());
  }, [message, dispatch]);

  return null;
}
