const dotenv = require('dotenv'); // Use require

dotenv.config();

const configs = {
  JWT_SECRET: process.env.JWT_SECRET,
  MONGO_URL: process.env.MONGO_URL
};

module.exports = configs; // Use module.exports