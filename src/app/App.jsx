import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./login-page/LoginPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LoggedInUserProvider } from "../components/context/LoggedInUserProvider";

function App() {
  // Create a client
  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
  ]);

  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      {/* use context to store the user data */}
      <LoggedInUserProvider>
        <RouterProvider router={router} />
      </LoggedInUserProvider>
    </QueryClientProvider>
  );
}

export default App;
