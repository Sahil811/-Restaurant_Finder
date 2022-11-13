import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import RowCard from ".";

describe("MapView", () => {
  const data = {
    id: "mapView",
    name: "Toshi",
    location: {
      address: "Minato",
      distance: 1000,
    },
  };
  test("renders correctly", () => {
    render(
      <Router>
        <RowCard data={data} />
      </Router>,
    );
    const textElement = screen.getByTestId("rowCardContent");
    expect(textElement).toBeInTheDocument();
  });

  test("address render", () => {
    render(
      <Router>
        <RowCard data={data} />
      </Router>,
    );
    const addressElement = screen.getByText(/address/i);
    expect(addressElement).toBeInTheDocument();
  });

  test("distance render", () => {
    render(
      <Router>
        <RowCard data={data} />
      </Router>,
    );
    const distanceElement = screen.getByText(/distance/i);
    expect(distanceElement).toBeInTheDocument();
  });
});
