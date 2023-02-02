const { SlashCommandBuilder, CategoryChannelChildManager } = require('discord.js');
const PocketBase = require('pocketbase/cjs');
require('cross-fetch/polyfill');

const commandData = [{
    data: new SlashCommandBuilder().
        setName('ping').
        setDescription('Replies with Pong!'),
    run: async (interaction) => {
        await interaction.reply('Pong!');
    }
}, {
    data: new SlashCommandBuilder().
        setName('settime').
        setDescription('Sets a start and an end time').
        addStringOption((option) => option.setName('start').setDescription('The start time').setRequired(true)).
        addStringOption((option) => option.setName('end').setDescription('The end time').setRequired(true)),
    run: async (interaction) => {
        const start = interaction.options.getString('start').split(':');
        const end = interaction.options.getString('end').split(':');

        const guild = interaction.guild.id;

        const pb = new PocketBase(process.env.PB_ENDPOINT);

        const data = {
            "guild": guild,
            "startHours": start[0],
            "endHours": end[0],
            "startMinutes": start[1],
            "endMinutes": end[1]
        };

        try {
            const result = await pb.collection('times').getList(1, 50, {
                filter: `guild = ${guild}`
            })

            if (result.items.length > 0) {
                const update = await pb.collection('times').update(result.items[0].id, data);
            } else {
                const create = await pb.collection('times').create(data);
            }
        } catch (error) {
            console.log("error")
        }

        await interaction.reply(`Time set: ${start[0]}:${start[1]} - ${end[0]}:${end[1]}`);
    }
}, {
    data: new SlashCommandBuilder().
        setName('setchannel').
        setDescription('Sets the channel to show the open times').
        addChannelOption((option) => option.setName('channel').setDescription('The channel to show the open times').setRequired(true)),
    run: async (interaction) => {
        const channel = interaction.options.getChannel('channel');
        const guild = interaction.guild.id;

        const pb = new PocketBase(process.env.PB_ENDPOINT);

        const data = {
            "guild": guild,
            "channel_id": channel.id
        };

        try {
            const result = await pb.collection('times').getList(1, 50, {
                filter: `guild = ${guild}`
            })

            if (result.items.length > 0) {
                const update = await pb.collection('times').update(result.items[0].id, data);
            } else {
                const create = await pb.collection('times').create(data);
            }
        } catch (error) {
            console.log("error")
        }

        await interaction.reply(`Channel: ${channel.name}`);
    },
}, {
    data: new SlashCommandBuilder().
        setName('reload').
        setDescription('Reloads the open times'),
    run: async (interaction) => {
        const guild = interaction.guild;

        const pb = new PocketBase(process.env.PB_ENDPOINT);
        const result = await pb.collection('times').getList(1, 50, {
            filter: `guild = ${guild.id}`
        })

        if (result.items.length > 0) {
            const start = new Date();
            const end = new Date();
            start.setHours(result.items[0].startHours);
            start.setMinutes(result.items[0].startMinutes);
            end.setHours(result.items[0].endHours);
            end.setMinutes(result.items[0].endMinutes);

            const now = new Date();

            const channel = guild.channels.cache.get(result.items[0].channel_id);
            const channelName = `${now > start && now < end ? "Open" : "Closed"} : ${start.getHours()}:${(start.getMinutes()<10?'0':'') + start.getMinutes()} - ${end.getHours()}:${(end.getMinutes()<10?'0':'') + end.getMinutes()}`
            channel.setName(channelName);
        }
        

        await interaction.reply(`Reloaded`);
    }
}];

module.exports = commandData;