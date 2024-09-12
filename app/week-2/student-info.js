import Link from "next/link";

export default function StudentInfo() {
    return (
        <main>
            <h2 class="text-2xl">Quan Huynh</h2>
            <p>
                <Link href="https://github.com/quanhuynh11/cprg306-assignments" 
                    className="underline text-cyan-600 hover:text-cyan-300/75">Github Repo
                </Link>
            </p>
        </main>
    );
}