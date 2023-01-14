import React from "react";
import { render } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import Meta, * as stories from "./Input.stories";

const { Default, Disabled, Error, ReadOnly, Required, WithDefaultValue } =
  composeStories(stories, Meta);

describe(`Default`, () => {
  it(`renders`, () => {
    render(<Default />);
  });
});
describe(`Disabled`, () => {
  it(`renders`, () => {
    render(<Disabled />);
  });
});
describe(`Error`, () => {
  it(`renders`, () => {
    render(<Error />);
  });
});
describe(`ReadOnly`, () => {
  it(`renders`, () => {
    render(<ReadOnly />);
  });
});
describe(`Required`, () => {
  it(`renders`, () => {
    render(<Required />);
  });
});
describe(`WithDefaultValue`, () => {
  it(`renders`, () => {
    render(<WithDefaultValue />);
  });
});
