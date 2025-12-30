import { type ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { Toaster } from "react-hot-toast";
import { toasterOptions } from "../styles/toast.config";
import { GlobalErrorListener } from "../shared/listeners/GlobalErrorListener";
import { AuthInitializer } from "./AuthInitializer";

type Props = {
  children: ReactNode;
};

export function AppProviders({ children }: Props) {
  return (
    <Provider store={store}>
      <Toaster position="top-right" toastOptions={toasterOptions} />
      <GlobalErrorListener />
      <AuthInitializer>{children}</AuthInitializer>
    </Provider>
  );
}
