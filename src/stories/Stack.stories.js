import Stack from "../components/Stack";

export default {
  title: "Components/Stack",
  component: Stack,
  argTypes: {
    numberOfChildren: { type: "number", defaultValue: 3 },
  },
}

const Template = ({ numberOfChildren, ...args }) => (
  <Stack {...args}>
    {[...Array(numberOfChildren).keys()].map(n => (
      <div
        style={{
          width: "5vw",
          height: "5vw",
          backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {n + 1}
      </div>
    ))}
  </Stack>
)

export const Horizontal = Template.bind({})
Horizontal.args = {
  direction: "row",
  spacing: 2,
  wrap: false,
  size: "lg"
}