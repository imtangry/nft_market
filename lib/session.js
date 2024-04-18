export const sessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD,
  cookieName: "DAISY_NFT_MARKET",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};