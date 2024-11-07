export default function Item({name, quantity, category, ingredientPressed}) {

    return (
        <div className="text-center w-1/4 bg-cyan-800 p-5 m-5 font-mono hover:bg-cyan-950 cursor-pointer active:bg-cyan-700"
        onClick={() => ingredientPressed(name.split(",")[0].replace(/[^a-zA-Z\s]/g, ""))}>
                <li className="font-bold text-2xl">{name}</li>
                <li>Amount: <b>{quantity}</b></li>
                <li>Aisle: <b>{category}</b></li>
        </div>
    );
};