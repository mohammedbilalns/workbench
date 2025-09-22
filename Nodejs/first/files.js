
const fs = require("node:fs/promises");

async function read_file() {
    try {
        const stream = await (await fs.open("./config/log_config.json")).readFile();
        const config = JSON.parse(stream);
        
        console.log('Log prefix is: "%s"', config.log_prefix);
    } catch (err) {
      console.error("Error occurred while reading file: %o", err);
    }
  }
module.exports = read_file;
