import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the portfolio heading", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", {
      level: 1,
      name: /andrés carrasco inostroza/i,
    })
  ).toBeInTheDocument();
});
