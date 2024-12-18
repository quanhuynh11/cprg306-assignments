import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header>
        <h1 className="text-3xl font-bold">CPRG 306: Web Development 2 - Assignments</h1>
        <p>By: Quan Huynh</p>
      </header>

      <section>
        <h2 className="text-2xl pt-5 font-bold">Assignments</h2>
      <ul>
        <li><Link href="./week-2/" className="underline text-cyan-600 hover:text-cyan-300/75">Week-2</Link></li>
        <li><Link href="./week-3/" className="underline text-cyan-600 hover:text-cyan-300/75">Week-3</Link></li>
        <li><Link href="./week-4/" className="underline text-cyan-600 hover:text-cyan-300/75">Week-4</Link></li>
        <li><Link href="./week-5/" className="underline text-cyan-600 hover:text-cyan-300/75">Week-5</Link></li>
        <li><Link href="./week-6/" className="underline text-cyan-600 hover:text-cyan-300/75">Week-6</Link></li>
        <li><Link href="./week-7/" className="underline text-cyan-600 hover:text-cyan-300/75">Week-7</Link></li>
        <li><Link href="./week-8/" className="underline text-cyan-600 hover:text-cyan-300/75">Week-8</Link></li>
        <li><Link href="./week-9/" className="underline text-cyan-600 hover:text-cyan-300/75">Week-9</Link></li>
        <li><Link href="./week-10/" className="underline text-cyan-600 hover:text-cyan-300/75">Week-10</Link></li>
      </ul>
      </section>
    </main>
  );
}
