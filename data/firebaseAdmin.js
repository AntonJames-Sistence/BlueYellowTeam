import "server-only";
import admin, { credential, storage } from "firebase-admin";

function formatPrivateKey(key) {
  return key.replace(/\\n/g, "\n");
}

export function createFirebaseAdminApp(params) {
  const privateKey = formatPrivateKey(params.privateKey);

  if (admin.apps.length > 0) {
    return admin.app();
  }

  const cert = admin.credential.cert({
    projectId: params.projectId,
    clientEmail: params.clientEmail,
    privateKey,
  });

  return admin.initializeApp({
    credential: cert,
    projectId: params.projectId,
    storageBucket: params.storageBucket,
  });
}

export async function initAdmin() {
  const params = {
    projectId: "blueyellowfoundation-b5284",
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
  };

  return createFirebaseAdminApp(params);
}
