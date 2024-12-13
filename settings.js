
//~~~~~~~~~~~~~~~< SETTINGS >~~~~~~~~~~~~~~~\\
const fs = require('fs');
const chalk = require('chalk');


//~~~~~~~~< Owner Information>~~~~~~~~~~~~~~\\
global.ytname = process.env.YT_NAME || "YT: 𝐄𝐌𝐌𝐘 𝐇𝐄𝐍𝐙 𝐓𝐄𝐂𝐇";

global.socialm = process.env.GITHUB_USERNAME || "GitHub: EMMYHENZ-TECH";

global.location = process.env.LOCATION || "Africa, Nigeria, Calabar";


//~~~~~~~~<Session and Bot Details>~~~~~~~~~~~~~\\
global.SESSION_ID = process.env.SESSION_ID || '';

global.botname = process.env.BOT_NAME || '𝗘𝗠𝗠𝗬_𝗛𝗘𝗡𝗭-𝗠𝗗';

global.ownernumber = [process.env.OWNER_NUMBER || '2349125042727'];

global.ownername = process.env.OWNER_NAME || '𝓚𝓘𝓝𝓖 EMMY HENZ';


//~~~~~~<Website and Social Links>~~~~~~~~~~\\
global.websitex = process.env.WEBSITE_URL || "https://youtube.com/@EMMYHENZTECHINFO";

global.wagc = process.env.WHATSAPP_CHANNEL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";


//~~~~~~~~<Theme and Miscellaneous>~~~~~~~~~~\\
global.themeemoji = process.env.THEME_EMOJI || '⭐';

global.wm = process.env.WATERMARK || "EMMY HENZ TECH.";

global.botscript = process.env.SCRIPT_LINK || 'https://github.com/EMMYHENZ-TECH/';

global.packname = process.env.PACK_NAME || "EMMY HENZ";

global.author = process.env.AUTHOR_NAME || "𝓝𝓞𝓑𝓛𝓔 EMMY HENZ";

global.creator = process.env.CREATOR_NUMBER || "2349125042727@s.whatsapp.net";


//~~~~~~~~~~~~~<Bot Settings>~~~~~~~~~~~~~~~\\
global.xprefix = process.env.PREFIX || '.';

global.premium = [process.env.PREMIUM_NUMBER || '2349125042727'];

global.typemenu = process.env.MENU_TYPE || 'v2';

global.typereply = process.env.REPLY_TYPE || 'v4';

global.autoblocknumber = process.env.AUTOBLOCK_COUNTRYCODE || '212';

global.antiforeignnumber = process.env.ANTIFOREIGN_COUNTRYCODE || '91';

global.antidelete = process.env.ANTI_DELETE === 'true';


global.listv = ['⭐','✅','🎁'];


global.tempatDB = process.env.DB_FILE || 'database.json';


global.limit = {
  free: parseInt(process.env.FREE_LIMIT || 100),
  premium: parseInt(process.env.PREMIUM_LIMIT || 999),
  vip: process.env.VIP_LIMIT || 'VIP'
};


global.uang = {
  free: parseInt(process.env.FREE_UANG || 10000),
  premium: parseInt(process.env.PREMIUM_UANG || 1000000),
  vip: parseInt(process.env.VIP_UANG || 10000000)
};


global.mess = {
  error: process.env.ERROR_MESSAGE || 'ERROR, COULD NOT COMPLETE PROCESS!',
  nsfw: process.env.NSFW_MESSAGE || 'Nsfw is disabled in this group, Please tell the admin to enable',
  done: process.env.DONE_MESSAGE || 'Done'
};


global.bot = {
  limit: 0,
  uang: 0
};


global.game = {
  suit: {},
  menfes: {},
  tictactoe: {},
  kuismath: {},
  tebakbom: {},
};


//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\
// Watch for file changes
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Updated ${__filename}`));
  delete require.cache[file];
  require(file);
});
