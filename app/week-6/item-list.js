"use client"

import { useState } from "react";
import Item from "./item";
import { isDynamicServerError } from "next/dist/client/components/hooks-server-context";

export default function ItemList() {

    const [sortBy, setSortBy] = useState("name");

    let categoryActiveButtonStyles = "bg-indigo-500 p-5 text-2xl font-extrabold rounded w-1/6 m-5 hover:bg-indigo-500/60 active:bg-indigo-400";

    let nameActiveButtonStyles = "bg-indigo-500 p-5 text-2xl font-extrabold rounded w-1/6 m-5 hover:bg-indigo-500/60 active:bg-indigo-400";
    const disabledButtonStyles = "bg-indigo-500/20 p-5 text-2xl font-extrabold rounded w-1/6 m-5";

    let isDisabledNameButton = true;
    let isDisabledCategoryButton = false;

    const items = [
        {
            "id": "1h2GJKH12gkHG31h1H",
            "name": "milk, 4 L 🥛",
            "quantity": 1,
            "category": "dairy"
        },
        {
            "id": "2KJH3k2j3H1k2J3K1H",
            "name": "bread 🍞",
            "quantity": 2,
            "category": "bakery"
        },
        {
            "id": "3h2KJH3k2j3H1k2J3",
            "name": "eggs, dozen 🥚",
            "quantity": 2,
            "category": "dairy"
        },
        {
            "id": "4k2J3K1H2GJKH12gk",
            "name": "bananas 🍌",
            "quantity": 6,
            "category": "produce"
        },
        {
            "id": "5H1h1H2KJH3k2j3H",
            "name": "broccoli 🥦",
            "quantity": 3,
            "category": "produce"
        },
        {
            "id": "6H1k2J3K1H2GJKH1",
            "name": "chicken breasts, 1 kg 🍗",
            "quantity": 1,
            "category": "meat"
        },
        {
            "id": "7gkHG31h1H2KJH3k",
            "name": "pasta sauce 🍝",
            "quantity": 3,
            "category": "canned goods"
        },
        {
            "id": "8j3H1k2J3K1H2GJK",
            "name": "spaghetti, 454 g 🍝",
            "quantity": 2,
            "category": "dry goods"
        },
        {
            "id": "9H12gkHG31h1H2KJ",
            "name": "toilet paper, 12 pack 🧻",
            "quantity": 1,
            "category": "household"
        },
        {
            "id": "10H3k2j3H1k2J3K1",
            "name": "paper towels, 6 pack",
            "quantity": 1,
            "category": "household"
        },
        {
            "id": "11k2J3K1H2GJKH12",
            "name": "dish soap 🍽️",
            "quantity": 1,
            "category": "household"
        },
        {
            "id": "12GJKH12gkHG31h1",
            "name": "hand soap 🧼",
            "quantity": 4,
            "category": "household"
        }
    ]

    if(sortBy == "name") {
        isDisabledNameButton = true;
        isDisabledCategoryButton = false;
        nameActiveButtonStyles = disabledButtonStyles;
    }
    else if(sortBy == "category") {
        isDisabledCategoryButton = true;
        isDisabledNameButton = false;
        categoryActiveButtonStyles = disabledButtonStyles;

    }

    let sortedItems = [...items].sort((a, b) => {
        if(sortBy == "name") {
            return a.name > b.name ? 1 : -1;
        }
        else if (sortBy == "category") {
            return a.category > b.category ? 1 : -1;
        }

        return 0;
    });

    return (
        <div>
            <section>
                <h2 className="text-2xl pt-5" >Sort by: </h2>

                <section>
                    <button type="button" className={nameActiveButtonStyles} disabled={isDisabledNameButton} onClick={() => setSortBy("name")}>Name</button>
                    <button type="button" className={categoryActiveButtonStyles} disabled={isDisabledCategoryButton} onClick={() => setSortBy("category")} >Category</button>
                </section>
            </section>

            <section>
                <ul>
                    {sortedItems.map(currItem => (
                        <Item
                            key={currItem.id}
                            name={currItem.name}
                            quantity={currItem.quantity}
                            category={currItem.category}
                        />
                    ))}
                </ul>
            </section>
        </div>
    );
};