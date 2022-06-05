# Minecraft Bot (renamed from Minecraft Skin Grabber)
Get Minecraft skins, UUIDs, 2b2t info, and more from Discord!

[![Discord Bots](https://top.gg/api/widget/739577411716513832.svg)](https://top.gg/bot/739577411716513832)

## Development Setup
### Step 1
Clone the source code.

### Step 2
Go into the directory and run `npm i`.

### Step 3
Create a file named `.env` with the following contents:
```
DISCORD_TOKEN=<your bot token goes here>
```

### Step 4
Start the bot by running `main.js` (`node .`). If you want to make new commands, check out the [WOKCommands package](https://www.npmjs.com/package/wokcommands) for instructions.

## Commands

### Minecraft Skins
**mcb!body** - Grab a Minecraft user's body.<br>**mcb!skin** - Grab a Minecraft user's skin.<br>**mcb!bust** - Grab a Minecraft user's body in profile picture form.<br>**mcb!cube** - Grab a Minecraft user's head in cube form.<br>**mcb!head** - Grab a Minecraft user's head.

### Utilities
**mcb!newname** - Read about my new name!<br>**mcb!ping** - Test the bot's latency.<br>**mcb!status** - Get the status for Minecraft, Minotar, and ~~Hypixel~~ (Hypixel coming soon).

### 2b2t Commands
**mcb!2b2t** - Get 2b2t info.

### Minecraft API
**mcb!uuid** - Get a Minecraft user's UUID.

## Credits
Minecraft API - https://wiki.vg/Mojang_API/<br>Hypixel API - https://api.hypixel.net/<br>2b2t API - https://2b2t.io & https://api.2b2t.dev/<br>Minotar - https://minotar.net<br>WOKCommands - https://www.npmjs.com/package/wokcommands<br>node-fetch - https://www.npmjs.com/package/node-fetch<br>node-ping - https://www.npmjs.com/package/ping
