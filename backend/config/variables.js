const PORT = process.env.PORT || 5001;
const MONGO_IP = process.env.MONGO_IP || 'mongo';
const MONGO_PORT = process.env.MONGO_PORT || 27017;

module.exports = {
  PORT: PORT,
  MONGO_URI: `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/${process.env.MONGO_INITDB_DATABASE}?authSource=admin`,
  JWT_TOKEN: process.env.JWT_TOKEN,
};
