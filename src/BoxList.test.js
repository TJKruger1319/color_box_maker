import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

it("Can add a new box", function() {
    const { getByLabelText, queryByText } = render(<BoxList />);

    expect(queryByText("X")).not.toBeInTheDocument();

    const colorInput = getByLabelText("Color");
    const widthInput = getByLabelText("Width");
    const heightInput = getByLabelText("Height");
    const submitButton = queryByText("Add a new box");

    fireEvent.change(colorInput, { target: { value: "blue"}});
    fireEvent.change(widthInput, { target: { value: "100px"}});
    fireEvent.change(heightInput, { target: { value: "100px"}});
    fireEvent.click(submitButton);

    expect(queryByText("X")).toBeInTheDocument();
})

it("matches snapshot", function() {
    const {asFragment} = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
  });