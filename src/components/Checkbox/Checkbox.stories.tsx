import { Meta, StoryObj } from "@storybook/react";
import { Text } from "../Text/Text";
import { Checkbox, CheckboxProps } from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {},
  decorators: [
    (Story) => (
      <div className="flex items-center gap-2">
        {Story()}
        <Text size="sm"> Lembre-me de mim por 30 dias</Text>
      </div>
    ),
  ],
} as Meta<CheckboxProps>;

export const Default: StoryObj = {};
