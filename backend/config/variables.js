const PORT = process.env.PORT || 5000;
const MONGO_IP = process.env.MONGO_IP || 'mongo';
const MONGO_PORT = process.env.MONGO_PORT || 27017;
const MONGO_DB = process.env.MONGO_DB || 'learning_path_builder';

module.exports = {
  PORT: PORT,
  MONGO_URI: `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PSW}@${MONGO_IP}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`,
  MONGO_STORE_SECRET_KEY: process.env.MONGO_STORE_SECRET_KEY,
  JWT_TOKEN: process.env.JWT_TOKEN,
};
