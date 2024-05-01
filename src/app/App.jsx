import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./login-page/LoginPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
