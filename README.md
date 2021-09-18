# Ignore Install Options

This Yarn Plugin helps you to ignore legacy flags from Yarn v1 – while you install dependencies with Yarn v3 – without braking the initial command.

This way, CIs which by default run e.g. `yarn install --non-interactive --prefer-offline --network-timeout 600000` – will still work., as it becomes `yarn install`.

## Requirements

Yarn v3.

## How to use?

1. Run this command

`yarn plugin import https://raw.githubusercontent.com/tujoworker/plugin-ignore-install-options/main/index.js`

2. and git commit the new generated file inside /plugins.
