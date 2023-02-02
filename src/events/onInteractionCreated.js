const commandData = require('../commands/index.js');

const onInteractionCreated = async interaction => {
    if (!interaction.isCommand()) return;
    const { commandName } = interaction;
    const command = commandData.find(command => command.data.name === commandName);
    if (!command) return;
    await command.run(interaction);
}

module.exports = onInteractionCreated;