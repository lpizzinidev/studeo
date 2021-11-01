const MONGO_IP = process.env.MONGO_IP || 'mongo';
const MONGO_PORT = process.env.MONGO_PORT || 27017;
const MONGO_USER = process.env.MONGO_USER;
const MONGO_PSW = process.env.MONGO_PSW;
const MONGO_DB = process.env.MONGO_DB || 'learning_path_builder';

module.exports = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: `mongodb://${MONGO_USER}:${MONGO_PSW}@${MONGO_IP}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`,
  MONGO_STORE_SECRET_KEY:
    process.env.MONGO_STORE_SECRET_KEY || 'mongo_secret_key1',
  JWT_TOKEN: process.env.JWT_TOKEN || 'secret_jwt_token',
};
