/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/export */
import { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import { BrowserRouter as Router } from "react-router-dom";

function AllTheProviders({ children }: any): any {
  return (
    <Provider store={store}>
      <Router>{children}</Router>
    </Provider>
  );
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
