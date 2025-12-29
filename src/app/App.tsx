import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { AppProviders } from "./providers";

function App() {
  console.log("App 1");
  return (
    <AppProviders>
      <RouterProvider router={router} />
    </AppProviders>
  );
}

export default App;
