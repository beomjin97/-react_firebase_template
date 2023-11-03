import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("간단 테스트", async () => {
    render(<App />);
    expect(screen.getByText("react + firebase")).toBeDefined();
  });
});
