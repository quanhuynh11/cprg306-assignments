"use client"

import { useState } from "react";
import Item from "./item";

export default function ItemList({itemArray}) {

    const [sortBy, setSortBy] = useState("name");

    let categoryActiveButtonStyles = "bg-indigo-500 p-5 text-2xl font-extrabold rounded w-1/6 m-5 hover:bg-indigo-500/60 active:bg-indigo-400";

    let nameActiveButtonStyles = "bg-indigo-500 p-5 text-2xl font-extrabold rounded w-1/6 m-5 hover:bg-indigo-500/60 active:bg-indigo-400";
    const disabledButtonStyles = "bg-indigo-500/20 p-5 text-2xl font-extrabold rounded w-1/6 m-5";

    let isDisabledNameButton = true;
    let isDisabledCategoryButton = false;

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

    let sortedItems = [...itemArray].sort((a, b) => {
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