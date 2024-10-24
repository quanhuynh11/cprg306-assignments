"use client"

import { useState } from "react";
import HomeButton from "../_components/home-button";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemData from "./items.json";
import MealIdeas from "./meal-ideas";

export default function Page() {

    let itemArray = itemData.map((item) => ({...item}));
    const [itemList, setItemList] = useState(itemArray);

    const [openForm, setOpenForm] = useState(false);

    const [selectedItem, setSelectedItem] = useState("");


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
                    <p className="text-2xl">Click on an item for recipe ideas!</p>
                </header>

                <section>
                <button className="bg-lime-600 p-5 rounded mt-5 font-bold text-2xl active:bg-lime-500 hover:bg-lime-800" onClick={() => setOpenForm(true)}>Add Item</button>
                </section>

                <section className="m-5 p-5 w-1/2 bg-cyan-950">
                    <p className=" text-2xl text-center">-- {selectedItem} --</p>
                    {
                        selectedItem && (<MealIdeas ingredient={selectedItem}/>)
                    }
                    
                </section>

                <section>
                    <ItemList itemArray={itemList} selectedIngredient={(item) => setSelectedItem(item)}/>
                </section>

            </section>
        </main>
    );
};