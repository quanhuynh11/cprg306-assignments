import HomeButton from "../_components/home-button";
import NewItem from "./new-item";

export default function Page() {
    return(
        <main className="p-10 bg-sky-950/55">
            <header className="pb-10">
                <HomeButton />
            </header>
            <section className="flex justify-center">
                <NewItem />
            </section>
        </main>
    );
};