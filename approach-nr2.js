module.exports = {
  name: 'plugin-ignore-install-options',
  factory: (require) => {
    const { Option } = require('clipanion')
    // const t = require('typanion')

    const essentials = require('@yarnpkg/plugin-essentials').default
    const YarnCommand = essentials.commands.find((plugin) =>
      plugin?.paths?.[0]?.includes('install')
    )

    // This approach will make the list
    // but we have to get the actually flag out from "definition"
    // const installInstance = new YarnCommand()
    // const validOptions = []
    // for (const option in installInstance) {
    //   // const { definition, descriptor } = installInstance[option]
    //   // if (typeof definition === 'function') {
    //   //   console.log('definition', definition)
    //   //   validOptions.push(definition())
    //   // }
    //   validOptions.push(option)
    // }

    class InstallCommand extends YarnCommand {
      nonInteractive = Option.Boolean(`--non-interactive`)

      preferOffline = Option.Boolean(`--prefer-offline`)

      networkTimeout = Option.String(`--network-timeout`, {
        description: `We only pretend this is allowed – v1 fallback`,
      })
    }

    // TODO: Find a way to replace this command, instead of adding a new
    return {
      commands: [InstallCommand],
    }
  },
}
