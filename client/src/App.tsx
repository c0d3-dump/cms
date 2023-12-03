import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./components/local/dashboard";
import Members from "./components/local/members";
import Books from "./components/local/books";
import Genres from "./components/local/genres";
import Authors from "./components/local/authors";

function App() {
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
      <div className="container">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
}

export default App;
