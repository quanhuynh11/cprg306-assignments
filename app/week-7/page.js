"use client"

import { useState } from "react";
import HomeButton from "../_components/home-button";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemData from "./items.json";

export default function Page() {

    let itemArray = itemData.map((item) => ({...item}));
    const [itemList, setItemList] = useState(itemArray);

    const [openForm, setOpenForm] = useState(false);

    const formWindow = (isFormOpen) => {
        setOpenForm(isFormOpen);
    };

    const addNewItem = (itemObj) => {
        setItemList([...itemList, itemObj]);
    };

    return(

        
        <main>
            {openForm && <NewItem addNewItem={addNewItem} closeFormFunc={formWindow}/>}

            <section className="p-10 bg-sky-950/55">


                <header className="">
                    <title>Shopping List</title>
                    <HomeButton />
                    <h1 className="text-4xl pt-10 font-bold">Shopping List</h1>
                </header>

                <section>
                    <button className="bg-lime-600 p-5 rounded mt-5 font-bold text-2xl" onClick={() => setOpenForm(true)}>Add Item</button>
                </section>

                <section>
                    <ItemList itemArray={itemList}/>
                </section>
            </section>
        </main>
    );
};