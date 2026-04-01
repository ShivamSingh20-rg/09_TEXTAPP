const dotenv = require('dotenv'); // Use require

dotenv.config();

const configs = {
  JWT_SECRET: process.env.JWT_SECRET
};

module.exports = configs; // Use module.exports