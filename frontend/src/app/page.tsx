import Link from "next/link";

export default async function Home() {
  const data = await fetch("http://localhost:8000");
  const res: { Hello: string } = await data.json();
  return (
    <main>
      <h1>{res.Hello}</h1>
      <Link href="signup">Signup</Link>
    </main>
  );
}
