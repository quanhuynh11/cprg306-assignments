import HomeButton from "../_components/home-button";
import ItemList from "./item-list";

export default function Page() {
    return(
        <main className="p-10 bg-sky-950/55">
            <header className="">
                <title>Shopping List</title>
                <HomeButton />
                <h1 className="text-4xl pt-10 font-bold">Shopping List</h1>
            </header>
            <section>
                <ItemList />
            </section>
        </main>
    );
};