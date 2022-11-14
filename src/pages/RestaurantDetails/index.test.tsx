/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { render, screen } from "../../test-utils";
import RestaurantDetails from ".";

describe("RestaurantDetails", () => {
  test("renders correctly", () => {
    render(<RestaurantDetails />);
    const restaurantsListComponent = screen.getByTestId(
      "restaurantDetailsContent",
    );
    expect(restaurantsListComponent).toBeInTheDocument();
  });
});
