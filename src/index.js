const { Client, Events, GatewayIntentBits } = require('discord.js');
const onReady = require('./events/onReady.js');
const onInteractionCreated = require('./events/onInteractionCreated.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const PocketBase = require('pocketbase/cjs');
require('dotenv').config();

client.on(Events.ClientReady, async () => await onReady(client));

client.on(Events.InteractionCreate, async interaction => await onInteractionCreated(interaction));

client.login(process.env.TOKEN);

const INTERVAL = 1000 * 60 * 5;
setInterval(() => {
	const guilds = client.guilds.cache;
	guilds.forEach(async guild => {
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
	})
}, INTERVAL);