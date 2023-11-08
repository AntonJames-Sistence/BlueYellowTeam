import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // console.log("session", user, account, profile, email, credentials);
      const adminList = process.env.ADMIN_LIST.split(",");
      const isAdmin = adminList.includes(user.email);
      // console.log("isadmin", isAdmin);
      if (!isAdmin) {
        return "/Error";
      }
      return true;
    },
  },
};
