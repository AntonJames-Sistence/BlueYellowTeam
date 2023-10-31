import GoogleProvider from "next-auth/providers/google";
// import { FirestoreAdapter } from "@auth/firebase-adapter";
// import { cert } from "firebase-admin/app";

export const authOptions = {
  secret: "SuperSecret",
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  // adapter: FirestoreAdapter({
  //   credential: cert({
  //     projectId: process.env.FIREBASE_PROJECT_ID,
  //     clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  //     privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  //   }),
  // }),
  callbacks: {
    async jwt({ token, account }) {
      const adminList = process.env.ADMIN_LIST.split(",");
      // console.log("list", adminList);
      if (adminList.includes(token.email)) {
        token.role = "Admin";
      } else {
        token.role = "User";
      }

      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role;
      // console.log("session", session);
      return session;
    },
  },
};
