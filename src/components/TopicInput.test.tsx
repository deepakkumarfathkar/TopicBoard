import React from "react";
import TopicInput from "./TopicInput";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { TopicType } from "../constants";

it("should render Topic Input component", () => {
  render(<TopicInput type={TopicType.Pending} onCancel={() => {}} />);
  expect(screen.getByTestId("input-topic")).toBeInTheDocument();
  expect(screen.getByTestId("save-topic-btn")).toBeInTheDocument();
  expect(screen.getByTestId("cancel-add-topic-btn")).toBeInTheDocument();
});

// it("should type input component", () => {
//   render(<TopicInput type={TopicType.Pending} onCancel={() => {}} />);
//   let inputElement = screen.getByTestId("input-topic");
//   expect(inputElement.value).toBe("");
//   fireEvent.change(inputElement, { target: { value: "First Topic" } });
//   expect(inputElement.value).toBe("First Topic");
// });

it("should save the value", () => {
  render(<TopicInput type={TopicType.Pending} onCancel={() => {}} />);
  let inputElement = screen.getByTestId("input-topic");

  fireEvent.change(inputElement, { target: { value: "First Topic" } });
  fireEvent.click(screen.getByTestId("save-topic-btn"));
});

afterEach(() => {
  cleanup();
});
