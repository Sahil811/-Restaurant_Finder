import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import ErrorBoundary from "./components/Hoc/ErrorBoundry/ErrorBoundry";
import ErrorPage from "./components/ErrorPage/ErrorPage";
const Restaurants = lazy(
  async () => await import("./pages/Restaurants/Restaurants"),
);
const RestaurantDetails = lazy(
  async () => await import("./pages/RestaurantDetails/RestaurantDetails"),
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
      <Provider store={store}>
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
      </Provider>
    </div>
  );
};

export default App;
