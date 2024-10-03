"use client"

import { useState } from "react";

export default function NewItem() {

    let incrementButtonStyle = "bg-green-500 px-10 py-5 rounded-full text-2xl hover:bg-green-500/50 active:bg-green-400";
    let decrementButtonStyle = "bg-red-500 px-10 py-5 rounded-full text-2xl hover:bg-red-500/50 active:bg-red-400";

    let incrementIsDisabled = false;
    let decrementIsDisabled = false;

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");


    let incrementQuantity = () => {
        let currQuantity = quantity;

        if(quantity < 20) {
            setQuantity(currQuantity + 1);
        }
    };

    let decrementQuantity = () => {
        let currQuantity = quantity;

        if(quantity > 1) {
            setQuantity(currQuantity - 1);
        }
    };

    if(quantity == 20) {
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
            name: name,
            quant: quantity,
            cat: category,
        };

        console.dir(`
            Name: ${item.name},
            Quantity: ${item.quant},
            Category: ${item.cat}
        `);

        alert(` 
            Added Item:
            Name: ${item.name}
            Quantity: ${item.quant}
            Category: ${item.cat}
        `);

        setName("");
        setQuantity(1);
        setCategory("");
    };

    return(
        <form className="bg-sky-500/20 m-20 p-20 rounded" onSubmit={handleSubmit}>

            <section className="mb-5">
                <input className="bg-sky-400/50 rounded w-full p-3 text-lg focus:bg-sky-400/40 hover:bg-sky-400/30" 
                    placeholder="Item Name"  value={name} required onChange={(event) => setName(event.target.value)} />
            </section>

            <section className="flex justify-between text-center">
                <h2 className="text-1xl bg-sky-400/20 p-5 px-10 rounded w-full h-full">{quantity}</h2>

                <section>
                    <select className=" bg-sky-400/50 p-5 px-10 rounded ml-5 h-full font-bold hover:bg-sky-400/10" 
                        value={category} onChange={(event) => setCategory(event.target.value)}>
                        <option className="text-black" value="Produce">Produce</option>
                        <option className="text-black" value="Dairy">Dairy</option>
                        <option className="text-black" value="Bakery">Bakery</option>
                        <option className="text-black" value="Meat">Meat</option>
                        <option className="text-black" value="Frozen Foods">Frozen Foods</option>
                        <option className="text-black" value="Dry Goods">Dry Goods</option>
                        <option className="text-black" value="Beverages">Beverages</option>
                        <option className="text-black" value="Snacks">Snacks</option>
                        <option className="text-black" value="Household">Household</option>
                        <option className="text-black" value="Other">Other</option>
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

        </form>
    );
};