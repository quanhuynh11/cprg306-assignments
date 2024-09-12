import Link from "next/link";

export default function HomeButton() {
    return (
        <main>
            <Link href="./" className="flex justify-center p-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                    Home
                </button>
            </Link>
        </main>
    );
}