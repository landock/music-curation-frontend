---
message: |
  hygen {bold component new} --name {bold NAME} {italic [--stateful]} {italic [--functional]}

  Generates a React component, a storybook, a SCSS file, and a test.

    NAME           The component name in kebab-case ({bold required}).
    --stateful     Generate a stateful component (optional).
    --functional   Generate a functional component (optional).

  If no flags given, will generate a PureComponent.
---