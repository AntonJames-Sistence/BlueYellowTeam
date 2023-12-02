import { getServerSession } from "next-auth";

export default async function isAdmin() {
  const session = await getServerSession();
  if (!session || !session.user) {
    throw new Error("You are not an admin");
  }
}
