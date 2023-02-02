const { REST, Routes } = require('discord.js');

const commandData = require('../commands/index.js');

const onReady = async (client) => {
    console.log(`Logged in as ${client.user.tag}!`);

    const token = process.env.TOKEN;
    const client_id = process.env.CLIENT_ID;

    const rest = new REST({ version: '10' }).setToken(token);

    const data = commandData.map(command => command.data.toJSON());
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationCommands(client_id),
            { body: data },
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
}

module.exports = onReady;
