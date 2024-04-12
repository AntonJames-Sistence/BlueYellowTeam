import postgres from "postgres";

export default async function getAllPost() {
  const data = [];

  const sql = postgres(process.env.POSTGRESQL_DB, { ssl: "require" });
  const allPostSS = await sql`SELECT * FROM facebook;`;

  allPostSS.forEach((doc) => {
    data.push(doc);
  });

  data.sort((a, b) => {
    return new Date(b.createdat) - new Date(a.createdat);
  });

  return data;
}
