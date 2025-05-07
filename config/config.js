// config/config.js
module.exports = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 5000,
    mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/restify',
    jwt: {
      secret: process.env.JWT_SECRET || 'your_jwt_secret_key',
      expiresIn: process.env.JWT_EXPIRE || '30d',
      cookieExpire: process.env.JWT_COOKIE_EXPIRE || 30
    }
  };