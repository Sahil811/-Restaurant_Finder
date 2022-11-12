import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/Hoc/ErrorBoundry";
import ErrorPage from "./components/ErrorPage";
const Restaurants = lazy(async () => await import("./pages/Restaurants"));
const RestaurantDetails = lazy(
  async () => await import("./pages/RestaurantDetails"),
);

const routes = [
  {
    path: "/",
    name: "Restaurants",
    element: Restaurants,
  },
  {
    path: "/restaurant/:id",
    name: "Restaurants Details",
    element: RestaurantDetails,
  },
];

const App: React.FC = () => {
  return (
    <div>
      <ErrorBoundary>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {routes.map((route) => (
                <Route
                  key={`${route.name}`}
                  path={`${route.path}`}
                  element={<route.element />}
                />
              ))}
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Suspense>
        </Router>
      </ErrorBoundary>
    </div>
  );
};

export default App;
