import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./components/local/dashboard";
import Members from "./components/local/members";
import Books from "./components/local/books";
import Genres from "./components/local/genres";
import Authors from "./components/local/authors";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./components/ui/button";
import { Toaster } from "./components/ui/toaster";

function App() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const router = createBrowserRouter([
    {
      path: "/",
      Component: Dashboard,
    },
    {
      path: "/members",
      Component: Members,
    },
    {
      path: "/books",
      Component: Books,
    },
    {
      path: "/genres",
      Component: Genres,
    },
    {
      path: "/authors",
      Component: Authors,
    },
  ]);

  return (
    <>
      {!isAuthenticated ? (
        <Button variant="link" onClick={() => loginWithRedirect()}>
          Login
        </Button>
      ) : (
        <>
          <div className="container">
            <RouterProvider router={router}></RouterProvider>
          </div>
          <Toaster></Toaster>
        </>
      )}
    </>
  );
}

export default App;
