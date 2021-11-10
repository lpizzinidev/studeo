const PORT = process.env.PORT || 5000;
const MONGO_IP = process.env.MONGO_IP || 'mongo';
const MONGO_PORT = process.env.MONGO_PORT || 27017;
const MONGO_USER = process.env.MONGO_USER || 'test';
const MONGO_PSW = process.env.MONGO_PSW || 'test123';
const MONGO_DB = process.env.MONGO_DB || 'learning_path_builder';
const MONGO_STORE_SECRET_KEY =
  process.env.MONGO_STORE_SECRET_KEY || 'secret_key';
const JWT_TOKEN = process.env.TOKEN || 'secret_token';

module.exports = {
  PORT: PORT,
  MONGO_URI: `mongodb://${MONGO_USER}:${MONGO_PSW}@${MONGO_IP}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`,
  MONGO_STORE_SECRET_KEY: MONGO_STORE_SECRET_KEY,
  JWT_TOKEN: JWT_TOKEN,
};
