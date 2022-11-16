/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { render, screen, act } from "../../test-utils";
import RestaurantDetails from "./RestaurantDetails";

describe("RestaurantDetails", () => {
  test("renders correctly", () => {
    render(<RestaurantDetails />);
    const restaurantsListComponent = screen.getByTestId(
      "restaurantDetailsContent",
    );
    expect(restaurantsListComponent).toBeInTheDocument();
  });

  test("renders restuarant list correctly", async () => {
    act(async () => {
      render(<RestaurantDetails />);
      const nodeElement = await screen.findByText(/Reviews/i);
      expect(nodeElement).toBeInTheDocument();
    });
  });
});
