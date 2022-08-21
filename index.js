// Created by marcus.#6969 ( Contact me if u find bugs )
// Updated version of Discord RPC | English Version 1.0
const RPC = require('discord-rpc');
const rpc = new RPC.Client({
    transport: 'ipc'
});

rpc.on('ready', () => {
    rpc.setActivity({
        details: 'Citronmåne Enthusiast',
        state: 'Your text here',
        startTimestamp: new Date(),
        largeImageKey: 'https://i.pinimg.com/originals/0f/e7/ba/0fe7ba095b4f3c1779a3c8f35ad857d3.gif',
        // Input the link of the image u want to use as the big one. [Use google image links]
        largeImageText: 'Your text here',
        // Text that shows when u hover over the big image
        smallImageKey: 'https://static.wixstatic.com/media/2d747f_43f39bf40f784962b2d6686f0f8c12ca~mv2.gif',
        // Input the link of the image u want to use as the small one in the corner. [Use google image links]
        smallImageText: 'Your text here',
        // Text that shows when u hover over the small image
        buttons: [{
            label: 'Your text here',
            url: 'https://youtube.com'
        }, {
            label: 'Your text here',
            url: 'https://youtube.com'
        }]
    });
    console.log('Discord RPC is now running.');
    // Console startup message
})

rpc.login(
    {
        clientId: 'Your clientId here'
        // Your application clientId
    }
)