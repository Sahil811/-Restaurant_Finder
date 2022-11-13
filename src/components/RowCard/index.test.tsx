import React from "react";
import { render, screen } from "../../test-utils";
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
    render(<RowCard data={data} />);
    const rowCardComponent = screen.getByTestId("rowCardContent");
    expect(rowCardComponent).toBeInTheDocument();
  });

  test("address render", () => {
    render(<RowCard data={data} />);
    const addressElement = screen.getByText(/address/i);
    expect(addressElement).toBeInTheDocument();
  });

  test("distance render", () => {
    render(<RowCard data={data} />);
    const distanceElement = screen.getByText(/distance/i);
    expect(distanceElement).toBeInTheDocument();
  });
});
