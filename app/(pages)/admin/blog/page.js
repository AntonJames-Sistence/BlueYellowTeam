import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
export default async function Blog() {
  const session = await getServerSession();
  const isAdmin = session?.user;
  if (!isAdmin) {
    redirect("/admin/login");
  }
  return (
    <div>
      <h1>Blog</h1>
      <div>idk</div>
    </div>
  );
}
