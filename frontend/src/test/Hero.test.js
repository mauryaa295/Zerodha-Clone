import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";

describe("Hero Component", () => {
  test("render hero image", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("HeroImage");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "media/imgs/homeHero.png");
  });

  test("render signup button", () => {
    render(<Hero />);
    const signupButton = screen.getByRole("Button",{name : "/signup now/i"});
    expect(signupButton).toBeInTheDocument();
    expect(signupButton).toHaveClass("btn-primary");
  });
});
