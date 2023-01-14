/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Meta, Story } from "@storybook/react";
import Index from "./index";

export default {
  title: `fields/Input`,
  component: Index,
};

const Template = (args) => <Index {...args} />;

export const Default = Template.bind({});

export const Number = Template.bind({});
Number.args = { type: "number", label: "Number", placeHolder: "number" };

export const Password = Template.bind({});
Password.args = {
  type: "password",
  label: "Password",
  placeHolder: "password",
};

export const Required = Template.bind({});
Required.args = { isRequired: true };

export const Error = Template.bind({});
Error.args = { isRequired: true, isTouched: true, error: "Error" };

export const Disabled = Template.bind({});
Disabled.args = { isDisabled: true };

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
  defaultValue: "Hello World",
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  defaultValue: "Hello World",
  isReadOnly: true,
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  label: "",
  placeHolder: "First Name",
};
