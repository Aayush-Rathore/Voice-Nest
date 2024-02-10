import passport, { Profile } from "passport";
import {
  Strategy as GoogleStrategy,
  VerifyCallback,
  StrategyOptions,
} from "passport-google-oauth20";

interface GoogleProfile extends Profile {
  // Define any additional properties you expect to receive in the Google profile
}

const googleStrategyOptions: StrategyOptions = {
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback",
};

passport.use(
  new GoogleStrategy(
    googleStrategyOptions,
    (
      accessToken: string,
      refreshToken: string,
      profile: GoogleProfile,
      done: VerifyCallback
    ) => {
      // Use profile information to check if the user is authenticated
      // You can save the user to your database here
      return done(null, profile);
    }
  )
);

export default passport;
