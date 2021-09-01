const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const { JWT_TOKEN } = require("./variables");

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_TOKEN,
};

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(jwtOptions, async (token, done) => {
      try {
        return done(null, token.user);
      } catch (err) {
        done(err, null);
      }
    })
  );
};
