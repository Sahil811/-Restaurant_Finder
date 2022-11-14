/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { render, screen, act } from "../../test-utils";
import RestaurantsList from ".";

describe("RestaurantsList", () => {
  test("renders correctly", () => {
    render(<RestaurantsList />);
    const restaurantsListComponent = screen.getByTestId(
      "restaurantsListContent",
    );
    expect(restaurantsListComponent).toBeInTheDocument();
  });

  test("renders restuarant list correctly", async () => {
    act(async () => {
      render(<RestaurantsList />);
      const listNode = await screen.findByTestId("restaurants__list");
      expect(listNode.children).toHaveLength(3);
    });
  });
});
