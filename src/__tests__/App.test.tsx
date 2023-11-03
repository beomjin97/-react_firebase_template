import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("간단 테스트", async () => {
    render(<App />);
    const heading = screen.getByRole("heading", {
      name: "NextJS + Prisma",
    });

    expect(heading).toBeInTheDocument();
  });
});
