import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  secret: 'SuperSecret',
  providers: [
    GoogleProvider({
      clientId:
        '877422521634-3fr0lgg3jui19v7c5b6qca6eahgf8gr8.apps.googleusercontent.com',
      clientSecret: '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',
    }),
  ],
};
