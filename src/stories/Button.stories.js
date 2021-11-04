import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {handleClick: {action: "handleClick"}},
}

const Template = args => <Button {...args} />

export const Green = Template.bind({})

Green.args = {
  backgroundColor: "green",
  label: "Button of Mighty Power",
  size: "md",
}

export const Red = Template.bind({})

Red.args = {
  backgroundColor: "red",
  label: "Button of Mighty Power",
  size: "lg",
}