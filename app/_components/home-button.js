import Link from "next/link";

export default function HomeButton() {
    return (
        <main>
            <Link href="./" className="flex justify-center py-2">
                <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Home
                </button>
            </Link>
        </main>
    );
}