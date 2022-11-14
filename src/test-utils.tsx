/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable import/export */
import { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: Router, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
