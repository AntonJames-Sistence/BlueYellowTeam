import GoogleProvider from "next-auth/providers/google";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { cert } from "firebase-admin/app";
import * as admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: "blueyellowfoundation-b5284",
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    }),
  });
}

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  adapter: FirestoreAdapter({
    credential: cert({
      projectId: "blueyellowfoundation-b5284",
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    }),
  }),
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
    async session({ session, token }) {
      // ...
      console.log("token in options", token);
      if (token) {
        const firebaseToken = await admin.auth().createCustomToken(token.sub);
        session.firebaseToken = firebaseToken;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
};
