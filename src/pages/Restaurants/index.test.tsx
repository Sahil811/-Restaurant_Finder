import { render, screen } from "../../test-utils";
import RestaurantsList from ".";

describe("RestaurantsList", () => {
  test("renders correctly", () => {
    render(<RestaurantsList />);
    const restaurantsListComponent = screen.getByTestId(
      "restaurantsListContent",
    );
    expect(restaurantsListComponent).toBeInTheDocument();
  });
});
