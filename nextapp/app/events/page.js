export default async function Page() {
  const request = await fetch('http://localhost:3000/api/events');
  const data = await request.json();
  console.log(data);
  return <></>;
}
