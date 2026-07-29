import React from "react";
import { render, screen, within } from "@testing-library/react";
import App from "./App";

test("renders the portfolio home page", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: /Shripad Khandare/i, level: 1 })).toBeInTheDocument();
  expect(within(screen.getByRole("navigation", { name: /primary/i })).getByRole("link", { name: "Projects" })).toHaveAttribute("href", "/projects");
  expect(screen.queryByRole("button", { name: /switch to (dark|light) mode/i })).not.toBeInTheDocument();
});
