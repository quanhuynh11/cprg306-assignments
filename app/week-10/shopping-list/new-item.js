"use client"

import { useState } from "react";
import { addItem } from "../_services/shopping-list-service";
import { useUserAuth } from "../_utils/auth-context";

export default function NewItem({ closeFormFunc }) {

    let incrementButtonStyle = "bg-green-500 px-10 py-5 rounded-full text-2xl hover:bg-green-500/50 active:bg-green-400";
    let decrementButtonStyle = "bg-red-500 px-10 py-5 rounded-full text-2xl hover:bg-red-500/50 active:bg-red-400";

    let incrementIsDisabled = false;
    let decrementIsDisabled = false;

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");
    const { user } = useUserAuth();



    let incrementQuantity = () => {
        let currQuantity = quantity;

        if (quantity < 20) {
            setQuantity(currQuantity + 1);
        }
    };

    let decrementQuantity = () => {
        let currQuantity = quantity;

        if (quantity > 1) {
            setQuantity(currQuantity - 1);
        }
    };

    if (quantity == 20) {
        incrementIsDisabled = true;
        incrementButtonStyle = "bg-gray-600 px-10 py-5 rounded-full text-2xl"
    }
    else if (quantity == 1) {
        decrementIsDisabled = true;
        decrementButtonStyle = "bg-gray-600 px-10 py-5 rounded-full text-2xl"
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        let item = {
            id: Math.floor(Math.random() * 99999),
            name: name,
            quantity: quantity,
            category: category,
        };

        console.dir(`
            Name: ${item.name},
            Quantity: ${item.quantity},
            Category: ${item.category}
        `);

        alert(` 
            Added Item:
            ID: ${item.id}
            Name: ${item.name}
            Quantity: ${item.quantity}
            Category: ${item.category}
        `);

        addItem(user.uid, item);

        setName("");
        setQuantity(1);
        setCategory("");

        closeFormFunc(false);
    };

    if(!user) {
        return (
            <main>
                <p>You shouldn't be here... (you must be signed in)</p>
            </main>
        );
    };

    return (
        <section className="flex absolute w-full h-full bg-gray-400/80 items-center justify-center">
            <form onSubmit={handleSubmit}>

                <section className="text-black font-bold text-4xl text-right w-full mb-2">
                    <button onClick={() => closeFormFunc(false)} className=" hover:text-black/40 active:text-black" type="button">X</button>
                </section>

                <section className="bg-sky-800 m-20 mt-0 p-20 rounded">
                    <section className="mb-5">
                        <input className="bg-sky-400/50 rounded w-full p-3 text-lg focus:bg-sky-400/40 hover:bg-sky-400/30"
                            placeholder="Item Name" value={name} required onChange={(event) => setName(event.target.value)} />
                    </section>

                    <section className="flex justify-between text-center">
                        <h2 className="text-1xl bg-sky-400/20 p-5 px-10 rounded w-full h-full">{quantity}</h2>

                        <section>
                            <select className=" bg-sky-400/50 p-5 px-10 rounded ml-5 h-full font-bold hover:bg-sky-400/10"
                                value={category} onChange={(event) => setCategory(event.target.value)}>
                                <option className="text-black" value="produce">Produce</option>
                                <option className="text-black" value="dairy">Dairy</option>
                                <option className="text-black" value="bakery">Bakery</option>
                                <option className="text-black" value="meat">Meat</option>
                                <option className="text-black" value="frozen foods">Frozen Foods</option>
                                <option className="text-black" value="dry goods">Dry Goods</option>
                                <option className="text-black" value="beverages">Beverages</option>
                                <option className="text-black" value="snacks">Snacks</option>
                                <option className="text-black" value="household">Household</option>
                                <option className="text-black" value="other">Other</option>
                            </select>
                        </section>
                    </section>

                    <section className="flex justify-between mt-10">
                        <button type="button" className={decrementButtonStyle} onClick={decrementQuantity} disabled={decrementIsDisabled}>-</button>
                        <button type="button" className={incrementButtonStyle} onClick={incrementQuantity} disabled={incrementIsDisabled} >+</button>
                    </section>

                    <section className="text-center">
                        <button className="bg-sky-300/50 w-1/2 rounded mt-5 p-5 font-bold text-3xl  hover:bg-sky-400/30 active:bg-sky-300/70">ADD</button>
                    </section>
                </section>


            </form>
        </section>
    );
};