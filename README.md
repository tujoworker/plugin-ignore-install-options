# Ignore Install Options

This Yarn Plugin helps you to ignore legacy flags from Yarn v1 – while you install dependencies with Yarn v3 – without braking the initial command.

This way, CIs which by default run e.g. `yarn install --non-interactive --prefer-offline --network-timeout 600000` – will still work., as it becomes `yarn install`.

## Requirements

- Yarn v3 or higher.
- Node.js 14.17.6 or higher.

## How to use?

1. Run one of these commands:

`yarn add -D plugin-ignore-install-options`

or

`yarn plugin import https://raw.githubusercontent.com/tujoworker/plugin-ignore-install-options/main/index.js`

2. and git commit the new generated file inside /plugins.
