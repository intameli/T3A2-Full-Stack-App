import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import user from "@testing-library/user-event";
import App from "../App";

describe("App Component", () => {
  it("shows the heading on tutor page", () => {
    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const h3 = container.querySelector("h3");

    expect(h3).toBeInTheDocument();
    expect(h3).toHaveTextContent("All Tutors");
  });

  //designed for integration with locally running backend
  it("login integration test", async () => {
    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const loginBtn = container.querySelector("nav #loginid");
    await user.click(loginBtn);

    const heading = container.querySelector("h3");

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Login");

    const emailInput = container.querySelector('input[name="email"]');
    const passwordInput = container.querySelector('input[name="password"]');

    await user.type(emailInput, "test@test.com");
    await user.type(passwordInput, "test1");

    expect(emailInput).toHaveValue("test@test.com");
    expect(passwordInput).toHaveValue("test1");

    const submitBtn = container.querySelector("#submit");

    await user.click(submitBtn);

    const profileName = await screen.findByText("Welcome Jacob");

    expect(profileName).toBeInTheDocument();
  });
});
