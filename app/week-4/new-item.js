"use client"

import { useState } from "react";

export default function NewItem() {

    let incrementButtonStyle = "bg-green-500 px-10 py-5 rounded-full text-2xl hover:bg-green-500/50 active:bg-green-400";
    let decrementButtonStyle = "bg-red-500 px-10 py-5 rounded-full text-2xl hover:bg-red-500/50 active:bg-red-400";

    let incrementIsDisabled = false;
    let decrementIsDisabled = false;


    const [quantity, setQuantity] = useState(1);


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
    }

    return(
        <div className="bg-sky-400/30 m-20 p-20 rounded">
            <section className="flex justify-center text-center">
                <h2 className="text-2xl bg-sky-400/20 p-5 px-10 rounded w-full">{quantity}</h2>
            </section>

            <section className="flex space-x-20 mt-10">
                <button className={decrementButtonStyle} onClick={decrementQuantity} disabled={decrementIsDisabled}>-</button>
                <button className={incrementButtonStyle} onClick={incrementQuantity} disabled={incrementIsDisabled} >+</button>
                
            </section>
        </div>
    );
};