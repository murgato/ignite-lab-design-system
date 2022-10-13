import { Meta, StoryObj } from "@storybook/react";
import { TextInput, TextInputRootProps } from "./TextInput";
import { Envelope, Lock } from "phosphor-react";
export default {
  title: "Components/TextInput",
  component: TextInput.Root,
  args: {
    children: <TextInput.Input placeholder="types your e-mail address" />,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};
export const TextInputEmail: StoryObj<TextInputRootProps> = {
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder="types your e-mail address" />,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};
export const TextInputPassword: StoryObj<TextInputRootProps> = {
  args: {
    children: [
      <TextInput.Icon>
        <Lock />
      </TextInput.Icon>,
      <TextInput.Input
        placeholder="types your e-mail address"
        type="password"
      />,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};
