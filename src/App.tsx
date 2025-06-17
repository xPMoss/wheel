
import './App.css'

export default function App() {
  return (
    <>
     <Main />
    </>
  )
}

function Main() {
  return (
    <>
      {/*<Header />*/}
      <Routes />
    </>
  );
}

import { RouterProvider, createBrowserRouter } from "react-router-dom"; // 3rd party - by remix run

// Pages
import { HomePage } from "./pages/Home.page";

// Translations

function Routes() {

  // Define public routes accessible to all users
  const routesForPublic = [
    {
      path: "/",
      element: <PublicRoute />, // Wrap the component in ProtectedRoute
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
     
      ],
    },
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter(
    [
      ...(routesForPublic),
    ],
    {
      /*
      future: {
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_relativeSplatPath: true,
        v7_skipActionErrorRevalidation: true,
      },
      */
    }
  );

  // Provide the router configuration using RouterProvider
  return (
    <>
      <RouterProvider
          router={router}
          //future={{v7_startTransition: true,}}
      />      
    </>
  );
}


import { Outlet } from "react-router-dom"; // 3rd party - by remix run
import { ErrorBoundary } from "react-error-boundary"; // 3rd party - by bvaughn (Brian Vaughn)

const PublicRoute = () => {
  return (
    <>
    <ErrorBoundary fallback={<></>}>
      <Outlet />
    </ErrorBoundary>
    </>
  );
};
